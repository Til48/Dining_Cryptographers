<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const sharedSecrets = ref({});
const payer = ref(null);

const randomizeSharedSecrets = () => {
  store.dispatch('randomizeSharedSecrets');
};

onMounted(() => {
  // Abrufen des Payer-Werts aus dem localStorage
  const storedPayer = localStorage.getItem('payer');
  payer.value = storedPayer ? JSON.parse(storedPayer).value : null;

  store.subscribe((mutation, state) => {
    if (mutation.type === 'SET_SHARED_SECRETS') {
      sharedSecrets.value = state.sharedSecrets || {};
    }
  });
  sharedSecrets.value = store.getters.getSharedSecrets || {};
});

// Funktion zum Berechnen des XOR von mehreren Werten
const calculateXOR = (...args) => {
  return args.reduce((acc, val) => acc ^ val, 0);
};

// Funktion zum Berechnen des invertierten XOR-Ergebnisses (bitweises Inverse)
const calculateInvertedXOR = (...args) => {
  const xorResult = calculateXOR(...args);
  return xorResult ^ 1; // invertiert das letzte Bit
};  

// Funktion zum Berechnen des Gesamtergebnisses
const calculateTotalXOR = () => {
  const xorValues = [
    payer.value === 'A' ? calculateInvertedXOR(sharedSecrets.value.AB, sharedSecrets.value.AC, sharedSecrets.value.AD, sharedSecrets.value.AE) : calculateXOR(sharedSecrets.value.AB, sharedSecrets.value.AC, sharedSecrets.value.AD, sharedSecrets.value.AE),
    payer.value === 'B' ? calculateInvertedXOR(sharedSecrets.value.AB, sharedSecrets.value.BC, sharedSecrets.value.BD, sharedSecrets.value.BE) : calculateXOR(sharedSecrets.value.AB, sharedSecrets.value.BC, sharedSecrets.value.BD, sharedSecrets.value.BE),
    payer.value === 'C' ? calculateInvertedXOR(sharedSecrets.value.AC, sharedSecrets.value.BC, sharedSecrets.value.CD, sharedSecrets.value.CE) : calculateXOR(sharedSecrets.value.AC, sharedSecrets.value.BC, sharedSecrets.value.CD, sharedSecrets.value.CE),
    payer.value === 'D' ? calculateInvertedXOR(sharedSecrets.value.AD, sharedSecrets.value.BD, sharedSecrets.value.CD, sharedSecrets.value.DE) : calculateXOR(sharedSecrets.value.AD, sharedSecrets.value.BD, sharedSecrets.value.CD, sharedSecrets.value.DE),
    payer.value === 'E' ? calculateInvertedXOR(sharedSecrets.value.AE, sharedSecrets.value.BE, sharedSecrets.value.CE, sharedSecrets.value.DE) : calculateXOR(sharedSecrets.value.AE, sharedSecrets.value.BE, sharedSecrets.value.CE, sharedSecrets.value.DE),
  ];
  return calculateXOR(...xorValues);
};

const totalXOR = computed(() => calculateTotalXOR());

</script>

<template>
    <div class="card button">
        <a href="/uikit/povA">
        <Button label="POV A" severity="secondary" class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povB">
        <Button label="POV B" severity="secondary"  class="mb-2 mr-2 secondary " /> </a>
        <a href="/uikit/povC">
        <Button label="POV C" severity="secondary"  class="mb-2 mr-2 secondary " /> </a>
        <a href="/uikit/povD">
        <Button label="POV D" severity="secondary"  class="mb-2 mr-2 secondary " /> </a>
        <a href="/uikit/povE">
        <Button label="POV E" severity="secondary"  class="mb-2 mr-2 secondary raised" /> </a>
        <a href="/uikit/povuser">
        <Button label="POV User" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
    </div>

    <div class="main">
        <div class="container card">
            <div class="card table1">
                <h5>POV E</h5>
                <table>
                    <tr>
                      <th>Shared Key</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>EA</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>EB</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>EC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>ED</td>
                      <td>1</td>
                    </tr>
                  </table>
            </div>

            <div class="card table2">
                <h5>XOR calculation</h5>
                <table>
                    <tr>
                      <th>Cryptographers</th>
                      <th>XOR</th>
                    </tr>
                    <tr>
                      <td>A</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>D</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>E</td>
                        <td></td>
                      </tr>
                      
                  </table>
            </div>

            <div class="card table1">
                
                <h5>POV E</h5>
                <table>
                    <tr>
                      <th>Broadcast</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>A</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>1</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>E</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Result</td>
                        <td>1</td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
    
    
    <div class="card">
        <h4>Select Cryptographer</h4>
        <p class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <FloatLabel>
            <Dropdown id="dropdown" :options="Cryptographer" v-model="value" optionLabel="name"></Dropdown>
            <label for="dropdown">Who is payer?</label>
        </FloatLabel>
        
    </div>


</template>


<style scoped>

.main{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
}
.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;
}
.fig{
    grid-area: 1/2/3/3;
}

@media(max-width:1000px){
    .container{
        display: flex;
        flex-direction: column;
    }
}

.button {
    text-align: center;
}
.raised {
    font-size: large;
    background: linear-gradient(to top left,rgb(180, 241, 172),rgb(5, 52, 9));
    border: none;
    color: aliceblue;
}
.secondary {
    background-color: rgb(229, 247, 215);
}
.subheading {
    padding-bottom: 20px;
}
#dropdown{
    width: 250px;
    font-weight: 600;
    background: linear-gradient(rgb(191, 238, 191), rgb(249, 225, 225));
}
table{
        border-collapse: collapse;
        text-align: center;
        width: 100%;
    }
tr{
    border-bottom: 1px solid black;
}
th{
    background: linear-gradient(rgb(234, 249, 234),rgb(159, 194, 159));
    padding: 10px 0;
}
td{
    padding: 7px;
}

.circle{
    position: relative;
    top:30px;
    width: 280px;
    height: 280px;
    border: 3px solid black;
    border-radius: 50%;
    margin: auto;
    background: repeating-radial-gradient(rgb(248, 226, 226),rgb(165, 221, 254)); 
}

.block{
    width: 80px;
    height: 50px;
    margin:20px;
    background: radial-gradient(rgb(227, 241, 207),rgb(209, 249, 196));
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

.dinerA{
    position: absolute;
    top: -80px;
    left: 75px;
}
.dinerB{
    position: absolute;
    top:20px;
    left: 250px;
}
.dinerC{
    position: absolute;
    bottom: -20px;
    left: 230px;
}
.dinerD{
    position: absolute;
    bottom: -20px;
    right: 230px;
}
.dinerE{
    position: absolute;
    top: 20px;
    right: 250px;
}
.result{
    position: absolute;
    top:90px;
    left:80px;
    width: fit-content;
    background: rgb(82, 139, 182) !important;
    color: aliceblue;

}

@media(min-width:1000px){
    .circle{
        top: 100px;
    }
}


</style>



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
        <a href="/uikit/povAfull">
        <Button label="POV A" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povBfull">
        <Button label="POV B" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povCfull">
        <Button label="POV C" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povDfull">
        <Button label="POV D" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povEfull">
        <Button label="POV E" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povUserfull">
        <Button label="POV User" severity="secondary"  class="mb-2 mr-2 secondary raised" /> </a>
    </div>

    <div class="main">
        <div class="container card">

            <div class="card table1">
                <h5>POV User full</h5>
                <table>
                    <tr>
                      <th>Shared Key</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>AB</td>
                      <td>{{ sharedSecrets.AB }}</td>
                    </tr>
                    <tr>
                      <td>AC</td>
                      <td>{{ sharedSecrets.AC }}</td>
                    </tr>
                    <tr>
                      <td>AD</td>
                      <td>{{ sharedSecrets.AD }}</td>
                    </tr>
                    <tr>
                      <td>AE</td>
                      <td>{{ sharedSecrets.AE }}</td>
                    </tr>
                    <tr>
                      <td>BC</td>
                      <td>{{ sharedSecrets.BC }}</td>
                    </tr>
                    <tr>
                      <td>BD</td>
                      <td>{{ sharedSecrets.BD }}</td>
                    </tr>
                    <tr>
                      <td>BE</td>
                      <td>{{ sharedSecrets.BE }}</td>
                    </tr>
                    <tr>
                      <td>CD</td>
                      <td>{{ sharedSecrets.CD }}</td>
                    </tr>
                    <tr>
                      <td>CE</td>
                      <td>{{ sharedSecrets.CE }}</td>
                    </tr>
                    <tr>
                      <td>DE</td>
                      <td>{{ sharedSecrets.DE }}</td>
                    </tr>
                  </table>
            </div>

            <div class="card table2">
                <h5>XOR calculation</h5>
                <table>
                    <tr>
                      <th>Cryptographers</th>
                      <th>XOR Value</th>
                    </tr>
                    <tr>
                      <td>A</td>
                      <td>{{ payer === 'A' ? calculateInvertedXOR(sharedSecrets.AB, sharedSecrets.AC, sharedSecrets.AD, sharedSecrets.AE) : calculateXOR(sharedSecrets.AB, sharedSecrets.AC, sharedSecrets.AD, sharedSecrets.AE) }}</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>{{ payer === 'B' ? calculateInvertedXOR(sharedSecrets.AB, sharedSecrets.BC, sharedSecrets.BD, sharedSecrets.BE) : calculateXOR(sharedSecrets.AB, sharedSecrets.BC, sharedSecrets.BD, sharedSecrets.BE) }}</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>{{ payer === 'C' ? calculateInvertedXOR(sharedSecrets.AC, sharedSecrets.BC, sharedSecrets.CD, sharedSecrets.CE) : calculateXOR(sharedSecrets.AC, sharedSecrets.BC, sharedSecrets.CD, sharedSecrets.CE) }}</td>
                    </tr>
                    <tr>
                      <td>D</td>
                      <td>{{ payer === 'D' ? calculateInvertedXOR(sharedSecrets.AD, sharedSecrets.BD, sharedSecrets.CD, sharedSecrets.DE) : calculateXOR(sharedSecrets.AD, sharedSecrets.BD, sharedSecrets.CD, sharedSecrets.DE) }}</td>
                    </tr>
                    <tr>
                      <td>E</td>
                      <td>{{ payer === 'E' ? calculateInvertedXOR(sharedSecrets.AE, sharedSecrets.BE, sharedSecrets.CE, sharedSecrets.DE) : calculateXOR(sharedSecrets.AE, sharedSecrets.BE, sharedSecrets.CE, sharedSecrets.DE) }}</td>
                    </tr>
                    <tr class="Result">
                        <td>Result</td>
                        <td>{{ totalXOR }}</td>
                    </tr> 
                  </table>
            </div>

        </div>
    </div>

    <div>
      <h3 class="paid">{{ totalXOR === 1 ?  "Cryptographer paid!" : "The NSA paid!"  }}</h3>  <!--- print the result who paid the bill: "Cryptographer paid" or "NSA paid" -->
    </div>

    <div class="card">
      <h3>POV A: </h3>
            <p><b>Step 1: </b></p>
              <p>The first step of the calculation involves every Cryptographer creating shared one-bit secrets (either 0 or 1) with every other cryptographer at the table. They do this in secret so none other than themselves can see that shared secret. They can do this through flipping a coin behind a menu card or behind their back.</p>
              <p><b>Step 2: </b></p>
              <p>In the second step they all announce a Bit under the following circumstances.</p>
              <p>If they didn’t pay, they calculate the XOR of all shared secrets they know of.</p>
              <p>If they paid for the meal, they calculate the XOR of all shared secrets they know of and invert that value at the end. E.g. if one calculated value is 1, it’s inverted to 0 and then announced.</p>
              <p><b>Step 3: </b></p>
              <p>The last step involves the calculation of all announced Bits via XOR. If the final value is 1 one of the cryptographers paid. If the final value is 0, none of them paid. The result makes sure that none of the cryptographers at the table can identify who exactly paid if the value is 1. They simply know that no other entity was listening.</p>
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
    grid-template-rows: 1fr;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;
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
.Result{
  border-top: 3px solid black;
  border-bottom: none;
  color: rgb(4, 177, 123);
  font-weight: 600;
}
.paid{
  color: rgb(24, 116, 85);
  text-align: center;
  margin: 15px 0 25px;
  font-size: 3rem;
  font-weight: 600;
}

</style>

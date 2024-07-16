<script setup>
import { ref, onMounted } from 'vue';

const value = ref(null);
const shared_key = ref(null);

</script>

<template>
    <div class="card button">
        <a href="/uikit/povAring">
        <Button label="POV A" severity="secondary" class="mb-2 mr-2 secondary " /> </a>
        <a href="/uikit/povBring">
        <Button label="POV B" severity="secondary"  class="mb-2 mr-2 secondary raised" /> </a>
        <a href="/uikit/povCring">
        <Button label="POV C" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povDring">
        <Button label="POV D" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povEring">
        <Button label="POV E" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
        <a href="/uikit/povUserring">
        <Button label="POV User" severity="secondary"  class="mb-2 mr-2 secondary" /> </a>
    </div>

    <div class="main">
        <div class="container card">

            <div class="card table1">
                <h5>POV B Ring</h5>
                <table>
                    <tr>
                      <th>Shared Key</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>BA</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>BC</td>
                      <td>1</td>
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
                    <tr class="Result">
                        <td>Result</td>
                        <td></td>
                    </tr> 
                  </table>
            </div>

        </div>
    </div>

    <div>
      <h3 class="paid">Who paid !</h3>  <!--- print the result who paid the bill: "Cryptographer paid" or "NSA paid" -->
    </div>

    <div class="card">
      <p>Space provided to describe what's happening.</p>
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
  color: rgb(4, 177, 123);
  font-weight: 600;
  border-top: 3px solid black;
  border-bottom: none;
}
.paid{
  color: rgb(24, 116, 85);
  text-align: center;
  margin: 15px 0 25px;
  font-size: 3rem;
  font-weight: 600;
}

</style>



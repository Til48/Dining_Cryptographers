<!-- src/views/uikit/settings.vue -->
<script setup>
import { ref } from 'vue';

const selectedCryptographer = ref(null);

const cryptographers = [
  { name: 'Cryptographer A', value: 'A' },
  { name: 'Cryptographer B', value: 'B' },
  { name: 'Cryptographer C', value: 'C' },
  { name: 'Cryptographer D', value: 'D' },
  { name: 'Cryptographer E', value: 'E' },
  { name: 'None', value: 'None' },
];

const selectCryptographer = (cryptographer) => {
  selectedCryptographer.value = cryptographer;
  localStorage.setItem('payer', JSON.stringify(cryptographer));
};

</script>

<template>
  <div class="card">
    <h4>Select Cryptographer</h4>
    <p class="subheading">Which cryptographer should pay in this scenario? If you choose "None" then an entity outside the table will pay.</p>
    <FloatLabel>
      <Dropdown id="dropdown" :options="cryptographers" v-model="selectedCryptographer" optionLabel="name" @change="selectCryptographer($event.value)"></Dropdown>
      <label for="dropdown">Who is going to pay?</label>
    </FloatLabel>
  </div>

  <div v-if="selectedCryptographer" class="card" @mouseover="showInfo = true" @mouseleave="showInfo = false">
    <h4>Select Scenario</h4>
    <a href="/uikit/povAring">
      <Button label="Ring" severity="secondary" class="mb-2 mr-2 secondary" />
    </a>
    <a href="/uikit/povAfull">
      <Button label="Complete Graph" severity="secondary" class="mb-2 mr-2 secondary" />
    </a>
    <div v-if="showInfo" class="info-box">
      <p>In the ring scenario the cryptographers only communicate with the ones adjacent to their seat.</p>
      <p>In the complete graph scenario every cryptograper communicates with each other.</p>
    </div>
  </div>
</template>

<style scoped>
.subheading {
  padding-bottom: 20px;
}
#dropdown {
  width: 250px;
  font-weight: 600;
  background: linear-gradient(rgb(191, 238, 191), rgb(249, 225, 225));
}
.secondary {
  background-color: rgb(216, 252, 189);
}
Button {
  font-size: medium;
  margin: 0 50px;
}
Button:hover {
  font-size: 1.5rem;
  background: rgb(5, 52, 9);
  border: none;
  color: rgb(244, 247, 250);
}
</style>

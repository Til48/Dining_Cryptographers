// src/store.js
import { createStore } from 'vuex';

//saving the shared secrets into the local storage of the webbrowser so they can be accessed in the other POVs
const savedSharedSecrets = localStorage.getItem('sharedSecrets');

//creats a store for the secrets to be safed in 
const store = createStore({
  state: {
    sharedSecrets: savedSharedSecrets ? JSON.parse(savedSharedSecrets) : {
      AB: 0,
      AC: 0,
      AD: 0,
      AE: 0,
      BA: AB,
      BC: 0,
      BD: 0,
      BE: 0,
      CA: AC,
      CB: BC,
      CD: 0,
      CE: 0,
      DA: AD,
      DB: BD,
      DC: CD,
      DE: 0,
    },
  },

  //mutations function to mutate the store and change the set values to the genrated secrets
  mutations: {
    SET_SHARED_SECRETS(state, payload) {
      state.sharedSecrets = payload;
      localStorage.setItem('sharedSecrets', JSON.stringify(payload));
    },
  },

  //function (action) for the button, so that the bits get randomly genrated (obviously no 100% randomness garunteed, because of how the random function works)
  actions: {
    randomizeSharedSecrets({ commit }) {
      const getRandomBit = () => Math.round(Math.random());  // Generiert entweder 0 oder 1
      const newSharedSecrets = {
        AB: getRandomBit(),
        AC: getRandomBit(),
        AD: getRandomBit(),
        AE: getRandomBit(),
        BC: getRandomBit(),
        BD: getRandomBit(),
        BE: getRandomBit(),
        CD: getRandomBit(),
        CE: getRandomBit(),
        DE: getRandomBit(),
      };
      commit('SET_SHARED_SECRETS', newSharedSecrets); //commits the random new bits into the "saved shared secrets"-store 
    },
  },

  //get function to get the shared secrets from the store, so they can be used in the different POVs
  getters: {
    getSharedSecrets: (state) => state.sharedSecrets,
  },
});

export default store;

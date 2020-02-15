
// initial state
// shape: [{ id, quantity }]
const state = {
  health:10,
  stamina: 10,
  maxHealth:0,
  maxStamina:0
}

// getters
const getters = {
  getHealthLost: (state) => {
      return state.maxHealth  - state.health;
  }
}

// actions (used for async)
const actions = {

}

// mutations
const mutations = {
  attacked (state, damage) {
    state.health = state.health - damage
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

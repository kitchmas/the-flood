
// initial state
// shape: [{ id, quantity }]
const state = {
  health:10,
  stamina: 10,
  maxHealth:10,
  maxStamina:10,
  date:{day:1,month:1},
  inventory:[{id:"1Shirt",name:"Shirt",quantity:1},{id:"1Trousers",name:"trousers",quantity:1},{id:"1Boots",name:"boots",quantity:1}],
  locations:[],
  currentLocation:{},
  selectedWeapon:{id:"1fists",name:"Fists",damage:1}
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
  setLocations(state,locations){
    state.locations = locations;
    state.currentLocation = state.locations[6];
  },
  playerAttacked(state, damage) {
    state.health = state.health - damage;
  },
  addMultipleToInventory(state,items){
    items.forEach(item => {
      var index = state.inventory.findIndex(i => i.id == item.id);
      if(index > -1){
        state.inventory[index].quantity += item.quantity;
      }
      else
        state.inventory.push(Object.assign({},item));
   });
  },
  addToInventory(state,item){
    var index = state.inventory.findIndex(i => i.id == item.id);
    if(index > -1)
      state.inventory[index].quantity += item.quantity;
    else
    state.inventory.push(Object.assign({},item));
  },
  decreaseStamina(state,val){
    state.stamina = state.stamina - val;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

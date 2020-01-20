import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import GameOverview from './game_overview'


export default new Vuex.Store({
  modules: {
    GameOverview
  }
})

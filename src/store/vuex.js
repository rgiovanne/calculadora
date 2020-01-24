import Vue from 'vue'
import Vuex from 'vuex'

import soma from './modules/soma'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{soma}
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        favorites: []
    },
    getters: {
        favorites: state => state.favorites
    },
    mutations: {
        change(state, favorites) {
            var result = state.favorites.find(elem => elem.imdbID === favorites.imdbID);
            if(!result){
                state.favorites = [...state.favorites,favorites]
            }else {
                state.favorites = state.favorites.filter(elem => elem.imdbID !== favorites.imdbID);
            }
            
            
        }
    },   
})
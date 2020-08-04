import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios';

const store = new Vuex.Store({
    state: {
        apiKey: '?api_key=81c6ee12600769fb64d4b76411d7cb7e',

        movieTopRated: [],

    },
    getters: {
        getTopRated(state) {
            return state.movieTopRated;
        }
    },
    mutations: {
        setTopRated(state, movies) {
            movies.forEach(function (par) {
                state.movieTopRated.push(par);
            })


        }
    },
    actions: {

        fetchTopRated({state, commit},page=1) {
            axios.get('https://api.themoviedb.org/3/movie/top_rated' + state.apiKey+'&page='+page)
                .then(function (response) {
                    commit("setTopRated", response.data.results);
                })
        },

        fetchDetail({state}, movieId) {

            return axios.get(`https://api.themoviedb.org/3/movie/${movieId}` + state.apiKey)
                .then(function (response) {
                    return response.data;
                })
        },
        fetchVideoTrailer({state}, movieId){
            return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos` + state.apiKey)
                .then(function (response) {
                    return response.data;
                })
        }
    }
})

export default store;
import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state() {
        return {
            carData: [],
            allCarData: [],
            currentCar: {},
            bodyType: [],
            marks: [],
            basketData: [],
            myOrders: [],
        }
    },
    mutations: {
        updateCarData(state, data) {
            state.carData = data
        },
        updateAllCarData(state, data) {
            state.allCarData = data
        },
        updateCurrentCar(state, data) {
            state.currentCar = data
        },
        updateBodyType(state, data) {
            state.bodyType = data
        },
        updateMarks(state, data) {
            state.marks = data
        },
        updateMyOrders(state, data) {
            state.myOrders = data
        }
    },
    getters: {
        getCarData(state) {
            return state.carData
        },
        getAllCarData(state) {
            return state.allCarData
        },
        getCurrentCar(state) {
            return state.currentCar
        },
        getBodyType(state) {
            return state.bodyType
        },
        getMarks(state) {
            return state.marks
        },
        getMyOrders(state) {
            return state.myOrders
        }
    },
    actions: {
        setCarData({commit}) {
            axios.get('http://localhost:3000/cars?_limit=8')
                .then(response => {
                    commit('updateCarData', response)
                })
        },
        setAllCarData({commit}, params) {
            axios.get(`http://localhost:3000/cars?_page=${params.page}&_per_page=${15}&_sort=${params.sort}&price_gt=${params.min ? params.min : 0}&price_lt=${params.max ? params.max : 9999999999}`)
                .then(response => {
                    commit('updateAllCarData', response)
                })
        },
        setCurrentCar({commit}, id) {
            axios.get(`http://localhost:3000/cars/${id}`)
                .then(response => {
                    commit('updateCurrentCar', response)
                })
        },
        setBodyType({commit}) {
            axios.get('http://localhost:3000/bodyType')
                .then(response => {
                    commit('updateBodyType', response)
                })
        },
        setMarks({commit}) {
            axios.get('http://localhost:3000/marks')
                .then(response => {
                    commit('updateMarks', response)
                })
        },
        setMyOrders({commit}) {
            axios.get('http://localhost:3000/myOrders')
                .then(response => {
                    commit('updateMyOrders', response)
                })
        },
        setInBaseDataMyOrders(context, data) {
            axios.post('http://localhost:3000/myOrders', data)
        }
    }
})
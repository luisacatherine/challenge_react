import createStore from "unistore";
import axios from "axios";

const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false
}

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return {[event.target.name]: event.target.value};
    },

    postLogout: async state => {
        await store.setState({is_login: false});
    },

    postLogin: async state => {
        const data = {username: state.username, password: state.password};
        await axios
            .post("https://luisaalterra.free.beeceptor.com/login", data)
            .then(function(response){
                console.log(response.data);
                if (response.data.hasOwnProperty("api_key")){
                    store.setState({
                        is_login: true,
                        api_key: response.data.api_key,
                        full_name: response.data.full_name,
                        email: response.data.email
                    })
                }
            })
            .catch(function(error){
                console.log(error);
            });
    }
})
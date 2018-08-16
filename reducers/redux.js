const api = "https://api.themoviedb.org/3";
const apiKey = "dc411196f402b6d882743eb087921ec6";

export const apiMiddle = store => next => action => {
    next(action);
    switch(action.type){
        case "CONSUMIR_API":
        store.dispatch({
            type: "CARGANDO_DATA"
        })
        fetch(`${api}/movie/popular?api_key=${apiKey}&language=en-US&page=1`).then(response => response.json())
        .then(data => next({ 
            type: "DATA_CARGADA",
            data: data
        }))

        .catch(error => next({
            type: "ERROR_CARGANDO_DATA",
            error
        }));
        break;

        default:
        break;
    }
}
export const reducer = (state={
    movies: [],
    loading: true
},action) => {
    switch(action.type){
        case "CARGANDO_DATA":
        return {
            ...state,
            loading: true
        }
        case "DATA_CARGADA":
        return {
            loading: false,
            movies: action.data.results
        }
        case "ERROR_CARGANDO_DATA":
        return state;
        default:
        return state;
    }
}
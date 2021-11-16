
const initialState = {
    Skills: [],
    User: {},
    searchResults: [],
}

/////REDUCER NO BOILERPLATE https://redux.js.org/usage/structuring-reducers/refactoring-reducer-example//////////
export const torreReducer = (state = initialState, { type, payload })=> {
    //FUNCION PARA CAMBIAR EL ESTAD
    function changeState(prop, value) {
        return { ...state, [prop]: value }
    }
    //INDEX OBJECT TO CHANGE PROPERTY OF THE GLOBAL STATE
    const torreReducer = {
           ALL_SKILLS: "User",
           SEARCH_PEOPLE: "searchResults",
           CLEAN_USER: "User",

            
    }

    return torreReducer.hasOwnProperty(type) ? //WE HAVE THE TYPE ON THE INDEX ?
        changeState(torreReducer[type], payload): // TRUE: UPDATE STATE
        state; //FALSE: RETURN THE STATE
}
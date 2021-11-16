import axios from 'axios';

const urls = {
    SKILLS: 'https://api-torre-irios.herokuapp.com/skills', 
    SEARCH: 'https://api-torre-irios.herokuapp.com/search', 
}

export const ALL_SKILLS = 'ALL_SKILLS'


export const allSkills = (username) => {
    return async dispatch => {
        return await axios.get(urls.SKILLS+'/'+username)
            .then(response => {
                dispatch({
                    type: ALL_SKILLS,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export const searchPeople = (values) => { 
    return async dispatch =>  {
        return await axios.post(urls.SEARCH,values)
            .then(response => { 
                dispatch({
                    type: 'SEARCH_PEOPLE',
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const cleanUser = () => {
    return dispatch => {
        dispatch({
            type: 'CLEAN_USER',
            payload: {}
        })
    }
}
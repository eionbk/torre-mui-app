import axios from 'axios';

const urls = {
    SKILLS: 'http://localhost:3001/skills', 
    SEARCH: 'http://localhost:3001/search', 
}

export const ALL_SKILLS = 'ALL_SKILLS'


export const allSkills = (username) => {
    return dispatch => {
        console.log('allSkills '+ username);
        return axios.get(urls.SKILLS+'/'+username)
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
    return dispatch => {
        return axios.post(urls.SEARCH,values)
            .then(response => {
                console.log(response.data);
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
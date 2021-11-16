import axios from 'axios';

const urls = {
    SKILLS: 'https://api-torre-irios.herokuapp.com/skills', //RUTA PARA OBTENER LAS RECETAS
   
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
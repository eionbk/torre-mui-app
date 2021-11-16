

const urls = {
    SKILLS: 'http://localhost:3001/skills', //RUTA PARA OBTENER LAS RECETAS
   
}

export const ALL_SKILLS = 'ALL_SKILLS'


export const allSkills = (username) => {
    return dispatch => {
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
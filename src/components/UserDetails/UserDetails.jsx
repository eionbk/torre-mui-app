import { useSelector } from "react-redux"
import Avatar from '@mui/material/Avatar';


function UserDetails() {
    const user = useSelector(state => state.User)
    console.log(user?.strengths);
  
    const userSKills = {
        novice: user?.strengths?.filter(skill => skill.proficiency === "novice"),
        proficient: user?.strengths?.filter(skill => skill.proficiency === "proficient"),
        expert: user?.strengths?.filter(skill => skill.proficiency === "expert")
    }
    

const experticeSection = (skillList, expertice) =>{
    return(
        <div className="expertise-section">
        <h3>{expertice}</h3>
        <details><summary>{skillList.length}</summary>
            {skillList && skillList.map(skill => {
                return <div>{skill.name}</div>
                })}
        </details>
        </div>
    )
}

    return (
        <div>
            {user.person?.picture && <Avatar alt={user.peron.name} src={user.person.picture} />}
            <h1>{user.person.name}</h1>
            {userSKills.expert && experticeSection(userSKills.expert, "Expert")}
            {userSKills.proficient && experticeSection(userSKills.proficient, "Proficient")}
            {userSKills.novice && experticeSection(userSKills.novice, "Novice")}
        </div>
    )
}

export default UserDetails

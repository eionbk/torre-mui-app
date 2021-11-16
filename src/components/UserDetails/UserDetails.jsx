import { useSelector } from "react-redux"
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


function UserDetails() {
    const user = useSelector(state => state.User)
    console.log(user?.strengths);
  
    const userSKills = {
        novice: user?.strengths?.filter(skill => skill.proficiency === "novice"),
        proficient: user?.strengths?.filter(skill => skill.proficiency === "proficient"),
        expert: user?.strengths?.filter(skill => skill.proficiency === "expert"),
        noExperience: user?.strengths?.filter(skill => skill.proficiency === "no-experience-interested")
    }
    const darkTheme = createTheme({ palette: { mode: 'dark' } });

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
      }));
      


const experticeSection = (skillList, expertice) =>{
    return(
        <div className="expertise-section">
        <h3>{expertice}</h3>
        
        <Accordion>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography>Expand To view All</Typography>
        </AccordionSummary>
        <AccordionDetails>
                {skillList.map(skill => <Item key={expertice+skill.name} elevation={expertice.length}>
                  {skill.name}
                </Item>)}
        </AccordionDetails>
        </Accordion>
       
        </div>
    )
}

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
            {user?.picture && 
                <Avatar alt={user?.name}
                    sx={{ width: "30%", height: "30%" }}
                    src={user?.picture} />}
            <h1>{user?.name}</h1>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr' },
                gap: 2,
              }}
            >
           
            <h2>Strengths</h2>
            {userSKills.expert && experticeSection(userSKills.expert, "Expert")}
            {userSKills.proficient && experticeSection(userSKills.proficient, "Proficient")}
            {userSKills.novice && experticeSection(userSKills.novice, "Novice")}
            {userSKills.noExperience && experticeSection(userSKills.noExperience, "No Experience but interested")}
            </Box>
            </ThemeProvider>
        </div>
    )
}

export default UserDetails

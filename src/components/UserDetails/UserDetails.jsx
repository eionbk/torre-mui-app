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
import NotFound from '../NotFound/NotFound';
import Grid from '@mui/material/Grid';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanUser } from "../../Redux/Actions";


function UserDetails() {
    const user = useSelector(state => state.User)
    console.log(user?.strengths);
    const dispatch = useDispatch();

    useEffect(() => {
        
        return () => {
            dispatch(cleanUser());
        }
    }, [dispatch])
  
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
        <Accordion>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography>{expertice}</Typography>
        </AccordionSummary>
        <AccordionDetails>
                {skillList.map(skill => <Item key={expertice+skill.name} elevation={15}>
                  {skill.name+" - "+ "Recomendations: "+ skill.recommendations+" - "+"Weight: "+ skill.weight}
                </Item>)}
        </AccordionDetails>
        </Accordion>
       
        </div>
    )
}

        const showUserDetails = () => {
            return (<div>
                <ThemeProvider theme={darkTheme}>
                
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr' },
                    gap: 2,
                  }}
                  >
                  <Grid
                  container
                  spacing={0}
                  direction="column"
                  placeItems="center"
                  justifyContent="center"
                  style={{ minHeight: '70vh' }}
                >
                    {user?.picture && 
                    <Avatar alt={user?.name}
                        sx={{  width: darkTheme.spacing(40),
                            height: darkTheme.spacing(40), }}
                        style={{alignSelf: 'center'}}
                        src={user?.picture} />}
                
                
                <Typography>{user?.name}</Typography>
                <h3>Skills</h3>
                {userSKills.expert && experticeSection(userSKills.expert, "Expert")}
                {userSKills.proficient && experticeSection(userSKills.proficient, "Proficient")}
                {userSKills.novice && experticeSection(userSKills.novice, "Novice")}
                {userSKills.noExperience && experticeSection(userSKills.noExperience, "No Experience but interested")}
                </Grid>
                </Box>
                </ThemeProvider>
            </div>)
            
        };
        
        console.log ( Object.keys(user).length )

    return (
        
        Object.keys(user).length ? showUserDetails() : <NotFound />
        
    )
}

export default UserDetails

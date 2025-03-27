import { Button, List, ListItem, ListItemButton } from '@mui/material';
import './Teams.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const mockTeams = [
  {
    teamId: 1,
    teamName: 'Westerville United',
    city: 'Westerville',
    state: 'OH'
  },
  {
    teamId: 2,
    teamName: 'Columbus Crew',
    city: 'Columbus',
    state: 'OH'
  },
]

function Teams() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<any[] | null>(null);

  const handleSelectTeam = (teamId: number) => {
    navigate("/team/" + teamId)
  }

  const handleCreateTeam = () => {
    navigate("/create-team");
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teams")
      .then((response) => {
        setTeams(response.data);
        console.log("Teams successfully fetched", response);
      })
      .catch((error) => {
        console.error("Error tetching the teams", error);
      });
  }, [])

  return (
    <div className="teampage">
      <div>Select a Team</div>
      <div>
        <List>
          {teams?.map((team, i) => (
            <ListItem key={i}>
              <ListItemButton sx={{
                '&:hover': {
                  backgroundColor: '#575757'
                }
              }}
                onClick={() => handleSelectTeam(team.team_id)}
              >
                <div>{team?.team_name}</div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <br />
      <div className="create-team-container">
        <Button
          variant='contained'
          sx={{ backgroundColor: '#089f13' }}
          onClick={handleCreateTeam}
        >
          New Team
        </Button>
      </div>
    </div >
  );
}

export default Teams;
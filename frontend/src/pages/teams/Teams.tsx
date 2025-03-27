import { Button, List, ListItem, ListItemButton } from '@mui/material';
import './Teams.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  // const [teams, setTeams] = useState<any[] | null>(null);
  const [teams, setTeams] = useState<any[] | null>(mockTeams);

  const handleSelectTeam = (teamId: number) => {
    navigate("/team/" + teamId)
  }

  const handleCreateTeam = () => {
    navigate("/create-team");
  }

  return (
    <div className="teampage">
      <div>Select a Team</div>
      <div>
        <List>
          {teams?.map((team, i) => (
            <ListItem>
              <ListItemButton sx={{
                '&:hover': {
                  backgroundColor: '#575757'
                }
              }}
                onClick={() => handleSelectTeam(team.teamId)}
              >
                <div>{team?.teamName}</div>
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
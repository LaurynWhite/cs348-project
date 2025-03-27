import { Button, Divider, List, ListItem, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Players from './Players';

const mockTeam =
{
  teamId: 1,
  teamName: 'Westerville United',
  city: 'Westerville',
  state: 'OH'
}

const mockPlayers = [
  { playerId: 1, teamId: 1, first: "Lauryn", last: "White", positions: ['CM', 'CDM', 'CAM'] },
  { playerId: 2, teamId: 1, first: "Makayla", last: "Perry", positions: ['LW', 'LM', 'RW', 'RM', 'ST', 'CF', 'LB', 'RB'] },
  { playerId: 3, teamId: 1, first: "Margaret", last: "Owsiany", positions: ['LW', 'LM', 'RW', 'RM', 'ST', 'CF', 'CAM'] },
  { playerId: 4, teamId: 1, first: "Phoebe", last: "Kraus", positions: ['LB', 'RB'] },
  { playerId: 5, teamId: 1, first: "Kaycee", last: "Johnston", positions: ['CB', 'CDM'] },
  { playerId: 1, teamId: 1, first: "Lauryn", last: "White", positions: ['CM', 'CDM', 'CAM'] },
  { playerId: 2, teamId: 1, first: "Makayla", last: "Perry", positions: ['LW', 'LM', 'RW', 'RM', 'ST', 'CF', 'LB', 'RB'] },
  { playerId: 3, teamId: 1, first: "Margaret", last: "Owsiany", positions: ['LW', 'LM', 'RW', 'RM', 'ST', 'CF', 'CAM'] },
  { playerId: 4, teamId: 1, first: "Phoebe", last: "Kraus", positions: ['LB', 'RB'] },
  { playerId: 5, teamId: 1, first: "Kaycee", last: "Johnston", positions: ['CB', 'CDM'] }
]

function getSummary() {
  // TODO
}

function Team() {
  const navigate = useNavigate();
  // const [team, setTeam] = useState<any | null>(null);
  const [team, setTeam] = useState<any | null>(mockTeam);
  const [players, setPlayers] = useState<any[] | null>(mockPlayers);
  // const [players, setPlayers] = useState<any[] | null>(null);
  const { groupId } = useParams();

  return (
    <div>
      {team ?
        <>
          <h3 style={{ textAlign: 'center' }}>{team.teamName} &mdash; {team.city}, {team.state}</h3>
          <hr />
          <div style={{ display: 'flex' }}>
            <div style={{ width: 150, marginLeft: 10 }}>
              <h4>Position Summary</h4>
            </div>
            <hr />
            <div style={{ width: 500, marginLeft: 10 }}>
              <Players players={players} />
            </div >
          </div>
          <div style={{ marginTop: 30, display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#005304' }}
              onClick={() => { }}
            >
              Add Player
            </Button>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#089f13' }}
              onClick={() => { }}
            >
              View Compatible Formations
            </Button>
          </div>
        </>
        : <></>
      }
    </div>
  );
}

export default Team;
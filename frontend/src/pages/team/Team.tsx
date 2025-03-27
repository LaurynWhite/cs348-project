import { Button, Divider, IconButton, List, ListItem, ListItemButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Players from './Players';
import axios from 'axios';
import AddPlayer from '../add-player/AddPlayer';
import TeamMenu from './TeamMenu';
import DeleteTeam from './DeleteTeam';
import EditTeam from './EditTeam';
import PositionSummary from './PositionSummary';

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
  const [team, setTeam] = useState<any | null>(null);
  const [teamSummary, setTeamSummary] = useState<any | null>(null);
  const [players, setPlayers] = useState<any[] | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const { teamId } = useParams();

  useEffect(() => {
    if (team !== null) return;

    axios.get("http://localhost:5000/api/team/" + teamId)
      .then((response) => {
        setTeam(response.data)
        setPlayers(response.data.players)
        console.log("Team successfully fetched", response);
      })
      .catch((error) => {
        console.error("Error fetching this team", error);
      })
    axios.get("http://localhost:5000/api/team/" + teamId + "/summary")
      .then((response) => {
        setTeamSummary(response.data)
        console.log("Team summary successfully fetched", response);
      })
      .catch((error) => {
        console.error("Error fetching this team summary", error);
      })
  }, [team])

  const handleEdit = () => {
    setEditOpen(true);
  }

  const handleDelete = () => {
    setDeleteOpen(true);
  }


  return (
    <div>
      {team ?
        <>
          <h3 style={{ textAlign: 'center' }}>{team.team_name} &mdash; {team.city}, {team.state}</h3>
          <hr />
          <div style={{ display: 'flex' }}>
            <div style={{ width: 150, marginLeft: 10 }}>
              <h4>Position Summary</h4>
              <PositionSummary positionSummary={teamSummary} />
            </div>
            <hr />
            <div style={{ width: 500, marginLeft: 10 }}>
              <Players players={players} />
            </div >
            <TeamMenu handleEdit={handleEdit} handleDelete={handleDelete} />
          </div>
          <div style={{ marginTop: 30, display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#005304' }}
              onClick={() => setOpen(true)}
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
          <AddPlayer
            isOpen={isOpen}
            setOpen={setOpen}
            team_id={teamId}
            setTeam={setTeam}
          />
          <EditTeam
            isOpen={editOpen}
            setOpen={setEditOpen}
            team={team}
            setTeam={setTeam}
          />
          <DeleteTeam
            isOpen={deleteOpen}
            setOpen={setDeleteOpen}
            team_id={teamId}
          />
        </>
        : <></>
      }
    </div>
  );
}

export default Team;
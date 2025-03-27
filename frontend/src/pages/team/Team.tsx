import { Button, Divider, IconButton, List, ListItem, ListItemButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Players from './Players';
import axios from 'axios';
import AddPlayer from '../add-player/AddPlayer';
import TeamMenu from './TeamMenu';
import DeleteTeam from './DeleteTeam';
import EditTeam from './EditTeam';
import PositionSummary from './PositionSummary';
import Formations from './Formations';
import FilteredFormations from './FilteredFormations';

function Team() {
  const [team, setTeam] = useState<any | null>(null);
  const [teamSummary, setTeamSummary] = useState<any | null>(null);
  const [players, setPlayers] = useState<any[] | null>(null);
  const [formations, setFormations] = useState<any[] | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  const handleFormationClick = () => {
    axios.get("http://localhost:5000/api/team/" + teamId + "/formations")
      .then((response) => {
        setFormations(response.data)
        setSearchOpen(false)
        console.log("Team formations successfully fetched", response);
      })
      .catch((error) => {
        console.error("Error fetching this team formations", error);
      })
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
              sx={{ backgroundColor: '#005304' }}
              onClick={() => {
                setSearchOpen(true)
                setFormations(null)
              }}
            >
              Search Formations
            </Button>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#089f13' }}
              onClick={() => handleFormationClick()}
            >
              View Compatible Formations
            </Button>
          </div>
          <Formations formations={formations} />
          <FilteredFormations
            searchOpen={searchOpen}
          />
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
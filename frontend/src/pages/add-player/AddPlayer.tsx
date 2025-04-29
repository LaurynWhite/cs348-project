import { Button, Checkbox, Dialog, DialogTitle, List, ListItemButton, ListItemIcon, ListItemText, Modal, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PositionList from "./PositionList";


function AddPlayer({ isOpen, setOpen, team_id, setTeam }: any) {
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [positions, setPositions] = useState<any[]>([])
  const [selectedPositions, setSelectedPositions] = useState<any[]>([])

  useEffect(() => {
    if (isOpen === false) return;

    axios.get("http://localhost:5000/api/allPositions")
      .then((response) => {
        setPositions(response.data)
        console.log("Positions successfully fetched", response);
      })
      .catch((error) => {
        console.error("Error fetching these positions", error);
      })
  }, [isOpen])

  const onAddPlayer = () => {
    const newPlayer = {
      team_id: team_id,
      first: first,
      last: last,
      positions: selectedPositions
    };
    axios
      .post("http://localhost:5000/api/addPlayer", newPlayer)
      .then((response) => {
        setOpen(false)
        setTeam(null)
        console.log("New player saved successfully", response);
      })
      .catch((error) => {
        console.error("Error creating a new player", error);
      });
  }

  const handleCheckboxChange = (event: any, option: any) => {
    if (event.target.checked) {
      setSelectedPositions((prevPositions) => [...prevPositions, option]);
    } else {
      setSelectedPositions((prevPositions) => prevPositions.filter((position) => position !== option));
    }
  };

  return (
    <>
      {isOpen ?
        <Dialog open={isOpen}
          onClose={() => setOpen(false)}
          scroll="paper"
          fullScreen
          sx={{
            py: 5,
            px: 10,
            width: 600,
            height: 625,
            margin: 'auto',
            textAlign: 'center',
            '& .MuiDialog-paper': {
              backgroundColor: '#232323'
            },
          }}
        >
          <DialogTitle mb={1} sx={{ color: 'white' }}>Add a new player</DialogTitle>
          <TextField
            label="First Name"
            variant="filled"
            color="success"
            // fullWidth
            focused
            value={first}
            onChange={(event) => setFirst(event.target.value)}
            sx={{
              '& .MuiInputBase-input': {
                color: 'white',
              },
              marginY: 3,
              marginX: 5
            }}
          />
          <TextField
            label="Last Name"
            variant="filled"
            color="success"
            // fullWidth
            focused
            value={last}
            onChange={(event) => setLast(event.target.value)}
            sx={{
              '& .MuiInputBase-input': {
                color: 'white',
              },
              marginY: 3,
              marginX: 5
            }}
          />
          <h4 style={{ color: 'white' }}>What positions can they play?</h4>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10, gap: 10 }}>
            <PositionList
              positions={positions.slice(0, 3)}
              selectedPositions={selectedPositions}
              handleCheckboxChange={handleCheckboxChange} />
            <PositionList
              positions={positions.slice(3, 6)}
              selectedPositions={selectedPositions}
              handleCheckboxChange={handleCheckboxChange} />
            <PositionList
              positions={positions.slice(6, 9)}
              selectedPositions={selectedPositions}
              handleCheckboxChange={handleCheckboxChange} />
            <PositionList
              positions={positions.slice(9, 12)}
              selectedPositions={selectedPositions}
              handleCheckboxChange={handleCheckboxChange} />
            <PositionList
              positions={positions.slice(12, 15)}
              selectedPositions={selectedPositions}
              handleCheckboxChange={handleCheckboxChange} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'green', width: 300 }}
              onClick={() => onAddPlayer()}>
              Submit
            </Button>
          </div>
        </Dialog>
        :
        <></>
      }
    </>
  )
}

export default AddPlayer;
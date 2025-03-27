import { Button, Dialog, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { states } from "../../data/data";
import { useState } from "react";


function EditTeam({ isOpen, setOpen, team }: any) {
  const [teamName, setTeamName] = useState<String>("");
  const [city, setCity] = useState<String>("");
  const [selectedState, setSelectedState] = useState<String>("");
  const navigate = useNavigate();

  const handleStateChange = (state: String) => {
    setSelectedState(state)
  }

  const handleCancel = () => {
    setTeamName(team.team_name)
    setCity(team.city)
    setSelectedState(team.state)
    setOpen(false)
  }
  const handleEdit = () => {
    const updatedTeam = {
      team_id: team.team_id,
      team_name: teamName,
      city: city,
      state: selectedState
    };
    axios
      .post("http://localhost:5000/api/team/edit", updatedTeam)
      .then((response) => {
        console.log("Team updated successfully", response);
        setOpen(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating this team", error);
      });
  }

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
            height: 480,
            margin: 'auto',
            textAlign: 'center',
            '& .MuiDialog-paper': {
              backgroundColor: '#232323'
            },
          }}
        >
          <DialogTitle mb={1} mt={3} sx={{ color: 'white' }}>Edit Team</DialogTitle>
          <div>
            <TextField
              label="Team Name"
              variant="filled"
              color="success"
              // fullWidth
              focused
              value={teamName}
              onChange={(event) => setTeamName(event.target.value)}
              sx={{
                width: 500,
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                marginY: 3
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 50, marginRight: 50 }}>
              <TextField
                label="City"
                variant="filled"
                color="success"
                focused
                value={city}
                onChange={(event) => setCity(event.target.value)}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  marginY: 3
                }}
              />
              <FormControl variant="filled" color="success"
                sx={{ marginY: 3, minWidth: 120 }}
              >
                <InputLabel focused color="success">State</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  value={selectedState}
                  // onChange={() => handleStateChange(state)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#4caf50', // Change border color of the select field to success green
                      },
                      '&:hover fieldset': {
                        borderColor: '#388e3c', // Change the border color on hover to a darker green
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#2e7d32', // Change border color when focused
                      },
                      '& .MuiSelect-icon': {
                        color: '#4caf50', // Set the dropdown arrow color to success green
                      },
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>---</em>
                  </MenuItem>
                  {states?.map((state, i) => (
                    <MenuItem
                      key={i}
                      value={state}
                      onClick={() => handleStateChange(state)}
                    >{state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 80, gap: 30, marginRight: 50 }}>
            <Button
              variant='contained'
              sx={{ width: 150, backgroundColor: '#232323', paddingTop: 1, paddingBottom: 1 }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              sx={{ width: 150, backgroundColor: 'green', paddingTop: 1, paddingBottom: 1 }}
              onClick={() => handleEdit()}
            >
              Confirm
            </Button>
          </div>
        </Dialog>
        :
        <></>
      }
    </>
  );
}

export default EditTeam;
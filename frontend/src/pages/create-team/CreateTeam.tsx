import { Box, Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { states } from '../../data/data';

function CreateTeam() {
  const [teamName, setTeamName] = useState<String>("");
  const [city, setCity] = useState<String>("");
  const [selectedState, setSelectedState] = useState<String>("");
  const navigate = useNavigate();

  const handleStateChange = (state: String) => {
    setSelectedState(state)
  }

  const handleCancel = () => {
    navigate("/");
  }

  const handleConfirm = () => {
    const newTeam = {
      teamName: teamName,
      city: city,
      state: selectedState
    };
    axios
      .post("http://localhost:5000/api/createTeam", newTeam)
      .then((response) => {
        console.log("Data saved successfully", response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating a new team", error);
      });

  }


  return (
    <Card sx={{ width: 500, height: 425, backgroundColor: '#333333' }}>
      <CardContent sx={{
        marginLeft: 2, marginRight: 2
      }}>
        <h3 style={{
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 30,
          color: 'white',
        }}>
          Create A New Team
        </h3>
        <TextField
          label="Team Name"
          variant="filled"
          color="success"
          fullWidth
          focused
          value={teamName}
          onChange={(event) => setTeamName(event.target.value)}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },
            marginY: 3
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 50, gap: 10 }}>
          <Button
            variant='contained'
            sx={{ width: 100, backgroundColor: '#232323' }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            sx={{ width: 100, backgroundColor: 'green' }}
            onClick={() => handleConfirm()}
          >
            Confirm
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreateTeam;
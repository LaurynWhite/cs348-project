import { Box, Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTeam() {
  const [states, setStates] = useState<any[] | null>(null);
  const teamName = useState<String>("");
  const city = useState<String>("");
  const selectedState = useState<String>("");
  const navigate = useNavigate();

  const handleStateChange = () => {
    // TODO
  }

  const handleCancel = () => {
    navigate("/");
  }

  const handleConfirm = () => {
    // TODO
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
              onChange={handleStateChange}
              sx={{
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
                <MenuItem key={i} value={state}>{state}</MenuItem>
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
            onClick={() => { }}
          >
            Confirm
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreateTeam;
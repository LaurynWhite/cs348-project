import { Button, List, ListItem, ListItemButton } from '@mui/material';
import './Coach.css';
import { useState } from 'react';

function Coach() {
  const coaches = useState<any[] | null>(null);

  const handleCoachClick = () => {

  }

  return (
    <div className="coachpage">
      <List>
        {coaches?.map((coach, i) => (
          <ListItem >
            <ListItemButton sx={{
              '&:hover': {
                backgroundColor: '#575757'
              }
            }}
            // onClick={handleCoachClick(coach.coach_id)}>
            >
              <div>{coach?.length} {i}</div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="create-coach-container">
        <Button >
          New Coach
        </Button>
      </div>
    </div >
  );
}

export default Coach;
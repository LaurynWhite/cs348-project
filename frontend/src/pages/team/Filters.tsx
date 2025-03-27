import { Button, Checkbox, List, ListItem, ListItemButton } from "@mui/material";

interface params {
  positions: any[],
  selectedPositions: any[],
  handleCheckboxChange: any,
  handleFilteredFormations: any
}

function Filters({ positions, selectedPositions, handleCheckboxChange, handleFilteredFormations }: params) {
  return (
    <div style={{ display: 'flex', marginTop: 20 }}>
      <div style={{ width: 100, marginTop: 20 }}>
        <div>Exclusions:</div>
        <Button
          sx={{ color: 'green', marginTop: 1 }}
          onClick={() => handleFilteredFormations()}
        >
          Search
        </Button>
      </div>
      <List sx={{ color: 'white', width: 600, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {positions?.map((position, i) => (
          <ListItem
            key={i}
            sx={{ margin: 0, padding: 0, width: 70 }}
          >
            <Checkbox
              checked={selectedPositions.includes(position)}
              onChange={(event) => handleCheckboxChange(event, position)}
              value={position}
              sx={{
                transform: "scale(0.7)",
                color: 'green',
                '&.Mui-checked': {
                  color: 'green', // Change color when checked (for example, green)
                },
              }}
            />
            <div style={{ fontSize: 12 }}>{position}</div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default Filters;

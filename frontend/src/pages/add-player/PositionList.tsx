import { Checkbox, List, ListItemButton } from "@mui/material";

interface params {
  positions: any[],
  selectedPositions: any[],
  handleCheckboxChange: any
}

function PositionList({ positions, selectedPositions, handleCheckboxChange }: params) {
  return (<List sx={{ color: 'white' }}>
    {positions?.map((position, i) => (
      <ListItemButton
        key={i}
      >
        <Checkbox
          checked={selectedPositions.includes(position)}
          onChange={(event) => handleCheckboxChange(event, position)}
          value={position}
          sx={{
            color: 'green',
            '&.Mui-checked': {
              color: 'green', // Change color when checked (for example, green)
            },
          }}
        />
        <div>{position}</div>
      </ListItemButton>
    ))}
  </List>
  );
}
export default PositionList;

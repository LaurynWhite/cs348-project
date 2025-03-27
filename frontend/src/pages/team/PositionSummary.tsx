import { List, ListItem } from "@mui/material";

interface params {
  positionSummary: any[]
}

function PositionSummary({ positionSummary }: params) {


  return (
    <>
      {positionSummary ?
        <div style={{ height: 350, overflow: 'auto' }}>
          <List>
            {positionSummary?.map((stat, i) => (
              <ListItem key={i} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{stat.position}</div>
                <div style={{ marginRight: 20 }}>{stat.num_players}</div>
              </ListItem>
            ))}
          </List>
        </div>
        : <></>
      }
    </>
  );
}

export default PositionSummary;
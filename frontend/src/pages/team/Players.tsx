import { List, ListItem, ListItemButton } from "@mui/material";
interface Player {
  first: String,
  last: String,
  positions: String[]
}
interface params {
  players: Player[] | null
}

function Players({ players }: params) {


  return (
    <>
      <h4>Players</h4>
      <div style={{ height: 350, overflow: 'auto' }}>
        <List>
          {players?.map((player, i) => (
            <ListItem key={i} sx={{ backgroundColor: (i % 2 == 0) ? '#333333' : '#232323' }}>
              <ListItemButton sx={{
                '&:hover': {
                  backgroundColor: '#575757'
                }
              }}
                onClick={() => { }}>
                <div>{player.first} {player.last} &mdash;</div>
                <div>
                  {
                    player.positions?.map((position, i) => (
                      <div key={i} style={{ display: 'inline-block' }}>
                        {(i < player.positions.length - 1) ? position + ', ' : position}
                      </div>
                    ))
                  }
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div >
    </>
  );
}

export default Players;
import { List, ListItem } from "@mui/material";


interface params {
  formations: any[] | null
}

function Formations({ formations }: params) {


  return (
    <>
      {formations ?
        <div>
          <hr style={{ marginTop: 30 }} />
          <List>
            {formations?.map((formation, i) => (
              <ListItem key={i}>
                <div style={{ marginRight: 20 }}>{formation}</div>
              </ListItem>
            ))}
          </List>
        </div>
        :
        <></>
      }
    </>
  );
}

export default Formations;
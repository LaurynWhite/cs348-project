import { List, ListItem } from "@mui/material";


interface params {
  formations: any[] | null
}

function Formations({ formations }: params) {


  return (
    <>
      {formations ?
        <div style={{ height: 300 }}>
          <h4 style={{ marginTop: 50 }}>Compatible Formations</h4>
          <hr />
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
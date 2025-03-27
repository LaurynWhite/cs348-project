import { List, ListItem } from "@mui/material";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import axios from "axios";


interface params {
  searchOpen: any
}

function FilteredFormations({ searchOpen }: params) {
  const [positions, setPositions] = useState<any[]>([])
  const [selectedPositions, setSelectedPositions] = useState<any[]>([])
  const [filteredFormations, setFilteredFormations] = useState<any[] | null>(null);

  useEffect(() => {
    if (searchOpen === false) return
    axios.get("http://localhost:5000/api/allPositions")
      .then((response) => {
        setPositions(response.data)
        console.log("Positions successfully fetched", response);
      })
      .catch((error) => {
        console.error("Error fetching these positions", error);
      })
  }, [searchOpen])



  const handleFilteredFormations = () => {
    axios.post("http://localhost:5000/api/filteredFormations", selectedPositions)
      .then((response) => {
        setFilteredFormations(response.data)
        console.log("Team filtered formations successfully fetched", response);
      })
      .catch((error) => {
        console.error("Error fetching this team filtered formations", error);
      })
  }

  const handleCheckboxChange = (event: any, option: any) => {
    if (event.target.checked) {
      setSelectedPositions((prevPositions) => [...prevPositions, option]);
    } else {
      setSelectedPositions((prevPositions) => prevPositions.filter((position) => position !== option));
    }
  };

  return (
    <>
      {searchOpen ?
        <div style={{ height: 300 }} >
          <h4 style={{ marginTop: 50 }}>Filter Formations</h4>
          <hr />
          <Filters
            positions={positions}
            selectedPositions={selectedPositions}
            handleCheckboxChange={handleCheckboxChange}
            handleFilteredFormations={handleFilteredFormations}
          />
          {filteredFormations ?
            <div style={{ height: 300 }} >
              <hr style={{ marginTop: 30 }} />
              <List>
                {filteredFormations?.map((formation, i) => (
                  <ListItem key={i}>
                    <div style={{ marginRight: 20 }}>{formation}</div>
                  </ListItem>
                ))}
              </List>
            </div>
            :
            <div style={{ height: 300 }} />
          }
        </div>
        :
        <></>
      }
    </>
  );
}

export default FilteredFormations;
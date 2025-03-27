import { Button, Dialog, DialogTitle } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DeleteTeam({ isOpen, setOpen, team_id }: any) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .get("http://localhost:5000/api/team/delete/" + team_id)
      .then((response) => {
        console.log("Team deleted successfully", response);
        setOpen(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting this team", error);
      });
  }

  return (
    <>
      {isOpen ?
        <Dialog open={isOpen}
          onClose={() => setOpen(false)}
          scroll="paper"
          fullScreen
          sx={{
            py: 5,
            px: 10,
            width: 400,
            height: 200,
            margin: 'auto',
            textAlign: 'center',
            '& .MuiDialog-paper': {
              backgroundColor: '#232323'
            },
          }}
        >
          <DialogTitle mb={1} sx={{ color: 'white' }}>Delete Team</DialogTitle>
          <div>Are you sure?</div>
          <div style={{ marginTop: 30, marginBottom: 20 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'green', width: 200 }}
              onClick={() => handleDelete()}>
              Yes
            </Button>
          </div>
        </Dialog>
        :
        <></>
      }
    </>
  );
}

export default DeleteTeam;
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";


function TeamMenu({ handleEdit, handleDelete }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditClick = () => {
    setAnchorEl(null);
    handleEdit();
  };

  const handleDeleteClick = () => {
    setAnchorEl(null);
    handleDelete();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ width: 20, marginLeft: 10, marginRight: 10 }}>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: 'white' }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}>Edit Team</MenuItem>
        <MenuItem onClick={handleDelete}>Delete Team</MenuItem>
      </Menu>
    </div>
  );
}

export default TeamMenu;
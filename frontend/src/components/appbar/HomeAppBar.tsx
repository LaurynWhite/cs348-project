import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './HomeAppBar.css';

function HomeAppBar() {


  return (
    <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
      <Toolbar>
        <IconButton
          size="large"
          sx={{ mr: 2 }}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
        <div className="appbar-title">Soccer Team Management</div>
        <IconButton
          size="large"
          sx={{ mr: 2 }}
        >
          <AccountCircle sx={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default HomeAppBar;
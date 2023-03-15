import './Header.css';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant={"h5"}>
            Ecommerce
          </Typography>
          <IconButton>
            <FavoriteIcon/>
          </IconButton>
          <IconButton>
            <ShoppingCartIcon/>
          </IconButton>
          <IconButton>
            <AccountCircleIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
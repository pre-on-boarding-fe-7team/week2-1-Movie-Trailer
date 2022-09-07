import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from './SearchInput/SearchInput';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../common/utils/constant';

const Header = () => {
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link to={ROUTE.MAIN}>Team7 Movie Trailer</Link>
            </Typography>
            <SearchInput />
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
    </>
  );
};

export default Header;

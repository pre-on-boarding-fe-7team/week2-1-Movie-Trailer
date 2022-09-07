import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from './SearchInput';
import { AppBar } from './Header.style';
import { Box, Button, IconButton, Toolbar } from '@mui/material';
import Logo from './Logo';
import { ROUTE } from '../../common/utils/constant';
import { Link } from 'react-router-dom';

const pages = [
  { title: 'main', path: ROUTE.MAIN },
  { title: 'up_coming', path: ROUTE.UP_COMING },
  { title: 'nowplaying', path: ROUTE.NOWPLAYING },
  { title: 'top_rated', path: ROUTE.TOP_RATED },
];

const Header = () => {
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Logo>Team7</Logo>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(({ title, path }) => (
                <Button key={title} sx={{ color: 'white', display: 'block' }}>
                  <Link to={path}>{title}</Link>
                </Button>
              ))}
            </Box>

            <SearchInput />
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
    </>
  );
};

export default Header;

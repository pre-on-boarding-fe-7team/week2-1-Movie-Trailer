import * as React from 'react';
import SearchInput from './SearchInput';
import { AppBar } from './Header.style';
import HamburgerMenu from './HamburgerMenu';
import { Box, Toolbar } from '@mui/material';
import Logo from './Logo';
import { ROUTE } from '../../common/utils/constant';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { name: 'popular', title: 'Main', path: ROUTE.MAIN },
  { name: 'upcoming', title: 'Upcoming', path: ROUTE.UP_COMING },
  { name: 'now_playing', title: 'Now Playing', path: ROUTE.NOWPLAYING },
  { name: 'top_rated', title: 'Top Rated', path: ROUTE.TOP_RATED },
];

const Header = () => {
  const pathName = useLocation().pathname;
  const pathRoute = pathName.split('/')[2];

  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <HamburgerMenu pages={pages} />

            <Logo>Team7</Logo>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(({ name, title, path }) => (
                <Link
                  key={title}
                  to={path}
                  className={`${pathRoute === `${name}` ? 'active' : ''}`}
                >
                  {title}
                </Link>
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

import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from './Link.style';
import { useState } from 'react';

const HamburgerMenu = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState();
  const handleOpenNavMenu = ({ currentTarget }) => {
    setAnchorElNav(currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav();
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map(({ title, path }) => (
          <MenuItem key={title}>
            <Typography textAlign="center">
              <Link to={path}>{title}</Link>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default HamburgerMenu;

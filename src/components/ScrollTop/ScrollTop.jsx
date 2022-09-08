import { Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from 'react';
// import { useScrollTrigger } from '@mui/material/useScrollTrigger';

const ScrollTop = () => {
  // const scrollTrigger = useScrollTrigger({
  //   target: window ? window() : undefined,
  //   disableHysteresis: true,
  //   threshold: 100,
  // });
  const [scrollTrigger, setScrollTrigger] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setScrollTrigger(true) : setScrollTrigger(false);
    });
  }, []);

  return (
    scrollTrigger && (
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    )
  );
};

export default ScrollTop;

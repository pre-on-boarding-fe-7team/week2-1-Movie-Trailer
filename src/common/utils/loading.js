import { CircularProgress, Backdrop } from '@mui/material';
// import Backdrop from '@mui/material/Backdrop';

const Loading = (
  <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
    <CircularProgress color="inherit" />
    Loading...
  </Backdrop>
);

export default Loading;

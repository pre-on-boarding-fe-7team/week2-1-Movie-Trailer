import { CircularProgress } from '@mui/material';
const Loading = (
  <div
    style={{
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      color: 'white',
      textAlign: 'center',
    }}
  >
    <CircularProgress />
    Loading...
  </div>
);

export default Loading;

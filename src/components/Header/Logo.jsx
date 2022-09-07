import { Link } from 'react-router-dom';
import { ROUTE } from '../../common/utils/constant';
import { LogoTitle } from './Logo.style';

const Logo = ({ children }) => {
  return (
    <LogoTitle
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    >
      <Link to={ROUTE.MAIN}>{children}</Link>
    </LogoTitle>
  );
};

export default Logo;

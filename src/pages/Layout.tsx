import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to="/">首页</Link>
      <Outlet />
    </div>
  );
};

export default Layout;

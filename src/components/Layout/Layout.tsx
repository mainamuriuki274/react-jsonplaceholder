import { FunctionComponent, ReactNode } from 'react';
import { NavBar } from '../NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default Layout;

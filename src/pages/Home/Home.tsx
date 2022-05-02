import { FunctionComponent } from 'react';
import { Users } from '../../components/Users';
import styles from './styles.module.scss';

const Home: FunctionComponent = () => (
  <div className={styles.home_container}>
    <h1 className={styles.title}>Users</h1>
    <Users />
  </div>
);

export default Home;

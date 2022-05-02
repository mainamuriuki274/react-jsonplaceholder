import { FunctionComponent } from 'react';
import { Layout } from '../../components/Layout';
import { Users } from '../../components/Users';
import styles from './styles.module.scss';

const UsersPage: FunctionComponent = () => (
  <Layout>
    <div className={styles.users_container}>
      <h1 className={styles.title}>Users</h1>
      <Users />
    </div>
  </Layout>
);

export default UsersPage;

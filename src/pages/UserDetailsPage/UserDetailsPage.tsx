import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { Error } from '../../components/Error';
import { Layout } from '../../components/Layout';
import { Loader } from '../../components/Loader';
import { UserDetails } from '../../components/Users/UserDetails';
import { useFetch } from '../../hooks/useFetch';
import styles from './styles.module.scss';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
}

const UserDetailsPage: FunctionComponent = () => {
  const { userId } = useParams();
  const { data: user, isPending, error } = useFetch<User>(`/users/${userId}`);
  return (
    <Layout>
      <div className={styles.user_details_page}>
        {isPending && <Loader />}
        {!isPending && error && <Error />}
        {!isPending && user && <UserDetails user={user} />}
      </div>
    </Layout>
  );
};

export default UserDetailsPage;

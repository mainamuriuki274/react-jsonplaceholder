import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { Error } from '../../components/Error';
import { Loader } from '../../components/Loader';
import { Posts } from '../../components/Posts';
import { useFetch } from '../../hooks/useFetch';
import styles from './styles.module.scss';

type User = {
  id: number;
  name: string;
  username: string;
};

const Home: FunctionComponent = () => {
  const { userId } = useParams();
  const { data: user, isPending, error } = useFetch<User>(`/users/${userId}`);

  // eslint-disable-next-line no-return-assign
  return (
    <div className={styles.user_posts_container}>
      {isPending && <Loader />}
      {!isPending && error && <Error />}
      {!isPending && user && (
        <>
          <h1 className={styles.title}>
            {user.name.slice(-1) === 's' ? `${user.name}'` : `${user.name}'s`}
            &nbsp;Posts
          </h1>
          <Posts userId={userId} />
        </>
      )}
    </div>
  );
};

export default Home;

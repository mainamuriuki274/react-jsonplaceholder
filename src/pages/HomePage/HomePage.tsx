import { FunctionComponent, useEffect, useState } from 'react';
import { Error } from '../../components/Error';
import { HomeCard } from '../../components/HomeCard';
import { Loader } from '../../components/Loader';
import { useFetchMany } from '../../hooks/useFetchMany';
import styles from './styles.module.scss';

interface Address {
  suite: string;
}

interface User {
  id: number;
  address: Address;
}

const HomePage: FunctionComponent = () => {
  const [apptNumber, setApptNumber] = useState<number>(0);
  const [suiteNumber, setSuiteNumber] = useState<number>(0);
  const { data: users, isPending, error } = useFetchMany<User>('/users');

  useEffect(() => {
    if (users) {
      setApptNumber(
        users.filter((usr) => usr.address.suite.includes('Apt')).length,
      );
      setSuiteNumber(
        users.filter((usr) => usr.address.suite.includes('Suite')).length,
      );
    }
  }, [users]);

  if (isPending) return <Loader />;

  if (error) return <Error />;

  return (
    <div className={styles.home_container}>
      <h1>Welcome to a Simple React JSONPlaceholder Project</h1>
      <div className="numbers">
        <p>
          There are &nbsp;
          {suiteNumber}
          &nbsp; users living in Suites and &nbsp;
          {apptNumber}
          &nbsp;in Apartments.
        </p>
      </div>
      <div className={styles.cards_container}>
        <HomeCard
          link="/users"
          title="Users"
          description="Displays a list of all users"
        />
        <HomeCard
          link="/posts"
          title="Posts"
          description="Displays all posts and its details"
        />
      </div>
    </div>
  );
};
export default HomePage;

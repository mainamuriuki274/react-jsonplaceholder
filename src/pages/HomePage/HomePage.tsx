import { FunctionComponent } from 'react';
import { HomeCard } from '../../components/HomeCard';
import styles from './styles.module.scss';

const HomePage: FunctionComponent = () => (
  <div className={styles.home_container}>
    <h1>Welcome to a Simple React JSONPlaceholder Project</h1>
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

export default HomePage;

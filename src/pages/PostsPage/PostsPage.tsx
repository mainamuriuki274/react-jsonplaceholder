import { FunctionComponent } from 'react';
import { Layout } from '../../components/Layout';
import { Posts } from '../../components/Posts';
import styles from './styles.module.scss';

const PostsPage: FunctionComponent = () => (
  <Layout>
    <div className={styles.posts_container}>
      <h1 className={styles.title}>All Posts</h1>
      <Posts />
    </div>
  </Layout>
);

export default PostsPage;

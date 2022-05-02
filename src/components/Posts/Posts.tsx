import { FunctionComponent } from 'react';
import { Loader } from '../Loader';
import { Error } from '../Error';
import { PostCard } from './PostCard';
import styles from './styles.module.scss';
import { useFetchMany } from '../../hooks/useFetchMany';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  userId: string | undefined;
}

const Posts: FunctionComponent<Props> = ({ userId }) => {
  const {
    data: posts,
    isPending,
    error,
  } = useFetchMany<Post>('/posts', { userId });

  if (isPending) return <Loader />;

  if (error) return <Error />;

  return (
    <div className={styles.posts_grid}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

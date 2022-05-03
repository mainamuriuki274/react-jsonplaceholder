import { FunctionComponent } from 'react';
import { Loader } from '../Loader';
import { Error } from '../Error';
import { PostCard } from './PostCard';
import styles from './styles.module.scss';
import { useFetchMany } from '../../hooks/useFetchMany';
import { Post } from '../../interfaces/postInterface';

interface PostsProps {
  userId?: string | undefined;
}

const Posts: FunctionComponent<PostsProps> = ({ userId }) => {
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

Posts.defaultProps = {
  userId: undefined,
};

export default Posts;

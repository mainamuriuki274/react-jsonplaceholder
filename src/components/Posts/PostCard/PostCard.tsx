import { FunctionComponent } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { DotsLoader } from '../../DotsLoader';
import styles from './styles.module.scss';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: FunctionComponent<PostCardProps> = ({ post }) => {
  const {
    data: user,
    isPending,
    error,
  } = useFetch<User>(`/users/${post.userId}`);

  return (
    <Card className={styles.post_card}>
      <Card.Body>
        <Card.Title className={styles.post_title}>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
      <div className={styles.author}>
        {isPending && <DotsLoader />}
        {!isPending && error && (
          <div className="error">Failed to fetch user</div>
        )}
        {!isPending && user && (
          <Link to={`/users/${post.userId}`}>{user.name}</Link>
        )}
      </div>
    </Card>
  );
};

export default PostCard;

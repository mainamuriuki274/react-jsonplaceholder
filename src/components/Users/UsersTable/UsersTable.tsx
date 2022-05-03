import { FunctionComponent } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { User } from '../../../interfaces/userInterface';

interface Props {
  users: User[];
}

const UsersTable: FunctionComponent<Props> = ({ users }) => (
  <Table striped bordered className={styles.user_table}>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>#</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user: any) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>
            <Link to={`/users/${user.id}/posts`}>View Posts</Link>
          </td>
          <td>
            <Link to={`/users/${user.id}`}>
              <FaEdit />
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default UsersTable;

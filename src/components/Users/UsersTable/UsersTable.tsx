import { FunctionComponent } from 'react';
import { Table } from 'react-bootstrap';

interface User {
  id: number;
  name: string;
  username: string;
}

interface Props {
  users: User[];
}

const UsersTable: FunctionComponent<Props> = ({ users }: any) => (
  <Table striped bordered>
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
            <a href="/">View Posts</a>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default UsersTable;

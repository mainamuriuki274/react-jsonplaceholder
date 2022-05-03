import { FunctionComponent } from 'react';
import { Loader } from '../Loader';
import { UsersTable } from './UsersTable';
import { Error } from '../Error';
import { useFetchMany } from '../../hooks/useFetchMany';
import { User } from '../../interfaces/userInterface';

const Users: FunctionComponent = () => {
  const { data: users, isPending, error } = useFetchMany<User>('/users');

  if (isPending) return <Loader />;

  if (error) return <Error />;

  return <UsersTable users={users} />;
};

export default Users;

import { FunctionComponent } from 'react';
import { Loader } from '../Loader';
import { UsersTable } from './UsersTable';
import { Error } from '../Error';
import { useFetch } from '../../hooks/useFetch';

type User = {
  id: number;
  name: string;
  username: string;
};

const Users: FunctionComponent = () => {
  const { data: users, isPending, error } = useFetch<User>('/users');

  if (isPending) return <Loader />;

  if (error) return <Error />;

  return <UsersTable users={users} />;
};

export default Users;

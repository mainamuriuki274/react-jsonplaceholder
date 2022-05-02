import { FunctionComponent } from 'react';
import { EditField } from '../../EditField';
import UserDetail from '../UserDetail/UserDetail';
import styles from './styles.module.scss';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
}

interface UserDetailsProps {
  user: User;
}

const UserDetails: FunctionComponent<UserDetailsProps> = ({ user }) => (
  <div className={styles.user_details_container}>
    <div>
      <h2>Personal Details</h2>
      <EditField
        label="Name"
        name="name"
        currentValue={user.name}
        userId={user.id}
      />
      <UserDetail label="Username" value={user.username} />
    </div>
    <div>
      <h2>Contact Information</h2>
      <UserDetail label="Email" value={user.email} />
      <UserDetail label="Phonenumber" value={user.phone} />
    </div>

    <div>
      <h2>Address Details</h2>
      <UserDetail label="Street" value={user.address.street} />
      <UserDetail label="Suite" value={user.address.suite} />
      <UserDetail label="City" value={user.address.city} />
      <UserDetail label="Zip Code" value={user.address.zipcode} />
    </div>
  </div>
);

export default UserDetails;

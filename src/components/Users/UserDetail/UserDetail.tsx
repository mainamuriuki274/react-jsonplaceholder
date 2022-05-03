import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface UserDetailProps {
  label: string;
  value: string;
}

const UserDetail: FunctionComponent<UserDetailProps> = ({ label, value }) => (
  <p>
    <span className={styles.label}>{label}</span>
    <span className={styles.value}>{value}</span>
  </p>
);

export default UserDetail;

import { FunctionComponent } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import styles from './styles.module.scss';

const Error: FunctionComponent = () => (
  <div className={styles.error}>
    <BiErrorCircle />
    <p>Unfortunately an error occured while fetching the resource</p>
  </div>
);

export default Error;

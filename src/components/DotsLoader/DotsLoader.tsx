import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

const DotsLoader: FunctionComponent = () => (
  <div className={styles.loading_dots}>
    <div>.</div>
    <div>.</div>
    <div>.</div>
  </div>
);

export default DotsLoader;

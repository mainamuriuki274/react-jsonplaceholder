import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface HomeCardProps {
  link: string;
  title: string;
  description: string | number;
}

const HomeCard: FunctionComponent<HomeCardProps> = ({
  link,
  title,
  description,
}) => (
  <Link className={styles.home_card_container} to={link}>
    <Card className={styles.home_card}>
      <Card.Body>
        <Card.Title className={styles.home_card_title}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className={styles.home_card_footer}>
        View &nbsp;
        <BsArrowRight />
      </Card.Footer>
    </Card>
  </Link>
);

export default HomeCard;

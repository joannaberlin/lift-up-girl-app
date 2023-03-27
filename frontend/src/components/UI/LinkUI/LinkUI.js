import { Link } from 'react-router-dom';
import styles from './LinkUI.module.scss';

const LinkUI = (props) => {
	return (
		<Link to={props.children} className={styles.link}>
			{props.children}
		</Link>
	);
};

export default LinkUI;

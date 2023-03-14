import styles from './Container.module.scss';

const Container = (props) => {
	return (
		<div className={styles.container} key={crypto.randomUUID()}>
			{props.children}
		</div>
	);
};

export default Container;

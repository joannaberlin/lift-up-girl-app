import styles from './TextContainer.module.scss';

const TextContainer = (props) => {
	return <div className={styles.text_wrapper}>{props.children}</div>;
};

export default TextContainer;

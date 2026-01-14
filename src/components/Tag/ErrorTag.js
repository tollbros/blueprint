import styles from './ErrorTag.module.scss';

const ErrorTag = ({ label = 'Error Message', children, className = '', ...rest }) => {
  const content = children ?? label;

  return (
    <div className={[styles.tagError, className].filter(Boolean).join(' ')} {...rest}>
      <span className={styles.label}>{content}</span>
    </div>
  );
};

export default ErrorTag;

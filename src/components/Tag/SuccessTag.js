import styles from './SuccessTag.module.scss';

const SuccessTag = ({ label = 'Success Message', children, className = '', ...rest }) => {
  const content = children ?? label;

  return (
    <div className={[styles.tagSuccess, className].filter(Boolean).join(' ')} {...rest}>
      <span className={styles.label}>{content}</span>
    </div>
  );
};

export default SuccessTag;

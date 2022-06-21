import styles from './styles/popout.module.css';

export default function PopOut(props) {
  const { plot, rating, title, onClose } = props;

  return (
    <div className={styles.popout}>
      <div className={styles.popoutContent}>
        <button onClick={() => onClose()}>×</button>
        <div className={styles.popoutHeader}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.plot}>
          <p>{plot}</p>

          {/* show the rating only if it is available */}
          {rating && <p className={styles.rating}>Rating: {rating}</p>}
        </div>
      </div>
    </div>
  );
}

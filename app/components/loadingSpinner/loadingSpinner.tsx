import styles from './loadingSpinner.module.scss';

const LoadingSpinner = () => {
    return <div className={styles.container}>
        <div className={styles.loader}></div>
    </div>
}

export default LoadingSpinner;
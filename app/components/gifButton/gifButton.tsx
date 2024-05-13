import styles from './gifButton.module.scss';

const GifButton = () => {
    return <div className={styles.container}>
        <button>
            <img src='./gif.png' alt="buttonpng" border="0" />
        </button>
    </div>
}

export default GifButton;
import styles from './gifButton.module.scss';

const GifButton = ({handleTap}) => {
    return <div className={styles.container}>
        <button onClick={handleTap}>
            <img src='./gif.png' alt="buttonpng" border="0" />
        </button>
    </div>
}

export default GifButton;
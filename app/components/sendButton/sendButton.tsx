import styles from './sendButton.module.scss';

type SendButtonProps = {
    handleTap: () => void
    disableSending: boolean
}

const SendButton = ({handleTap, disableSending}: SendButtonProps) => {
    return <div className={styles.container}>
        <button disabled={disableSending} className={`${disableSending ? styles.disabled : ''}`} onClick={handleTap} >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
        </button>
    </div>
}

export default SendButton;
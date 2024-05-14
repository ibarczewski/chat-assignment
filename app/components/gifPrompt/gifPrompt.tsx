import { useMessageStore } from '@/app/providers/message-store-provider';
import styles from './gifPrompt.module.scss';

const GifPrompt = () => {
    const { messageGroups, addMessage } = useMessageStore(
        (state) => state,
      )

    return <div className={styles.container}>
        <div>bing</div>
        <div>bing</div>
        <div>bing</div>
        <div>bing</div>
        <div>bing</div>
    </div>
}

export default GifPrompt;
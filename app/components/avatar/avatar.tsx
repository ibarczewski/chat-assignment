import styles from './avatar.module.scss';
import Image from 'next/image';

type AvatarProps = {
     src?: string
}

const Avatar = ({src}: AvatarProps) => {
     return <div className={styles.avatarContainer}>
          <img className={styles.avatarImage} src={src ?? './no-avatar.jpg'} />
     </div> 
}

export default Avatar;
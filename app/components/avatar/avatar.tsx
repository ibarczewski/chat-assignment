import styles from './avatar.module.scss';
import Image from 'next/image';

const Avatar = ({hasAvatar = false}) => {
     return <div className={styles.avatarContainer}>
          <img className={styles.avatarImage} src={hasAvatar ? "https://i.pravatar.cc/150" : './no-avatar.jpg'} />
     </div> 
}

export default Avatar;
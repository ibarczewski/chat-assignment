import styles from './avatar.module.scss';

type AvatarProps = {
     src?: string
}

const Avatar = ({src}: AvatarProps) => {
     return <div className={styles.container}>
          <img alt='user avatar' className={styles.avatarImage} src={src ?? './no-avatar.jpg'} />
     </div> 
}

export default Avatar;
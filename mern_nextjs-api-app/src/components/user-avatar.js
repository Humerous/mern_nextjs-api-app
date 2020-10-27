import React from 'react';
import styles from './User-Avatar.module.scss';
import Link from 'next/link';

//<--- USER AVATAR FUNCTION --->

const UserAvatar = ({ user }) => {
  return (
    <div className={styles.user}>
      <figure className={`${styles.avatar} image`}>
        <img className='is-rounded' src={user.avatar_url} alt='avatar' />
      </figure>
      <div className={styles.userLink}>
        <Link href='/profile/[id]' as={`/profile/${user.login}`}>
          <a>{user.login}</a>
        </Link>
      </div>
    </div>
  );
};

//<--- EXPORT FUNCTION --->
export default UserAvatar;

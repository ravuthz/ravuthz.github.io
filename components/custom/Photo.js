/* eslint-disable @next/next/no-img-element */

import styles from './Section.module.css'

const avatarUrl = 'https://raw.githubusercontent.com/ravuthz/ravuthz/master/YO_Vannaravuth_2021.jpg'

const Photo = () => {
  return (
    <div className={styles.Photo}>
      <img src={avatarUrl} alt={avatarUrl} />
    </div>
  )
}

export default Photo

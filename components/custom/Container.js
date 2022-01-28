import styles from './Section.module.css'

const Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>
}

export default Container

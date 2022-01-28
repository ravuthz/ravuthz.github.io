import styles from './Section.module.css'

const Section = ({ title, children }) => {
  return (
    <div className={styles.Section}>
      <h3 className={styles.SectionTitle}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export default Section

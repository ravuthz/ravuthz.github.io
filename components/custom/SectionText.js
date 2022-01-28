import Section from './Section'

import styles from './Section.module.css'

const SectionText = ({ title, text, children }) => {
  return (
    <Section title={title}>
      <div className={styles.SectionText}>{text}</div>
      {children}
    </Section>
  )
}

export default SectionText

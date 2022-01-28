import Section from './Section'

import styles from './Section.module.css'

const SectionList = ({ title, items }) => {
  return (
    <Section title={title}>
      <ul className={styles.List}>
        <li>
          {items &&
            items.map((item, index) => (
              <li key={index}>
                <div className={styles.ListItem}>
                  <div className={styles.ListItemLeft}>{item[0]}</div>
                  <div className={styles.ListItemRight}>
                    {item[1]} {item[2]}
                  </div>
                </div>
              </li>
            ))}
        </li>
      </ul>
    </Section>
  )
}

export default SectionList

import Head from 'next/head'

import styles from '../components/custom/Section.module.css'

import Photo from '../components/custom/Photo'
import Section from '../components/custom/Section'
import Container from '../components/custom/Container'
import SectionList from '../components/custom/SectionList'
import SectionText from '../components/custom/SectionText'

const personInfo = {
  firstName: 'Vannaravuth',
  lastName: 'Yo',
  phone: '+855 96 457 7770',
  email: 'ravuthz@gmail.com',
  position: 'Senior Developer',
  address: [
    '#81, St. 53BT, Beuong Tumpun 2, Kbal Tumnub 3',
    'Khan Mean Chey, Phnom Penh, Cambodia.',
  ],
}

const personData = [
  ['Sex', 'Male'],
  ['Nationality', 'Cambodian'],
  ['Date of Birth', 'July, 02, 1990'],
  ['Place of Birth', 'Phnom Penh'],
  ['Marital Status', 'Married'],
]

const educationBackground = [
  [
    'Oct 2011 - 2015',
    'Graduated Bachelor Degree of Information Technology at Royal University of Phnom Penh',
  ],
  ['Jun - Sep 2011', 'Finished English Course at Cambodia International Cooperation Organization'],
  ['May - Aug 2011', 'Finished Computer Course at Multi-Skill Computer Center'],
  ['2004 - 2010', 'Passed High School at Chea Sim Santhormok High School'],
  ['1998 - 2004', 'Passed Primary School at Santhormok Primary School'],
]

const tranningCourses = [
  [
    'Bridging Courses',
    'Cambodia International Cooperation Institute, CICI',
    'Sentence Skill I, Academic Writing I, Special English Conversation I, Academic Writing II Sentence Skill II, Special English Conversation II',
  ],
  [
    'Computer Courses',
    'Multi-Skill Computer Center',
    'MSCC Microsoft Office 2010 (Word, Excel, PowerPoint)',
  ],
  [
    'Short Courses',
    'Cambodia International Cooperation Organization, CICO',
    'English Conversation Intermediate, Parts of Speech',
  ],
  ['Short Courses', 'Korea Software HRD Center', 'IT Expert'],
]

const workExperinces = [
  {
    // Jan - June 2013
    date: ['01-2013', '06-2013'],
    position: 'Marketing Team Leader',
    company: 'MetLaor Company',
    description: 'Marketing Team Leader at <b>MetLaor Company</b>',
    children: [
      'Test and find bugs in game',
      'Test and find bugs in game',
      'Lead the team to advertise the game',
    ],
  },
  {
    // Mar 2015 - Dec 2016
    date: ['03-2015', '12-2016'],
    position: 'Developer',
    company: 'KOSIGN Co. Ltd',
    description: 'Developer at KOSIGN Co. Ltd',
    children: [
      'Responsible for creating, improving, and developing project strategies',
      'Design and develop high-volume, low latency application for mission-critical',
      'Contribute all phase of the development lifecycle',
      'Develop on Java Spring, Vaadin, Hibernate Frameworks',
      'Using GitHub for source code version control',
      'Handle server hosting and deploy projects with tomcat and wildfly',
      'Handle GIT merging source code',
      'Handle Insurance System using Spring, Vaadin, Hibernate project',
    ],
  },
  {
    // Dec 2016 - Mar 2018
    date: ['12-2016', '03-2018'],
    position: 'Java Developer',
    company: 'GL Finance PLC',
    description: 'Java Developer at GL Finance PLC',
    children: [
      'Responsible for creating, improving, and developing project strategies',
      'Design and develop high-volume, low latency application for mission-critical',
      'Contribute all phase of the development lifecycle',
      'Develop on Java Spring, Vaadin, Hibernate Frameworks',
      'Using GitHub for source code version control',
      'Handle server hosting and deploy projects with tomcat and wildfly',
      'Handle GIT merging source code',
      'Handle Insurance System using Spring, Vaadin, Hibernate project',
    ],
  },
  {
    // Mar 2018 - June 2019
    date: ['03-2018', '06-2019'],
    position: 'Senior Developer',
    company: 'SISKH',
    description: 'Senior Developer at SISKH',
    children: [
      'Maintenant SAP System',
      'Develop project as VueJS framework',
      'Develop project as ReactJS framework',
      'Develop project as NodeJs Framework',
      'Develop backend project as KoaJS',
      'Develop rest API as Java language and spring framework',
    ],
  },
  {
    // June 2019 - Present
    date: ['06-2019', ''],
    position: 'Senior Developer',
    company: 'i-Finance Leasing Plc',
    description: 'Senior Developer at i-Finance Leasing Plc',
    children: [
      'Develop core project with Vaddin, defined core, share functions to developers',
      'Develop backend projects with Spring Boot as REST API',
      'Develop frontend projects with React, PWA',
      'Research and develop projects related to Microservice',
      'Deploy applications to AWS, docker, local server and apply CICD with Jenkin and Bitbucket Pipeline',
      'Leading a small team to develop core projects for company',
    ],
  },
].reverse()

const skills = [
  ['Languages', 'Java, PHP, Python, Ruby, NodeJS, HTML, CSS, JS'],
  [
    'Frameworks',
    'Spring Boot, Laravel, Codeignitor, Phalcon, Rails, Angular, React, Vue, Bootstrap, AntDesign, Vuetify',
  ],
  ['Databases', 'PostgreSQL, MySQL, MongoDB, SQLite, SQL Server'],
]

const languages = [
  ['Khmer', 'Mother Tongue'],
  ['English', 'Good'],
]

const hobbies = `Play facebook, Listen music, Watch movie, Play computer's game`

const formatDate = (date) => {
  if (!date) {
    return 'Present'
  }

  const dateKeys = date.split('-')
  if (dateKeys && dateKeys.length == 2) {
    const dateObj = new Date(`${dateKeys[1]}-${dateKeys[0]}`)
    const dateFmt = dateObj.toDateString()
    return `${dateFmt.substring(4, 7)} ${dateFmt.substring(11, 15)}`
  }
  //   return moment(date, 'MM-YYYY').format('MMM YYYY')
}

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vannaravuth YO's CV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <header>
          <div className={styles.TitleContainer}>
            <h1>Curriculum Viate</h1>
            <h3>{personInfo.position}</h3>
          </div>
          <div className={styles.AddressContainer}>
            <div>
              <Photo />
            </div>
            <div>
              <address className={styles.Address}>
                <span className={styles.FullName}>
                  {personInfo.firstName} {personInfo.lastName}
                </span>
                {personInfo.address &&
                  personInfo.address.map((add) => <span key={add}>{add}</span>)}
                <span>
                  <a href={`tel:${personInfo.phone}`}>{personInfo.phone}</a>
                </span>
                <span>
                  <a href={`mailto:${personInfo.email}`}>{personInfo.email}</a>
                </span>
              </address>
            </div>
          </div>
        </header>

        <SectionList title="Personal Data" items={personData} />

        <Section title="Work Experience">
          <ul className={styles.List}>
            {workExperinces &&
              workExperinces.map((item, index) => (
                <li key={index}>
                  <div className={styles.ListItem}>
                    <div className={styles.ListItemLeft}>
                      {formatDate(item.date[0])} - {formatDate(item.date[1])}
                    </div>
                    <div className={styles.ListItemRight}>
                      {item.position}
                      {item.company && (
                        <span>
                          {' at '}
                          <strong>{item.company}</strong>
                        </span>
                      )}
                      {item.children && (
                        <ul className={styles.ListSubItem}>
                          {item.children.map((child, key) => (
                            <li key={key}>{child}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </Section>

        <SectionList title="Education Background" items={educationBackground} />

        <SectionList title="Tranning Courses" items={tranningCourses} />

        <SectionList title="Skills" items={skills} />

        <SectionList title="Languages" items={languages} />

        <SectionText title="Hobbies" text={hobbies} />
      </main>
    </Container>
  )
}

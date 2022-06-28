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
  fullName: `${this.lastName} ${this.firstName}`,
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
    // June 2019 - Present
    date: ['06-2019', ''],
    position: 'Senior Developer',
    company: 'i-Finance Leasing Plc',
    description: 'Senior Developer at i-Finance Leasing Plc',
    children: [
      'Developed core projects with Vaddin, defined core, share functions to developers',
      'Developed backend projects with Spring Boot as REST API',
      'Developed frontend projects with React, PWA',
      'Research and develop projects related to Microservice',
      'Deployed applications to AWS, docker, local server and apply CICD with Jenkin and Bitbucket Pipeline',
      'Leading team to develop projects for company',
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
      'Developed project with VueJS framework',
      'Developed project with ReactJS framework',
      'Developed project with NodeJs Framework',
      'Developed project with KoaJS',
      'Develop rest API as Java language and spring framework',
    ],
  },
  {
    // Dec 2016 - Mar 2018
    date: ['12-2016', '03-2018'],
    position: 'Java Developer',
    company: 'GL Finance PLC',
    description: 'Java Developer at GL Finance PLC',
    children: [
      'Develop projects with technologies Java Spring, Vaadin, Hibernate Frameworks',
      'Using GitHub for source code version control',
      'Handle server hosting and deploy projects with tomcat and wildfly',
      'Handle GIT merging source code',
      'Handle Insurance System using Spring, Vaadin, Hibernate project',
    ],
  },
  {
    // Mar 2015 - Dec 2016
    date: ['03-2015', '12-2016'],
    position: 'Developer',
    company: 'KOSIGN Co. Ltd',
    description: 'Developer at KOSIGN Co. Ltd',
    children: [
      'Worked on Actions of Java Servlet',
      'Worked on Project using Java Servlet with MVC2 pattern',
      'Maintenance the Java Servlet Project',
      "Maintenance Jexframe (Company 's core System using Servlet with Javascript from Korea)",
      'Using Bitbucket for source code version control',
      'Worked Laravel and develop project with Laravel',
    ],
  },
  {
    // Jan - June 2013
    date: ['01-2013', '06-2013'],
    position: 'Marketing Team Leader',
    company: 'MetLaor Company',
    description: 'Marketing Team Leader at <b>MetLaor Company</b>',
    children: ['Test and find bugs in game', 'Lead the team to advertise the game'],
  },
]

const workSkills = [
  ['Languages', 'Java, PHP, NodeJS, Python,HTML, CSS, JS'],
  [
    'Frameworks',
    'Spring Boot, Laravel, Codeignitor, Phalcon, AngularJS, ReactJS, VueJS, Bootstrap, AntDesign, Vuetify',
  ],
  ['Databases', 'PostgreSQL, MySQL, MongoDB, SQLite, SQL Server'],
]

const languages = [
  ['Khmer', 'Mother Tongue'],
  ['English', 'Good'],
]

const hobbies = `Play social media, research new technologies, listen music, watch movie`

module.exports = {
  personInfo,
  personData,
  educationBackground,
  tranningCourses,
  workExperinces,
  workSkills,
  languages,
  hobbies,
}

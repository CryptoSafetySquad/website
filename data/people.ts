type Person = {
  name: string;
  twitter?: string;
  linkedin?: string;
}

const people: {[key: string]: Person;} = {
  // HWMC Team
  sampitman: {
    name: 'Sam Pitman',
    twitter: 'https://twitter.com/_sampitman',
    linkedin: 'https://www.linkedin.com/in/sam-pitman-3b5959138/',
  },
  adamdignan: {
    name: 'Adam Dignan',
    linkedin: 'https://www.linkedin.com/in/adam-dignan-b7985418b/'
  },
  dylanhatten: {
    name: 'Dylan Hatten',
    linkedin: 'https://www.linkedin.com/in/dylanhatten/'
  },
  andersonarokium: {
    name: 'Anderson Arokium',
    linkedin: 'https://www.linkedin.com/in/andersonarokium/',
    twitter: 'https://twitter.com/Andersonarow',
  },
  adamjavaid: {
    name: 'Adam Javaid',
    linkedin: 'https://www.linkedin.com/in/adam-javaid-511397161/',
    twitter: 'https://twitter.com/_adambanks'
  },

  // Content Creators
}

export default people

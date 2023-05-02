type Person = {
  name: string;
  twitter?: string;
  linkedin?: string;
  tiktok?: string;
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
  // AceMiners NFT
  ace_sarah: {
    name: 'Sarah',
    twitter: 'https://twitter.com/sarahaceminers',
  },
  ajamrani: {
    name: 'AJ Amrani',
    twitter: 'https://twitter.com/ajaceminersnft',
  },
  zaraamrani: {
    name: 'Zara Amrani',
    linkedin: 'https://www.linkedin.com/in/zara-amrani-117b88228/',
    tiktok: 'https://www.tiktok.com/@cryptozara',
  },
  // EMP Money
  ajbrockman: {
    name: 'AJ Brockman',
    linkedin: 'https://www.linkedin.com/in/ajbrockman/',
    twitter: 'https://twitter.com/brockman_aj',
  },

  // OMNIMoney/OMNIBirds

  // Content Creators
}

export default people

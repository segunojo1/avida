// Types
export interface DreamCard {
  id: number;
  message: string;
  author?: string;
  createdAt: number;
  card: 'green' | 'yellow' | 'blue' | 'mine';
  icon: string;
  category?: string;
};

export const categories = [
  'Adventure',
  'Career',
  'Education',
  'Family',
  'Finance',
  'Health',
  'Personal Growth',
  'Relationships',
  'Travel',
  'Philanthropy'
];

export const sampleDreamcards: DreamCard[] = [
  // Adventure
  {
    id: 1,
    message: "Before I turn 25, I will climb Mount Everest and hit the sickest and hardest backflip. I will do this in memory of my GrandPa who loved mountain climbing when he was my age but had to stop when he had an accident.",
    author: "Segun",
    createdAt: new Date('2024-01-15').getTime(),
    card: "green",
    icon: "/assets/card-icons/fire.svg",
    category: "Adventure"
  },
  {
    id: 2,
    message: "I will complete the Pacific Crest Trail, hiking from Mexico to Canada, documenting the journey and the people I meet along the way.",
    author: "Aisha",
    createdAt: new Date('2024-02-20').getTime(),
    card: "blue",
    icon: "/assets/card-icons/wave.svg",
    category: "Adventure"
  },
  
  // Career
  {
    id: 3,
    message: "Before I turn 30, I want to start my own tech company that builds tools to make education free and accessible for everyone.",
    author: "Amaka",
    createdAt: new Date('2024-03-05').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/board.svg",
    category: "Career"
  },
  {
    id: 4,
    message: "I will become a published author with a New York Times bestseller within the next 5 years.",
    author: "Chidi",
    createdAt: new Date('2024-01-30').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/magic.svg",
    category: "Career"
  },
  
  // Travel
  {
    id: 5,
    message: "Before I graduate, I will backpack across Africa with my friends, learning cultures and collecting stories.",
    author: "Tunde",
    createdAt: new Date('2024-02-15').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/peace.svg",
    category: "Travel"
  },
  {
    id: 6,
    message: "I will visit all seven continents before I turn 35, with Antarctica being the grand finale of my global adventures.",
    author: "Ngozi",
    createdAt: new Date('2024-03-01').getTime(),
    card: "blue",
    icon: "/assets/card-icons/wave.svg",
    category: "Travel"
  },
  
  // Personal Growth
  {
    id: 7,
    message: "Before I turn 40, I will write a book about my journey as a self-taught engineer to inspire the next generation.",
    author: "Zainab",
    createdAt: new Date('2024-02-10').getTime(),
    card: "green",
    icon: "/assets/card-icons/heart.svg",
    category: "Personal Growth"
  },
  {
    id: 8,
    message: "I will become fluent in Spanish and spend a summer living in Spain to fully immerse myself in the language and culture.",
    author: "Emeka",
    createdAt: new Date('2024-01-25').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/heart-eyes.svg",
    category: "Personal Growth"
  },
  
  // Philanthropy
  {
    id: 9,
    message: "Before I retire, I will build a library in my hometown where kids can read, dream, and grow without limits.",
    author: "Fatima",
    createdAt: new Date('2024-03-10').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/love.svg",
    category: "Philanthropy"
  },
  {
    id: 10,
    message: "I will establish a scholarship fund for underprivileged girls in STEM fields, helping at least 10 students annually.",
    author: "Obinna",
    createdAt: new Date('2024-02-25').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/board.svg",
    category: "Philanthropy"
  },
  
  // Health & Wellness
  {
    id: 11,
    message: "I will run a marathon on every continent, combining my love for running with my passion for travel and adventure.",
    author: "Amina",
    createdAt: new Date('2024-01-20').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/heart.svg",
    category: "Health"
  },
  
  // Family
  {
    id: 12,
    message: "I will create a family cookbook with recipes passed down through generations, complete with stories and photos.",
    author: "Yusuf",
    createdAt: new Date('2024-03-05').getTime(),
    card: "blue",
    icon: "/assets/card-icons/heart-eyes.svg",
    category: "Family"
  },
  
  // Education
  {
    id: 13,
    message: "I will earn my PhD in Artificial Intelligence and contribute to ethical AI research that benefits humanity.",
    author: "Chiamaka",
    createdAt: new Date('2024-02-18').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/magic.svg",
    category: "Education"
  },
  
  // Finance
  {
    id: 14,
    message: "I will achieve financial independence by age 40 through smart investments and multiple income streams.",
    author: "Oluwaseun",
    createdAt: new Date('2024-01-28').getTime(),
    card: "green",
    icon: "/assets/card-icons/board.svg",
    category: "Finance"
  },
  
  // Relationships
  {
    id: 15,
    message: "I will organize a family reunion that brings together relatives from around the world to celebrate our heritage.",
    author: "Adeola",
    createdAt: new Date('2024-03-08').getTime(),
    card: "yellow",
    icon: "/assets/card-icons/love.svg",
    category: "Relationships"
  }
];

export const cardIcons = [
  "/assets/card-icons/board.svg", 
  "/assets/card-icons/fire.svg", 
  "/assets/card-icons/heart-eyes.svg", 
  "/assets/card-icons/heart.svg", 
  "/assets/card-icons/love.svg", 
  "/assets/card-icons/magic.svg", 
  "/assets/card-icons/peace.svg", 
  "/assets/card-icons/wave.svg"
];

export const cardColors = {
  green: '#E8F5E9',
  yellow: '#FFF8E1',
  blue: '#E3F2FD',
  pink: '#FCE4EC',
  purple: '#F3E5F5'
};

export const getRandomCardColor = (): keyof typeof cardColors => {
  const colors = Object.keys(cardColors) as Array<keyof typeof cardColors>;
  return colors[Math.floor(Math.random() * colors.length)];
};


export const myEntriesDreamcards: DreamCard[] = [
  {
    id: 1,
    message: "Before I turn 25, I will climb Mount Everest and hit the sickest and hardest backflip. I will do this in memory of my GrandPa who loved mountain climbing when he was my age but had to stop when he had an accident.",
    author: "Segun",
    createdAt: new Date('2024-01-15').getTime(),
    card: "mine",
    icon: "/assets/card-icons/fire.svg",
    category: "Adventure"
  },
  {
    id: 2,
    message: "I will complete the Pacific Crest Trail, hiking from Mexico to Canada, documenting the journey and the people I meet along the way.",
    author: "Aisha",
    createdAt: new Date('2024-02-20').getTime(),
    card: "mine",
    icon: "/assets/card-icons/wave.svg",
    category: "Adventure"
  },
  {
    id: 3,
    message: "Before I turn 30, I want to start my own tech company that builds tools to make education free and accessible for everyone.",
    author: "Amaka",
    createdAt: new Date('2024-03-05').getTime(),
    card: "mine",
    icon: "/assets/card-icons/board.svg",
    category: "Career"
  },
  {
    id: 4,
    message: "I will become a published author with a New York Times bestseller within the next 5 years.",
    author: "Chidi",
    createdAt: new Date('2024-01-30').getTime(),
    card: "mine",
    icon: "/assets/card-icons/magic.svg",
    category: "Career"
  },
  {
    id: 5,
    message: "Before I graduate, I will backpack across Africa with my friends, learning cultures and collecting stories.",
    author: "Tunde",
    createdAt: new Date('2024-02-15').getTime(),
    card: "mine",
    icon: "/assets/card-icons/peace.svg",
    category: "Travel"
  },
  {
    id: 6,
    message: "I will visit all seven continents before I turn 35, with Antarctica being the grand finale of my global adventures.",
    author: "Ngozi",
    createdAt: new Date('2024-03-01').getTime(),
    card: "mine",
    icon: "/assets/card-icons/wave.svg",
    category: "Travel"
  },
  {
    id: 7,
    message: "Before I turn 40, I will write a book about my journey as a self-taught engineer to inspire the next generation.",
    author: "Zainab",
    createdAt: new Date('2024-02-10').getTime(),
    card: "mine",
    icon: "/assets/card-icons/heart.svg",
    category: "Personal Growth"
  },
  {
    id: 8,
    message: "I will become fluent in Spanish and spend a summer living in Spain to fully immerse myself in the language and culture.",
    author: "Emeka",
    createdAt: new Date('2024-01-25').getTime(),
    card: "mine",
    icon: "/assets/card-icons/heart-eyes.svg",
    category: "Personal Growth"
  },
  {
    id: 9,
    message: "Before I retire, I will build a library in my hometown where kids can read, dream, and grow without limits.",
    author: "Fatima",
    createdAt: new Date('2024-03-10').getTime(),
    card: "mine",
    icon: "/assets/card-icons/love.svg",
    category: "Philanthropy"
  },
  {
    id: 10,
    message: "I will establish a scholarship fund for underprivileged girls in STEM fields, helping at least 10 students annually.",
    author: "Obinna",
    createdAt: new Date('2024-02-25').getTime(),
    card: "mine",
    icon: "/assets/card-icons/board.svg",
    category: "Philanthropy"
  },
  {
    id: 11,
    message: "I will run a marathon on every continent, combining my love for running with my passion for travel and adventure.",
    author: "Amina",
    createdAt: new Date('2024-01-20').getTime(),
    card: "mine",
    icon: "/assets/card-icons/heart.svg",
    category: "Health"
  },
  {
    id: 12,
    message: "I will create a family cookbook with recipes passed down through generations, complete with stories and photos.",
    author: "Yusuf",
    createdAt: new Date('2024-03-05').getTime(),
    card: "mine",
    icon: "/assets/card-icons/heart-eyes.svg",
    category: "Family"
  },
  {
    id: 13,
    message: "I will earn my PhD in Artificial Intelligence and contribute to ethical AI research that benefits humanity.",
    author: "Chiamaka",
    createdAt: new Date('2024-02-18').getTime(),
    card: "mine",
    icon: "/assets/card-icons/magic.svg",
    category: "Education"
  },
  {
    id: 14,
    message: "I will achieve financial independence by age 40 through smart investments and multiple income streams.",
    author: "Oluwaseun",
    createdAt: new Date('2024-01-28').getTime(),
    card: "mine",
    icon: "/assets/card-icons/board.svg",
    category: "Finance"
  },
  {
    id: 15,
    message: "I will organize a family reunion that brings together relatives from around the world to celebrate our heritage.",
    author: "Adeola",
    createdAt: new Date('2024-03-08').getTime(),
    card: "mine",
    icon: "/assets/card-icons/love.svg",
    category: "Relationships"
  }
];
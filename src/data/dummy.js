import React from 'react';
import { FiCreditCard, FiScissors } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { FaClockRotateLeft } from "react-icons/fa6";
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';
import { BsJournalMedical } from "react-icons/bs";



export const links = [
  {
    title: 'The App',
    links: [
      {
        name: 'Strategy Design',
        icon: <FiScissors />,
        link: 'strategydesign'
      },
      {
        name: 'Trade Journal',
        icon: <BsJournalMedical />,
        link: 'journal'
      },
      {
        name: 'Time Machine',
        icon: <FaClockRotateLeft />,
        link: 'timemachine'
      },
    ],
  },

];

export const cartData = [
  {
    image:
      product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image:
      product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const targetMarkets = [
  {
    Id: '1',
    Time: 'BTCUSDT',
  },
  {
    Id: '2',
    Time: 'S&P500',
  }, {
    Id: '3',
    Time: 'EURUSD',
  }, {
    Id: '4',
    Time: 'GOLD',
  }, {
    Id: '5',
    Time: 'QQQ',
  },
];

export const timeMachines = [
{
  Id: '0',
  name: '',
  avatar: product8,
  description: '',
  start_time: '',
  end_time: '',
  initial_capital: '',
  max_leverage: '',
  playback_speed: '',
},
{
  Id: '1',
  name: 'Great Financial Crisis',
  avatar: product8,
  description: 'This will be the description of the time machine written by the user. The user will detail why they created this time machine, if it is representing a specific time in the financial history, and the purposes of this time machine, i.e. testing a specific strategy.',
  start_time: '01-Jan-2007',
  end_time: '30-Dec-2009',
  initial_capital: '$100,000',
  max_leverage: '2x',
  playback_speed: '1:3600',
},{
  Id: '2',
  name: 'Crypto China Miner\'s Crash',
  avatar: product8,
  description: 'This will be the description of the time machine written by the user. The user will detail why they created this time machine, if it is representing a specific time in the financial history, and the purposes of this time machine, i.e. testing a specific strategy.',
  start_time: '14-Apr-2021',
  end_time: '06-Sep-2021',
  initial_capital: '$1,000',
  max_leverage: '125x',
  playback_speed: '1:1',
},{
  Id: '3',
  name: 'COVID Crash',
  avatar: product8,
  description: 'This will be the description of the time machine written by the user. The user will detail why they created this time machine, if it is representing a specific time in the financial history, and the purposes of this time machine, i.e. testing a specific strategy.',
  start_time: '23-Jan-2020',
  end_time: '11-May-2020',
  initial_capital: '$10,000',
  max_leverage: '5x',
  playback_speed: '1:1',
},
]


export const strategies = [
  {
    Id: '0',
    name: 'No Strategy',
    avatar: '',
    description: '',
    setup_target_market: '',
    setup_time_frame: '',
    setup_time_of_day: '',
    setup_day_of_week: '',
    entry_1: '',
    entry_2: '',
    exit_1: '',
    exit_2: '',
  },
  {
    Id: '1',
    name: 'Awesome Scalp Strategy',
    avatar: product8,
    description: 'This will be some description of the strategy. It is written by the user and may include information on the strategy usage, origin and even rate of subjective success determined by the user.',
    setup_target_market: 'BTCUSD',
    setup_time_frame: '1m-15m',
    setup_time_of_day: '0900-1100',
    setup_day_of_week: 'Tue & Thu',
    entry_risk: '0.50%',
    entry_leverage: '25x',
    entry_1: 'Triangle Pattern',
    entry_2: 'OBV',
    exit_type: 'Manual',
    exit_1: 'Price > MA(50)',
    exit_2: 'RSI-10 < 0.3',

  },
  {
    Id: '2',
    name: 'RBO Swing Strategy',
    avatar: product8,
    description: 'This will be some description of the strategy. It is written by the user and may include information on the strategy usage, origin and even rate of subjective success determined by the user.',
    setup_target_market: 'EURUSD',
    setup_time_frame: '4H-1D',
    setup_time_of_day: '0900-1530',
    setup_day_of_week: 'Mon-Wed',
    entry_risk: '1.50%',
    entry_leverage: '3x',
    entry_1: 'RSI-14',
    entry_2: 'MACD',
    exit_type: 'Trailing @ 2%',
    exit_1: 'Trailing Stop',
    exit_2: 'Doji',
  }, {
    Id: '3',
    name: 'Golden/Death Cross',
    avatar: product8,
    description: 'This will be some description of the strategy. It is written by the user and may include information on the strategy usage, origin and even rate of subjective success determined by the user.',
    setup_target_market: 'S&P500',
    setup_time_of_day: '0900-1300',
    setup_day_of_week: 'Work Days',
    setup_time_frame: '1D',
    entry_risk: '1.50%',
    entry_leverage: '25x',
    entry_1: 'MA(50) x MA(200)',
    entry_2: '',
    exit_type: 'Manual',
    exit_1: 'MA(200) x MA(50)',
    exit_2: '',
  }, {
    Id: '4',
    name: 'Swing Trading Crypto',
    avatar: product8,
    description: 'This will be some description of the strategy. It is written by the user and may include information on the strategy usage, origin and even rate of subjective success determined by the user.',
    setup_target_market: 'BTCUSD',
    setup_time_frame: '1D-1W',
    setup_time_of_day: '24H',
    setup_day_of_week: 'Every day',
    entry_risk: '1%',
    entry_leverage: '10x',
    entry_1: 'Super Trend',
    entry_2: 'MACD',
    exit_type: 'Fixed 1%',
    exit_1: 'Fixed 1%',
    exit_2: '',
  },
];

export const exitTypes = [
  {
    Id: '1',
    Time: 'Trailing Stop',
  },
  {
    Id: '2',
    Time: 'Take Profit',
  }, {
    Id: '3',
    Time: 'Manual',
  }, {
    Id: '4',
    Time: 'Mixed',
  },
];


export const timeFrames = [
  {
    Id: '1',
    Time: '1m',
  },
  {
    Id: '2',
    Time: '5m',
  }, {
    Id: '3',
    Time: '15m',
  }, {
    Id: '4',
    Time: '1H',
  }, {
    Id: '5',
    Time: '4H',
  }, {
    Id: '6',
    Time: '8H',
  }, {
    Id: '7',
    Time: '1D',
  }, {
    Id: '8',
    Time: '3D',
  }, {
    Id: '9',
    Time: '1W',
  }, {
    Id: '10',
    Time: '1M',
  },
];

export const journalTradeList = [

  {
    id: '1',
    side: 'buy',
    date: '01/02/2021',
    pnl: '$230',
    wnl: 'l'
  },
  {
    id: '2',
    side: 'sell',
    date: '19/03/2021',
    pnl: '$230',
    wnl: 'w'
  },
  {
    id: '3',
    side: 'sell',
    date: '12/04/2021',
    pnl: '$42',
    wnl: 'l'
  },
  {
    id: '4',
    side: 'buy',
    date: '01/05/2021',
    pnl: '$112',
    wnl: 'w'
  },





];


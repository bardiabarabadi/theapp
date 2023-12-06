import React from 'react';
import { FiCreditCard, FiScissors } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
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


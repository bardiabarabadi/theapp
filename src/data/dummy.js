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
    strategy_id: 0,
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
    strategy_id: 3,
  }, {
    Id: '2',
    name: 'Crypto China Miner\'s Crash',
    avatar: product8,
    description: 'This will be the description of the time machine written by the user. The user will detail why they created this time machine, if it is representing a specific time in the financial history, and the purposes of this time machine, i.e. testing a specific strategy.',
    start_time: '14-Apr-2021',
    end_time: '06-Sep-2021',
    initial_capital: '$1,000',
    max_leverage: '125x',
    playback_speed: '1:1',
    strategy_id: 2,
  }, {
    Id: '3',
    name: 'COVID Crash',
    avatar: product8,
    description: 'This will be the description of the time machine written by the user. The user will detail why they created this time machine, if it is representing a specific time in the financial history, and the purposes of this time machine, i.e. testing a specific strategy.',
    start_time: '23-Jan-2020',
    end_time: '11-May-2020',
    initial_capital: '$10,000',
    max_leverage: '5x',
    playback_speed: '1:1',
    strategy_id: 1,
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
  },{
    Id: '4',
    name: 'AI Designed',
    avatar: product8,
    description: 'Long-term S&P 500 trading strategy utilizing the MACD for entry signals and RSI for exit signals, with conservative risk management principles.',
    setup_target_market: 'S&P500',
    setup_time_frame: '1W-1M',
    setup_time_of_day: '24H',
    setup_day_of_week: 'Every day',
    entry_risk: '1%',
    entry_leverage: '1x',
    entry_1: 'MACD 12-26-9',
    entry_2: '',
    exit_type: 'RSI Indicator',
    exit_1: 'RSI>70',
    exit_2: 'RSI<30',
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



export const strategyAiConverstation = [

  {
    isUser: false,
    text: "Hello Michael. I am your personal trade strategy advisor. Let's get started with designing your strategy. To begin, could you please provide some information about the target market you're interested in trading? Are you focusing on stocks, forex, commodities, cryptocurrencies, or perhaps another financial instrument?",
  },
  {
    isUser: true,
    text: "Hi there, I want to trade the SP500 index. ",
  },
  {
    isUser: false,
    text: "Great choice, Michael. Trading the S&P 500 index offers exposure to a broad range of leading U.S. companies and is a popular choice among traders. Now, let's move on to the next step. What time frame do you prefer for your trades? Would you like to focus on intraday trading (e.g., 5-minute, 15-minute), daily swings, weekly trends, or perhaps longer-term positions?",
  },
  {
    isUser: true,
    text: "Long term positions",
  },
  {
    isUser: false,
    text: "Understood, Michael. Long-term positions can offer the benefit of capturing broader market trends and reducing the impact of short-term market fluctuations. Now, let's discuss any specific criteria or conditions you'd like to consider for your trading strategy. Are there any particular events or circumstances, such as major news announcements or high volatility periods, that you prefer to avoid trading during?",
  },
  {
    isUser: true,
    text: "NPF and interest rate news scare me. I would like to avoid trading around them",
  },
  {
    isUser: false,
    text: "That's a prudent approach, Michael. News related to Non-Farm Payrolls (NFP) and interest rates can indeed lead to increased market volatility and unpredictable price movements. Avoiding trading around these events can help minimize risk and uncertainty in your trading strategy.\n Now, let's move on to the entry criteria for your trades. Could you please specify the percentage of your trading capital you're comfortable risking on each trade? Additionally, are you planning to use leverage in your trades, and if so, what leverage ratio are you considering? Finally, what specific technical indicators or signals are you interested in using to enter trades?",
  },
  {
    isUser: true,
    text: "Do you have a suggestion?",
  },
  {
    isUser: false,
    text: "Certainly, Michael. For risk per trade, a common guideline is to risk no more than 1% to 2% of your trading capital on any single trade. This helps to manage risk and preserve capital over the long term.\n\nRegarding leverage, it's important to use it cautiously, especially when trading long-term positions. High leverage can amplify both gains and losses, so it's generally advisable to use moderate leverage or even avoid it altogether, depending on your risk tolerance.\n\nAs for entry criteria, a popular approach for long-term trading on the S&P 500 index is to use a combination of trend-following indicators, such as moving averages, and momentum oscillators, such as the Relative Strength Index (RSI) or the Moving Average Convergence Divergence (MACD). For example, you might consider entering long positions when the index price is above a long-term moving average (e.g., 200-day MA) and the RSI indicates oversold conditions.\n\nDoes this sound like a suitable approach for your trading strategy, or would you like to explore other options?",
  },
  {
    isUser: true,
    text: "1% seems fine to me. I would rather have no leverage either. I want to go with the MACD strategy for entry",
  },
  {
    isUser: false,
    text: "Got it, Michael. We'll aim for a conservative risk management approach with 1% risk per trade and no leverage.\n\nUsing the MACD (Moving Average Convergence Divergence) strategy for entry is a popular choice for long-term trading. Typically, traders look for bullish MACD crossovers as buy signals. A bullish crossover occurs when the MACD line (the 12-day EMA minus the 26-day EMA) crosses above the signal line (usually a 9-day EMA).\n\rNow, let's move on to the exit strategy. Would you prefer to use a trailing stop loss, a fixed percentage profit target, or perhaps another method for exiting your trades? Additionally, what specific criteria or indicators would you like to use to trigger your exit from a trade?",
  },
  {
    isUser: true,
    text: "What is a trailing stop loss? Do you suggest a specific exit criteria?",
  },
  {
    isUser: false,
    text: "A trailing stop loss is a dynamic type of stop loss order that follows the price movement of an asset. It's designed to protect profits by adjusting automatically as the price moves in the trader's favor. Here's how it works:\n\n- When you enter a long position (buy), you set a trailing stop loss below the current market price.\n\n- As the price moves higher, the trailing stop loss also moves up, maintaining a set distance below the highest price reached.\n\n- If the price starts to reverse and moves against your position, the trailing stop loss remains in place until it's triggered. Once triggered, it executes a market sell order to close your position and lock in your profits.\n\nAs for exit criteria, here are a few options to consider:\n\n1- Trailing Stop Loss: As discussed above, using a trailing stop loss can be an effective exit strategy to protect your profits while allowing room for the trade to develop.\n\n2- Fixed Percentage Profit Target: You could set a specific percentage profit target that aligns with your risk-reward ratio. For example, you might aim to exit the trade when you've achieved a 10% or 20% profit.\n\n3- Technical Indicators: You might also consider using technical indicators, such as the MACD or the RSI, to identify overbought or oversold conditions as potential exit signals.\n\n4- upport and Resistance Levels: Another approach is to identify key support and resistance levels on the price chart and use them as exit points. For example, you might exit the trade if the price approaches a major resistance level or breaches a significant support level.\n\nUltimately, the choice of exit criteria depends on your trading style, risk tolerance, and objectives. Would you like to explore any of these options further, or do you have any other preferences for your exit strategy?",
  },
  {
    isUser: true,
    text: "Let's go with the RSI technical indicator.",
  },
  {
    isUser: false,
    text: "Certainly, Michael. Using the Relative Strength Index (RSI) as an exit criterion is a common and effective approach. The RSI is a momentum oscillator that measures the speed and change of price movements. It ranges from 0 to 100 and typically indicates overbought conditions when it's above 70 and oversold conditions when it's below 30.\n\n For your long-term trading strategy, you might consider using the RSI to identify overbought conditions as potential exit signals. When the RSI rises above 70, it suggests that the asset may be overvalued and due for a correction. This could be a signal to consider exiting your long position and taking profits.\n\nOf course, it's important to use the RSI in conjunction with other technical indicators and analysis to confirm your exit decisions. Additionally, you may want to consider using a trailing stop loss to protect your profits and allow for potential further upside if the trend continues.\n\nWith these parameters in mind, we can proceed to finalize your trading strategy. Would you like to review any other aspects or make any adjustments before we proceed?",
  },
  {
    isUser: true,
    text: "No, it seems good.",
  },
  {
    isUser: false,
    text: "That's great! You can find the strategy you designed on the right side of your screen. Give it a try in the Time Machine!",
  },
];
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  newStrat: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [newStrat, setNewStrat] = useState(true);
  const [newTimeMachine, setNewTimeMachine] = useState(true);
  const [showNewTradeDetail, setShowNewTradeDetail] = useState(false);
  const [currentTimeMachine, setCurrentTimeMachine] = useState(0);
  const [currentStrat, setCurrentStrat] = useState(0);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, newStrat, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setNewStrat, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings, showNewTradeDetail, setShowNewTradeDetail, newTimeMachine, setNewTimeMachine, currentTimeMachine, setCurrentTimeMachine, currentStrat, setCurrentStrat }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import { FiPlusCircle } from "react-icons/fi";

import { Header } from '../components';
import chart_dark from '../data/chart_dark.png';
import chart_light from '../data/chart_light.png';
import { journalTradeList } from '../data/dummy';
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { BsPlusCircleDotted } from 'react-icons/bs';

const Journal = () => {
  const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();

  const [showNewJournalTrade, setshowNewJournalTrade] = React.useState(false)
  const onShowNewJournalTrade = () => setshowNewJournalTrade(!showNewJournalTrade)
  return (


    <div className="mr-2 ml-2 mt-8 p-2  bg-gray-100 dark:bg-gray-950 rounded-3xl">

      <div className=' pl-2 h-fit '>
        <Header category="" title="Trade Journal" />
      </div>
      {/* Background */}
      <div className=" flex h-fit min-h-screen rounded-xl w-full">


        {/* Page Containter */}
        <div className='flex flex-col h-fit w-full'>

          {/* Chart and Trade List Containter */}
          <div className='flex flex-row w-full h-fit'>


            {/* Main Chart */}
            <div className='flex w-2/3 ml-2'>
              <img src={currentMode === 'Dark' ? chart_dark : chart_light} className='rounded-lg border-2 border-gray-950 dark:border-gray-50' >
              </img>
            </div>
            {/* End of Main Chart */}


            {/* Trade List */}
            <div className='flex flex-col w-1/3 ml-2 mr-2 font-bold text-lg'>

              {journalTradeList.map((item) => {
                return (
                  <div key={item.id} className='flex flex-row border-2 items-center border-gray-600 dark:border-gray-400 justify-evenly rounded-xl bg-gray-200 dark:bg-gray-800 w-full h-20 mb-2'>
                    <div className='flex dark:text-gray-100 w-1/3 justify-center'>
                      <h2>{item.date}</h2>
                    </div>

                    <div className='flex justify-center w-5/12'>
                      {item.side === 'buy' ? (
                        <div className='flex flex-row justify-evenly items-center w-5/12 text-market-green'>
                          <BiSolidUpArrow />
                          <p className='font-semibold text-lg'>Buy </p>
                        </div>

                      ) : (
                        <div className='flex flex-row justify-evenly items-center w-5/12 text-market-red'>
                          <BiSolidDownArrow />
                          <p className='font-semibold text-lg'>Sell </p>
                        </div>
                      )}
                    </div>
                    <div className='flex justify-start w-3/12'>
                      <h2 className='dark:text-gray-100'>PnL=</h2>
                      <h2 className={`${item.wnl === 'l' ? 'text-market-green' : 'text-market-red'} mx-1`}>{item.pnl}</h2>
                    </div>
                  </div>
                )
              })}


              {/* Add Trade */}
              <button className='flex flex-row justify-center items-center text-3xl mt-8 text-gray-700 dark:text-gray-300' onClick={() => onShowNewJournalTrade()}>
                <div className='flex w-full border-1 border-gray-700 dark:border-gray-300 border-dashed ml-4'></div>
                <div className='text-4xl'>
                  <BsPlusCircleDotted />
                </div>
                <div className='flex w-full border-1 border-gray-700 dark:border-gray-300 border-dashed mr-4'></div>
              </button>
              {/* End of Add Trade */}


            </div>
            {/* End of Trade List */}


          </div>
          {/* End of Chart and Trade List Containter */}

          {/* Individual Trade Title */}
          <div className=' pl-2 h-fit mt-10 '>
            <Header category="" title="Trade Journal" />
          </div>

          {/* Individual Trade Containter */}
          <div className='flex w-full h-1000 bg-gray-600'>
            {/* Placeholder */}
          </div>
          {/* Individual Trade Containter */}


        </div>
        {/* End of Page Containter */}



      </div>
      {/* End of background */}


    </div >



  );
};


export default Journal;

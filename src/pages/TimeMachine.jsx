import React from 'react';
import { FaListCheck } from "react-icons/fa6";
import { RxEnter, RxExit } from "react-icons/rx";
import { useStateContext } from '../contexts/ContextProvider';
import { FiPlusCircle } from "react-icons/fi";
import product8 from '../data/product8.jpg';

import { Header } from '../components';
import NewTimeMachine from '../components/NewTimeMachine';



const TimeMachine = () => {
  const { currentColor, currentMode, newTimeMachine, setNewTimeMachine } = useStateContext();

  const handleNewTimeMachine = () => setNewTimeMachine(!newTimeMachine);

  return (


    <div className="mr-2 ml-2 mt-8 p-2  bg-gray-100 dark:bg-gray-950 rounded-3xl">

      {!newTimeMachine && (<NewTimeMachine />)}
      <div className=' pl-2 h-fit '>
        <Header category="" title="Time Machine Workshop" />
      </div>
      {/* Background */}
      <div className=" h-fit min-h-screen rounded-xl">


        {/* TM Containter */}
        <div className='flex flex-wrap justify-evenly h-fit'>

          {/* TM Box */}

          <a href='#' className="flex bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit flex-col
                        rounded-3xl w-760 p-8 pt-9 mt-1  bg-no-repeat bg-cover bg-center hover:drop-shadow-xl">
            <div className="flex flex-row justify-start items-center" >


              {/* TM Avatar */}
              <div className='rounded-full w-20 items-center justify-center h-20 m-2'>
                <img
                  className="rounded-full "
                  src={product8}
                  alt="user-profile"
                />
              </div>


              {/* TM Title */}
              <div className='flex rounded-3xl bg-gray-200 dark:bg-gray-900 h-20 
                            justify-center align-middle items-center p-2 ml-1 w-auto'>
                <div className='text-3xl dark:text-white'>GFC: Jan 2007-Dec 2009</div>
              </div>

            </div>

            {/* TM Summary */}
            <div className='mt-8 w-auto '>

              <p className="text-base text-gray-400 dark:text-gray-300">
                This will be the description of the time machine written by the user. The user will detail why they created this time machine, if it is representing a specific time in the financial history, and the purposes of this time machine, i.e. testing a specific strategy.
              </p>
            </div>

            {/* TM Details */}

            <div className='mt-8 w-auto '>

              <div className='flex flex-row justify-evenly rounded-lg border-spacing-2 p-2  '>


                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: 'rgb(254, 201, 15)' }}>
                      <FaListCheck />
                      {/* <p className=''>Setup</p> */}
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Setup</p>
                    <p className='text-gray-700 dark:text-gray-300'> BTCUSDT</p>
                    <p className='text-gray-700 dark:text-gray-300'> 1m-15m</p>
                  </div>
                </div>




                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: '#FB9678' }}>
                      <RxEnter />
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Entry</p>
                    <p className='text-gray-700 dark:text-gray-300'> Candlestick Pattern</p>
                    <p className='text-gray-700 dark:text-gray-300'> OBV</p>
                  </div>
                </div>




                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: '#00C292' }}>
                      <RxExit />
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Exit</p>
                    <p className='text-gray-700 dark:text-gray-300'> Fix %</p>
                    <p className='text-gray-700 dark:text-gray-300'> RSI-10</p>
                  </div>
                </div>


              </div>
            </div>

          </a>
          {/* End of TM Box */}


          {/* TM Box #2*/}

          <a href='#' className="bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit flex-col
                        rounded-3xl w-760 p-8 pt-9 mt-3  bg-no-repeat bg-cover bg-center min-w-0 hover:drop-shadow-xl">
            <div className="flex flex-row justify-start items-center" >


              {/* TM Avatar */}
              <div className='rounded-full w-20 items-center justify-center h-20 m-2'>
                <img
                  className="rounded-full "
                  src={product8}
                  alt="user-profile"
                />
              </div>


              {/* TM Title */}
              <div className='flex rounded-3xl bg-gray-200 dark:bg-gray-900 h-20 
                            justify-center align-middle items-center p-2 ml-1 w-auto'>
                <div className='text-3xl dark:text-white'>Crypto Cycle: Jan 2018-Dec 2022</div>
              </div>

            </div>

            {/* TM Summary */}
            <div className='mt-8 w-auto '>

              <p className="mt-8 text-base text-gray-400">
              This will be the description of the time machine written by the user. The user will detail why they created this time machine, if it is representing a specific time in the financial history, and the purposes of this time machine, i.e. testing a specific strategy.
              </p>
            </div>

            {/* TM Details */}

            <div className='mt-8 w-auto '>

              <div className='flex flex-row justify-evenly rounded-lg border-spacing-2 p-2  '>


                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: 'rgb(254, 201, 15)' }}>
                      <FaListCheck />
                      {/* <p className=''>Setup</p> */}
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Setup</p>
                    <p className='text-gray-700 dark:text-gray-300'> EURUSD</p>
                    <p className='text-gray-700 dark:text-gray-300'> 4H-1D</p>
                  </div>
                </div>




                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: '#FB9678' }}>
                      <RxEnter />
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Entry</p>
                    <p className='text-gray-700 dark:text-gray-300'> RSI-14</p>
                    <p className='text-gray-700 dark:text-gray-300'> MACD</p>
                  </div>
                </div>




                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: '#00C292' }}>
                      <RxExit />
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Exit</p>
                    <p className='text-gray-700 dark:text-gray-300'> Fix %</p>
                    <p className='text-gray-700 dark:text-gray-300'> Doji</p>
                  </div>
                </div>


              </div>
            </div>

          </a>
          {/* End of TM Box #2*/}



          {/* TM Box #3*/}

          <a href='#' className="bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit flex-col
                        rounded-3xl w-760 p-8 pt-9 mt-3  bg-no-repeat bg-cover bg-center min-w-0 hover:drop-shadow-xl">
            <div className="flex flex-row justify-start items-center" >


              {/* TM Avatar */}
              <div className='rounded-full w-20 items-center justify-center h-20 m-2'>
                <img
                  className="rounded-full "
                  src={product8}
                  alt="user-profile"
                />
              </div>


              {/* TM Title */}
              <div className='flex rounded-3xl bg-gray-200 dark:bg-gray-900 h-20 
                            justify-center align-middle items-center p-2 ml-1 w-auto'>
                <div className='text-3xl dark:text-white'>Dot.com Bubble: Jan 1995-Oct 2002</div>
              </div>

            </div>

            {/* TM Summary */}
            <div className='mt-8 w-auto '>

              <p className="mt-8 text-base text-gray-400">
              This will be the description of the time machine written by the user. The user will detail why they created this time machine, if it is representing a specific time in the financial history, and the purposes of this time machine, i.e. testing a specific strategy.
              </p>
            </div>

            {/* TM Details */}

            <div className='mt-8 w-auto '>

              <div className='flex flex-row justify-evenly rounded-lg border-spacing-2 p-2  '>


                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: 'rgb(254, 201, 15)' }}>
                      <FaListCheck />
                      {/* <p className=''>Setup</p> */}
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Setup</p>
                    <p className='text-gray-700 dark:text-gray-300'> S&P500</p>
                    <p className='text-gray-700 dark:text-gray-300'> 1D</p>
                  </div>
                </div>




                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: '#FB9678' }}>
                      <RxEnter />
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Entry</p>
                    <p className='text-gray-700 dark:text-gray-300'> Golden Cross</p>
                  </div>
                </div>




                <div className='flex flex-col w-1/3'>
                  <div className='flex gap-4 items-center self-center justify-center'>
                    <button className='text-2xl rounded-lg p-4 hover:drop-shadow-xl' type='button'
                      style={{ color: 'white', backgroundColor: '#00C292' }}>
                      <RxExit />
                    </button>
                  </div>

                  <div className='flex flex-col items-center self-center justify-center mt-4'>

                    <p className='text-lg font-semibold dark:text-gray-200'> Exit</p>
                    <p className='text-gray-700 dark:text-gray-300'> Death Cross</p>
                  </div>
                </div>


              </div>
            </div>

          </a>
          {/* End of TM Box #3*/}




          <button className='flex w-760 justify-center items-center gap-4 hover:drop-shadow-2xl min-h-400' onClick={() => handleNewTimeMachine
            ()}>
            <div className='text-9xl rounded-full p-4 text-gray-50 bg-gray-400 dark:text-gray-900 dark:bg-gray-500'              >
              <FiPlusCircle />
            </div>
          </button>






        </div>
        {/* End of Startegies Containter */}



      </div>
      {/* End of background */}


    </div >



  );
};


export default TimeMachine;

import React from 'react';
import { FaListCheck } from "react-icons/fa6";
import { RxEnter, RxExit } from "react-icons/rx";
import { useStateContext } from '../contexts/ContextProvider';
import { FiPlusCircle } from "react-icons/fi";
import product8 from '../data/product8.jpg';

import { Header } from '../components';
import NewStrat from '../components/NewStrat';



const StrategyDesign = () => {
  const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();

  const handleNewStrat = () => setNewStrat(!newStrat);

  return (


    <div className="mr-2 ml-2 mt-8 p-2  bg-gray-100 dark:bg-gray-950 rounded-3xl">

      {!newStrat && (<NewStrat />)}
      <div className=' pl-2 h-fit '>
        <Header category="" title="Strategy Design Center" />
      </div>
      {/* Background */}
      <div className=" h-fit min-h-screen rounded-xl">


        {/* Startegies Containter */}
        <div className='flex flex-wrap justify-evenly h-fit'>

          {/* Strategy Box */}

          <a href='#' className="flex bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit flex-col
                        rounded-3xl w-760 p-8 pt-9 mt-1  bg-no-repeat bg-cover bg-center hover:drop-shadow-xl">
            <div className="flex flex-row justify-start items-center" >


              {/* Strategy Avatar */}
              <div className='rounded-full w-20 items-center justify-center h-20 m-2'>
                <img
                  className="rounded-full "
                  src={product8}
                  alt="user-profile"
                />
              </div>


              {/* Strategy Title */}
              <div className='flex rounded-3xl bg-gray-200 dark:bg-gray-900 h-20 
                            justify-center align-middle items-center p-2 ml-1 w-auto'>
                <div className='text-3xl dark:text-white'>Awesome Scalp Strategy</div>
              </div>

            </div>

            {/* Strategy Summary */}
            <div className='mt-8 w-auto '>

              <p className="text-base text-gray-400 dark:text-gray-300">
                This will be some description of the strategy. It is written by the user and may
                include information on the strategy usage, origin and even rate of subjective success
                determined by the user.
              </p>
            </div>

            {/* Strategy Details */}

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
          {/* End of Strategy Box */}


          {/* Strategy Box #2*/}

          <a href='#' className="bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit flex-col
                        rounded-3xl w-760 p-8 pt-9 mt-3  bg-no-repeat bg-cover bg-center min-w-0 hover:drop-shadow-xl">
            <div className="flex flex-row justify-start items-center" >


              {/* Strategy Avatar */}
              <div className='rounded-full w-20 items-center justify-center h-20 m-2'>
                <img
                  className="rounded-full "
                  src={product8}
                  alt="user-profile"
                />
              </div>


              {/* Strategy Title */}
              <div className='flex rounded-3xl bg-gray-200 dark:bg-gray-900 h-20 
                            justify-center align-middle items-center p-2 ml-1 w-auto'>
                <div className='text-3xl dark:text-white'>Amazing Swing Strategy</div>
              </div>

            </div>

            {/* Strategy Summary */}
            <div className='mt-8 w-auto '>

              <p className="mt-8 text-base text-gray-400">
                This will be some description of the strategy. It is written by the user and may
                include information on the strategy usage, origin and even rate of subjective success
                determined by the user.
              </p>
            </div>

            {/* Strategy Details */}

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
          {/* End of Strategy Box #2*/}



          {/* Strategy Box #3*/}

          <a href='#' className="bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit flex-col
                        rounded-3xl w-760 p-8 pt-9 mt-3  bg-no-repeat bg-cover bg-center min-w-0 hover:drop-shadow-xl">
            <div className="flex flex-row justify-start items-center" >


              {/* Strategy Avatar */}
              <div className='rounded-full w-20 items-center justify-center h-20 m-2'>
                <img
                  className="rounded-full "
                  src={product8}
                  alt="user-profile"
                />
              </div>


              {/* Strategy Title */}
              <div className='flex rounded-3xl bg-gray-200 dark:bg-gray-900 h-20 
                            justify-center align-middle items-center p-2 ml-1 w-auto'>
                <div className='text-3xl dark:text-white'>Simple Strategy</div>
              </div>

            </div>

            {/* Strategy Summary */}
            <div className='mt-8 w-auto '>

              <p className="mt-8 text-base text-gray-400">
                This will be some description of the strategy. It is written by the user and may
                include information on the strategy usage, origin and even rate of subjective success
                determined by the user.
              </p>
            </div>

            {/* Strategy Details */}

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
          {/* End of Strategy Box #3*/}




          <button className='flex w-760 justify-center items-center gap-4 hover:drop-shadow-2xl min-h-400' onClick={() => handleNewStrat
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


export default StrategyDesign;

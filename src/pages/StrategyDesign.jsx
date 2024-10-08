import React, { useState } from 'react';
import { FaListCheck } from "react-icons/fa6";
import { RxEnter, RxExit } from "react-icons/rx";
import { useStateContext } from '../contexts/ContextProvider';
import { FiPlusCircle } from "react-icons/fi";
import product8 from '../data/product8.jpg';

import { Header } from '../components';
import NewStrat from '../components/NewStrat';

import { strategies } from '../data/dummy';



const StrategyDesign = () => {
  const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();

  const [ selectedStrat, setSelectedStrat ] = useState(1);
  const [ editableStrat, setEditableStrat ] = useState(false);

  const handleNewStrat = () => {
    setEditableStrat(true);
    setNewStrat(!newStrat);
  };
  const setSelectedStrat_ = (ss) => {
    setSelectedStrat (ss);
    setEditableStrat(false);
    setNewStrat(!newStrat);
  }
  return (


    <div className="mr-2 ml-2 mt-8 p-2  bg-gray-100 dark:bg-gray-950 rounded-3xl">

      {!newStrat && (<NewStrat selectedStrat={selectedStrat} editable_={editableStrat} />)}
      <div className=' pl-2 h-fit '>
        <Header category="" title="Strategy Design Center" />
      </div>
      {/* Background */}
      <div className=" h-fit min-h-screen rounded-xl">

        <div className='flex flex-wrap justify-around h-fit items-center'>


          {strategies.map((item, index) => {
            if (item.Id !== '0')
              return (
                <div>
                  <a href='#' className="flex bg-white dark:text-gray-600 dark:bg-secondary-dark-bg max-w-800 h-fit p-8 pt-9 my-2 flex-col rounded-3xl  bg-no-repeat bg-cover bg-center hover:drop-shadow-xl" onClick={() => setSelectedStrat_(index)}>
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
                        <div className='text-3xl dark:text-white'>{item.name}</div>
                      </div>

                    </div>

                    {/* Strategy Summary */}
                    <div className='mt-8 w-auto '>

                      <p className="text-base text-gray-400 dark:text-gray-300">
                        {item.description}
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
                            <p className='text-gray-700 dark:text-gray-300'> {item.setup_target_market}</p>
                            <p className='text-gray-700 dark:text-gray-300'> {item.setup_time_frame}</p>
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
                            <p className='text-gray-700 dark:text-gray-300'> {item.entry_1}</p>
                            <p className='text-gray-700 dark:text-gray-300'> {item.entry_2}</p>
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
                            <p className='text-gray-700 dark:text-gray-300'> {item.exit_1}</p>
                            <p className='text-gray-700 dark:text-gray-300'> {item.exit_2}</p>
                          </div>
                        </div>


                      </div>
                    </div>

                  </a>
                </div>

              )

          })}


          <button className='flex w-760 justify-center items-center gap-4 hover:drop-shadow-2xl min-h-400' onClick={() => handleNewStrat
            ()}>
            <div className='text-9xl rounded-full p-4 text-gray-50 bg-gray-400 dark:text-gray-900 dark:bg-gray-500'>
              <FiPlusCircle />
            </div>
          </button>
        </div >
      </div >
      {/* End of background */}


    </div >



  );
};


export default StrategyDesign;

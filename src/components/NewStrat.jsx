import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import product8 from '../data/product8.jpg';
import StrategyModules from './StrategyDetails/StrategyModules'
import { strategies } from '../data/dummy';
import AiStrategyModules from './StrategyDetails/AiStrategyModules';

const NewStrat = ({ editable_ = false, selectedStrat = 1 }) => {
    const { currentColor, newStrat, setNewStrat } = useStateContext();

    const handleNewStrat = () => setNewStrat(!newStrat);


    const [useAi, setUseAi] = useState(false);
    const toggleUseAi = () => setUseAi(!useAi);

    return (
        <div className="flex bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit max-h-pop flex-col  rounded-3xl w-5/6 p-8 pt-9 mt-3  bg-no-repeat bg-cover bg-center hover:drop-shadow-xl border-8 border-gray-400 dark:border-gray-600" style={{ zIndex: '2000', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className='flex flex-row justify-normal h-fit'>
                < div className="flex flex-row justify-start items-center h-fit w-full" >

                    {/* Strategy Avatar */}
                    < div className='rounded-full w-20 items-start justify-center h-20 m-2' >
                        <img
                            className="rounded-full "
                            src={product8}
                            alt="user-profile"
                        />
                    </div >


                    {/* Strategy Title */}
                    <div className='flex mb-1 items-center self-center w-full'>
                        {editable_ ?
                            <input className='flex text-4xl text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Strategy Name'></input>

                            :
                            <label className='flex w-full text-4xl text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg pl-4 '>
                                {strategies[selectedStrat].name}
                            </label>
                        }
                    </div>


                </div >

                <div className='flex justify-self-end w-1/5 justify-end self-start '>
                    {/* AI button */}
                    {editable_ ?
                        <button
                            type="button"
                            onClick={() => { toggleUseAi() }}
                            style={{
                                '--color-1': 'deepskyblue',
                                '--color-2': 'navy',
                                background: `
                          linear-gradient(
                            170deg,
                            var(--color-1),
                            var(--color-2) 80%
                          )
                        `,
                                color: `white`,
                                borderRadius: "10px"
                            }}
                            className={`p-3 mx-5 w-full hover:drop-shadow-xl hover:bg-slate-700}`}
                        >
                            {useAi ? "Design Manually" : "Design with AI"}
                        </button>
                        : <></>}

                    {/* close button */}
                    <button className='text-4xl hover:drop-shadow-lg' type='button' onClick={() => handleNewStrat()}>
                        <MdOutlineCancel />
                    </button>
                </div>
            </div>

            {/* Strategy Summary */}
            < div className='mt-8 w-auto ml-5 mr-5' >
                {editable_ ?
                    <input className='flex w-full text-lg text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Description'></input>

                    :
                    <label className='flex w-full text-lg text-gray-600 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg'>
                        {strategies[selectedStrat].description}
                    </label>
                }

            </div >

            {/* Strategy Details */}
            {useAi ?
                <div>
                    <AiStrategyModules />
                </div>
                :
                <div>
                    <StrategyModules
                        editable_={editable_}
                        selectedStrat_={selectedStrat}
                    />
                </div>
            }

        </div >



    );
};

export default NewStrat;

import React from 'react';

import { useStateContext } from '../../contexts/ContextProvider';

import StratSetup from './StratSetup';
import StratEntry from './StratEntry';
import StratExit from './StratExit';

import { strategyAiConverstation } from '../../data/dummy';
import { BsSendFill } from "react-icons/bs";




const AiStrategyModules = ({ editable_ = true, selectedStrat_ = 2 }) => {

    const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();
    const [showCustomSetup, setShowCustomSetup] = React.useState(false)
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomSetup = () => setShowCustomSetup(!showCustomSetup)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const selectedStrat = 5;


    let dummyList = [];
    for (const statement of strategyAiConverstation) {

        const newText = statement.text.split('\n').map(str => <p>{str} <br /> </p>);
        dummyList.push(
            <div className={`flex flex-col max-w-chat my-2 p-4 rounded-xl border-4 text-lg ${statement.isUser ? 'bg-slate-300 place-self-end' : 'bg-green-50'}`}>
                {newText}
            </div>
        );
    }


    return (
        < div className='flex mt-1 w-full h-full ' >
            <div className='flex flex-col w-2/3 '>
                <div className='flex flex-col overflow-y-scroll max-h-popScroll object-cover mt-2 pb-10 px-5 border-x-4 border-t-4 rounded-xl'>

                    {dummyList}


                </div>
                <div className='flex flex-row mt-0'>
                    <input className='flex w-11/12 text-xl text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-2 min-h-50 p-2 rounded-xl' type='text' placeholder='Type your message here...'></input>


                    <button className={`flex text-3xl justify-center items-center w-1/12 bg-gray-100 dark:bg-gray-200 rounded-xl ml-2`}>
                        <BsSendFill
                            style={{ color: currentColor }} />
                    </button>
                </div>
            </div>

            <div className='flex w-1/3 flex-col justify-evenly border-spacing-2 p-2 dark:text-gray-50 overflow-x-hidden overflow-y-scroll max-h-fit align-top h-full'>

                <StratSetup
                    editable_={false}
                    selectedStrat_={selectedStrat}
                />


                <StratEntry
                    editable_={false}
                    selectedStrat_={selectedStrat}
                />


                <StratExit
                    editable_={false}
                    selectedStrat_={selectedStrat}
                />



            </div>
        </div >
    );
};

export default AiStrategyModules;
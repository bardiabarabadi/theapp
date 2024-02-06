import React from 'react';

import { exitTypes } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { RxEnter, RxExit } from "react-icons/rx";

import { BsPlusCircleDotted } from "react-icons/bs";

import { strategies } from '../../data/dummy';
import StratSetup from './StratSetup';
import StratEntry from './StratEntry';
import StratExit from './StratExit';




const AiStrategyModules = ({ editable_ = true, selectedStrat_ = 2 }) => {

    const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();
    const [showCustomSetup, setShowCustomSetup] = React.useState(false)
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomSetup = () => setShowCustomSetup(!showCustomSetup)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const editable = editable_;
    const selectedStrat = selectedStrat_;


    let dummyList = [];
    for (let index = 0; index < 100; index++) {
       dummyList.push(<div>Hello {index}</div>);
        
    }


    return (
        < div className='flex mt-3 w-full h-full max-h-' >

            <div className='overflow-y-scroll max-h-popScroll object-cover bg-green-300 w-2/3 mt-10 pb-10'>

            {dummyList}


            </div>

            <div className='flex w-1/3 flex-col justify-evenly border-spacing-2 p-2 dark:text-gray-50 overflow-x-hidden overflow-y-scroll max-h-fit'>

                <StratSetup
                    editable_={editable_}
                    selectedStrat_={selectedStrat}
                />


                <StratEntry
                    editable_={editable_}
                    selectedStrat_={selectedStrat}
                />


                <StratExit
                    editable_={editable_}
                    selectedStrat_={selectedStrat}
                />



            </div>
        </div >
    );
};

export default AiStrategyModules;
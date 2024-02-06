import React from 'react';

import { exitTypes } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { RxEnter, RxExit } from "react-icons/rx";

import { BsPlusCircleDotted } from "react-icons/bs";

import { strategies } from '../../data/dummy';
import StratSetup from './StratSetup';
import StratEntry from './StratEntry';
import StratExit from './StratExit';



const StrategyModules = ({ editable_ = true, selectedStrat_ = 2 }) => {

    const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();
    const [showCustomSetup, setShowCustomSetup] = React.useState(false)
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomSetup = () => setShowCustomSetup(!showCustomSetup)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const editable = editable_;
    const selectedStrat = selectedStrat_;

    return (
        < div className='mt-3 w-auto h-fit' >
            <div className='flex flex-row justify-evenly border-spacing-2 p-2 dark:text-gray-50 '>

                <div className='flex w-1/3'>
                    <StratSetup
                        editable_={editable_}
                        selectedStrat_={selectedStrat}
                    />
                </div>
                <div className='flex w-1/3'>
                    <StratEntry
                        editable_={editable_}
                        selectedStrat_={selectedStrat}
                    />

                </div>
                <div className='flex w-1/3'>
                    <StratExit
                        editable_={editable_}
                        selectedStrat_={selectedStrat}
                    />

                </div>


            </div>
        </div >
    );
};

export default StrategyModules;
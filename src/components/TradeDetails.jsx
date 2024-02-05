import React, { useState } from "react";

import StrategyModules from '../components/StrategyModules';
import StarRating from '../components/StarRating.jsx';
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';

import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from 'react-icons/md';
import { strategies } from '../data/dummy';

import trade_chart_dark from '../data/trade_chart_dark.png';
import trade_chart_light from '../data/trade_chart_light.png';

import { FiPlusCircle } from "react-icons/fi";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';





const TradeDetails = () => {

    const { currentColor, currentMode, newStrat, setNewStrat,showNewTradeDetail, setShowNewTradeDetail, currentStrat, setCurrentStrat } = useStateContext();



    return (
        <div>
            <div className='flex flex-row w-full h-fit rounded-lg dark:bg-gray-900  border-gray-500 dark:border-gray-50 border-1 p-1'>
                {/* Trade Chart, notes, rating */}
                <div className='flex flex-col w-1/3 m-2  bg-gray-50 dark:bg-gray-950 h-200 rounded-lg p-2'>

                    {/* Trade Chart */}
                    <div className='flex w-full'>
                        <img src={currentMode === 'Dark' ? trade_chart_dark : trade_chart_light} className='rounded-lg border-0 border-gray-950 dark:border-gray-50' >
                        </img>
                    </div>

                    {/* Trade Notes */}
                    <div className='flex flex-col w-full mt-5 h-full'>
                        <label className='dark:text-gray-50 font-semibold text-2xl mb-1'>Notes</label>
                        <textarea rows={5} className='w-full dark:bg-gray-950 rounded-lg p-2 h-full min-h-100 resize-none border-2 border-gray-300 dark:border-gray-700' placeholder='Add notes regarding this trade' >
                        </textarea>
                    </div>
                </div>
                {/* End of Trade Chart, notes, rating */}

                {/* Trade Details */}
                <div className='flex flex-col w-2/3 m-2 bg-gray-50 dark:bg-gray-950 h-200 rounded-lg p-2'>
                    {/* Trade Detail topBar */}
                    <div className='flex flex-row w-full justify-between items-center border-b-2 pb-5'>
                        {/* Select Strategy Text */}
                        <div>
                            <label className='dark:text-gray-50 font-semibold text-2xl mb-1'>Select Strategy: </label>
                        </div>

                        {/* Strategy Dropdown */}
                        <div className='flex flex-grow mx-5 mt-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-50'>

                            <select className="w-full text-lg border-1 dark:bg-gray-900 border-gray-300 px-2 py-1 rounded-md" defaultValue={strategies[currentStrat].Id} onChange={e => setCurrentStrat(e.target.selectedIndex)}>

                                {strategies.map((item) => {
                                    return (

                                        <option value={item.Id}> {item.name}</option>
                                    )
                                })}

                            </select>
                        </div>

                        {/* Icons */}
                        <div className='flex flex-row text-3xl dark:text-gray-50 '>
                            <FaRegSave className='mr-1' />
                            <button onClick={() => setShowNewTradeDetail(!showNewTradeDetail)}><MdOutlineCancel className='mx-2' /></button>
                        </div>
                    </div>


                    {/* Trade Details Sections */}
                    <div className="mt-5">
                        {currentStrat === 0 ?
                            <div className=" border-b-2 pb-5">

                                <label className="dark:text-gray-50 font-semibold text-2xl">Trade Outcome:</label>
                                <StrategyModules
                                    editable_={true}
                                />
                            </div>
                            :
                            <div>
                                <div className=" border-b-2 pb-5">
                                    <label className="dark:text-gray-50 font-semibold text-2xl">Strategy Criteria:</label>
                                    <StrategyModules
                                        editable_={false}
                                        selectedStrat_={currentStrat} 
                                    />
                                </div>
                                <div className=" border-b-2 pb-5 mt-4">
                                    <label className="dark:text-gray-50 font-semibold text-2xl">Trade Outcome:</label>
                                    <StrategyModules
                                        editable_={true}
                                    />
                                </div>
                            </div>
                        }
                    </div>

                    {/* Trade Rating */}
                    <div className='flex mt-5'>
                        <div>
                            <label className='dark:text-gray-50 font-semibold text-2xl mb-1'>Rate this trade: </label>
                        </div>
                        <StarRating />
                    </div>
                    {/* Trade Lessons Learnt */}
                    <div>
                        <textarea rows={5} className='w-full dark:bg-gray-950 rounded-lg mt-2 p-2 h-fit min-h-100 resize-none border-2 border-gray-300 dark:border-gray-700' placeholder={currentStrat === "0" ?'What lessons did you learn?':'What lessons did you learn? How did your trade differ from the strategy?'} >
                        </textarea>
                    </div>
                </div>
                {/* End of Trade Details */}

            </div>
        </div>
    )
};


export default TradeDetails;
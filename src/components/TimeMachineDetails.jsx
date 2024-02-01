import React from 'react';
import { useState } from 'react';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { exitTypes, targetMarkets, timeFrames, timeMachines } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs'

import { FaListCheck } from "react-icons/fa6";
import { RxEnter, RxExit } from "react-icons/rx";

import { BsClockHistory, BsPlusCircleDotted } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";

import { strategies } from '../data/dummy';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const TargetMarketDropDown = ({ currentMode }) => (
    <div className="w-30 border-1 ml-5 border-color px-2 pt-1 rounded-md">
        <DropDownListComponent id="tm" fields={{ text: 'Time', value: 'Id' }} style={{ color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={targetMarkets} popupHeight="220px" popupWidth="180px" />
    </div>
);

const TimeFramesDropDown = ({ currentMode }) => (
    <div className="border-1 ml-5 border-color px-2 pt-1 rounded-md">
        <DropDownListComponent id="tm" fields={{ text: 'Time', value: 'Id' }} style={{ color: (currentMode === 'Dark') && 'white' }} value="3" dataSource={timeFrames} popupHeight="220px" popupWidth="180px" />
    </div>
);



const TimeMachineDetails = ({ editable_ = true, selectedTimeMachine_ = 2 }) => {

    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();
    const [showCustomSetup, setShowCustomSetup] = React.useState(false)
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomSetup = () => setShowCustomSetup(!showCustomSetup)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const editable = editable_;
    const selectedTimeMachine = selectedTimeMachine_;

    return (
        < div className='mt-3 w-auto h-fit' >
            <div className='flex flex-row justify-evenly border-spacing-2 p-2 dark:text-gray-50 '>


                {/* Time */}
                <div className='flex flex-col w-1/2 border-1 rounded-xl py-4 mx-2'>

                    {/* Time Icon */}
                    <div className='flex gap-4 items-center self-center justify-center'>
                        <div className='text-2xl rounded-lg p-4 hover:drop-shadow-md'
                            style={{ color: 'white', backgroundColor: '#FB9678' }}>
                            <BsClockHistory />
                        </div>
                    </div>

                    {/* Time Text */}
                    <p className='flex self-center text-xl font-semibold mt-4 dark:text-gray-50'> Time</p>

                    {/* Time - Start */}
                    <div className='flex flex-col items-center self-center justify-stretch mt-4 w-5/6 '>
                        <div className='flex flex-row justify-between mt-2 items-center w-full'>
                            <p className='flex text-gray-700 w-1/2  dark:text-gray-50'> Start Time: </p>

                            {editable ?
                                <div className=''>
                                    <DatePicker
                                        showTimeSelect
                                        selected={startDate}
                                        onChange={(startDate) => setStartDate(startDate)}
                                        dateFormat="MMMM d, yyyy hh:mm"
                                        adjustDateOnChange
                                        closeOnScroll
                                        maxDate={new Date()}
                                        className='flex w-full pl-2 text-lg border-2 border-gray-300 dark:text-gray-50 dark:bg-gray-900'
                                    />
                                </div>
                                :
                                <div className='flex w-1/2 items-center justify-center'><label className='font-semibold'>{timeMachines[selectedTimeMachine].start_time}</label></div>}
                        </div>
                    </div>
                    {/* End of Time - Start */}
                    
                    {/* Time - End */}
                    <div className='flex flex-col items-center self-center justify-stretch mt-4 w-5/6 '>
                        <div className='flex flex-row justify-between mt-2 items-center w-full'>

                            <p className='flex text-gray-700 w-1/2  dark:text-gray-50'> End Time: </p>

                            {editable ?
                                <div className=''>
                                    <DatePicker
                                        showTimeSelect
                                        selected={endDate}
                                        onChange={(endDate) => setEndDate(endDate)}
                                        dateFormat="MMMM d, yyyy hh:mm"
                                        adjustDateOnChange
                                        closeOnScroll
                                        maxDate={new Date()}
                                        className='flex w-full pl-2 text-lg border-2 border-gray-300 dark:text-gray-50 dark:bg-gray-900'
                                    />
                                </div>
                                :
                                <div className='flex w-1/2 items-center justify-center'><label className='font-semibold'>{timeMachines[selectedTimeMachine].end_time}</label></div>}
                        </div>
                    </div>
                    {/* End of Time - End */}

                    {/* Time - Speed */}
                    <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>
                        <div className='flex flex-row justify-between mt-2 items-center w-full'>
                            <p className='flex text-gray-700 w-1/3 dark:text-gray-50'> Playback Speed: </p>
                            {editable ?
                                <div className=''>
                                    <NumericTextBoxComponent placeholder="Playback Speed" format='0.' value={3} min={0} max={400} step={1} style={{ fontSize: "16px", 'padding-left': '8px', 'background-color': currentMode === 'Dark' ? '#555555' : 'rgba(255, 255, 255,1)', 'color': currentMode === 'Dark' ? '#FFFFFF' : '#010101' }} />

                                </div>
                                :
                                <div className='flex w-1/2 items-center justify-center'><label className='font-semibold'>{timeMachines[selectedTimeMachine].playback_speed}</label></div>}
                        </div>
                    </div>
                    {/* End of Time - Speed */}
                </div>
                {/* End of Time */}


                {/* Capital */}
                <div className='flex flex-col w-1/2 border-1 rounded-xl py-4 mx-2'>

                    {/* Capital Icon */}
                    <div className='flex gap-4 items-center self-center justify-center'>
                        <div className='text-2xl rounded-lg p-4 hover:drop-shadow-md'
                            style={{ color: 'white', backgroundColor: '#00C292' }}>
                            <FiDollarSign />
                        </div>

                    </div>

                    {/* Capital Text */}
                    <p className='flex self-center text-xl font-semibold mt-4 dark:text-gray-50'> Capital</p>

                    {/* Capital - Initial */}
                    <div className='flex flex-col items-center self-center justify-stretch mt-4 w-5/6 '>
                        <div className='flex flex-row justify-between mt-2 items-center w-full'>
                            <p className='flex text-gray-700 w-1/3  dark:text-gray-50'> Initial Capital: </p>
                            <div className='flex w-1/2  pl-2'>
                                {editable ?
                                    <NumericTextBoxComponent placeholder="initial Capital" format='c2' value={1000} min={0} max={10000000} step={1} style={{ fontSize: "16px", 'padding-left': '8px', 'background-color': currentMode === 'Dark' ? '#555555' : 'rgba(255, 255, 255,1)', 'color': currentMode === 'Dark' ? '#FFFFFF' : '#010101' }} />
                                    :
                                    <div className='flex w-full items-center justify-center'><label className='font-semibold'>{timeMachines[selectedTimeMachine].initial_capital}</label></div>
                                }
                            </div>
                        </div>
                    </div>
                    {/* End of Capital - Initial  */}


                    {/* Capital - max Leverage */}
                    <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>
                        <div className='flex flex-row justify-between mt-2 items-center w-full'>

                            <p className='flex text-gray-700 w-1/3  dark:text-gray-50'> Max Leverage: </p>
                            <div className='flex w-1/2  pl-2'>
                                {editable ?
                                    <NumericTextBoxComponent placeholder="Max Leverage" format='0.' value={3} min={0} max={400} step={1} style={{ fontSize: "16px", 'padding-left': '8px', 'background-color': currentMode === 'Dark' ? '#555555' : 'rgba(255, 255, 255,1)', 'color': currentMode === 'Dark' ? '#FFFFFF' : '#010101' }} />
                                    :
                                    <div className='flex w-full items-center justify-center'><label className='font-semibold'>{timeMachines[selectedTimeMachine].max_leverage}</label></div>
                                }
                            </div>
                        </div>
                    </div>
                    {/* End of Capital - Max Leverage */}
                </div>
                {/* End of capital */}

            </div>
        </div >
    );
};

export default TimeMachineDetails;
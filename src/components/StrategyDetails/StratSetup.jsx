import React from 'react';

import { exitTypes, targetMarkets, timeFrames } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { FaListCheck } from "react-icons/fa6";

import { BsPlusCircleDotted } from "react-icons/bs";

import { strategies } from '../../data/dummy';



const StratSetup = ({ editable_ = true, selectedStrat_ = 2 }) => {

    const [showCustomSetup, setShowCustomSetup] = React.useState(false)
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomSetup = () => setShowCustomSetup(!showCustomSetup)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const editable = editable_;
    const selectedStrat = selectedStrat_;

    return (
        // {/* Setup */}
        <div className='flex flex-col w-1/3 border-1 rounded-xl py-4 mx-2'>

            {/* Setup Icon */}
            <div className='flex gap-4 items-center self-center justify-center'>
                <div className='text-2xl rounded-lg p-4 hover:drop-shadow-md'
                    style={{ color: 'white', backgroundColor: 'rgb(254, 201, 15)' }}>
                    <FaListCheck />
                </div>

            </div>

            {/* Setup Text */}
            <p className='flex self-center text-xl font-semibold mt-4 dark:text-gray-50'> Setup</p>

            {/* Setup - Target Market */}
            <div className='flex flex-col items-center self-center justify-stretch mt-4 w-5/6 '>


                <div className='flex flex-row justify-between mt-2 items-center w-full'>

                    <p className='flex text-gray-700 w-1/3  dark:text-gray-50'> Target Market: </p>

                    {editable ?
                        <select className="w-1/2 text-xl border-1 dark:bg-gray-900 border-gray-300 px-2 py-1 rounded-md" defaultValue={strategies[0].Id}>

                            {targetMarkets.map((item) => {
                                return (

                                    <option value={item.Id}> {item.Time}</option>
                                )
                            })}

                        </select>
                        :
                        <div className='flex w-1/2 items-center justify-center'><label className='font-semibold'>{strategies[selectedStrat].setup_target_market}</label></div>}
                </div>

            </div>
            {/* End of Setup - Target Market */}


            {/* Setup - Time Frame */}
            <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                <div className='flex flex-row justify-between mt-2 items-center w-full'>

                    <p className='flex text-gray-700 w-1/3 dark:text-gray-50'> Time Frame: </p>
                    {editable ?
                        <select className="w-1/2 text-xl border-1 dark:bg-gray-900 border-gray-300 px-2 py-1 rounded-md" defaultValue={strategies[0].Id}>

                            {timeFrames.map((item) => {
                                return (

                                    <option value={item.Id}> {item.Time}</option>
                                )
                            })}

                        </select>
                        :
                        <div className='flex w-1/2 items-center justify-center'><label className='font-semibold'>{strategies[selectedStrat].setup_time_frame}</label></div>}
                </div>


            </div>
            {/* End of Setup - Time Frame */}


            {/* Setup - Custom #1 */}
            <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                <div className='flex flex-row justify-between mt-2 items-center w-full'>
                    <div className='flex w-1/3'>
                        {editable ?
                            <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-b-2' type='text' placeholder='Criteria #1'></input>

                            :
                            <div className='flex w-full'><label className=''>Time of Day:</label></div>}


                    </div>

                    <div className='flex w-1/2  pl-2'>

                        {editable ?
                            <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-b-2' type='text' placeholder='Criteria #1 Value'></input>
                            :
                            <div className='flex w-full justify-center'><label className='font-semibold'>{strategies[selectedStrat].setup_time_of_day}</label></div>}

                    </div>
                </div>


            </div>
            {/* End of Setup - Custom #1 */}


            {/* Setup - Custom #2 */}
            {showCustomSetup | (!editable) ? <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                <div className='flex flex-row justify-between mt-2 items-center w-full'>
                    <div className='flex w-1/3'>
                        {editable ?
                            <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-b-2' type='text' placeholder='Criteria #2'></input>

                            :
                            <div className='flex w-full'><label className=''>Day of Week:</label></div>}


                    </div>

                    <div className='flex w-1/2  pl-2'>

                        {editable ?
                            <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-b-2' type='text' placeholder='Criteria #2 Value'></input>
                            :
                            <div className='flex w-full justify-center'><label className='font-semibold'>{strategies[selectedStrat].setup_day_of_week}</label></div>}

                    </div>
                </div>


            </div>
                : null}
            {/* End of Setup - Custom #2 */}


            {/* Setup - Add Criteria */}
            {editable ?
                <button className='flex flex-row justify-center items-center text-3xl mt-8 text-blue-700 dark:text-blue-300' onClick={() => onShowCustomSetup()}>
                    <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed ml-4'></div>
                    <div className='text-4xl'>

                        <BsPlusCircleDotted />

                    </div>
                    <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed mr-4'></div>
                </button>
                : <div></div>}
            {/* End of Setup - Add Criteria */}


        </div>
        // {/* End of Setup */}


    );
};

export default StratSetup;
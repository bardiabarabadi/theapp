import React from 'react';

import { exitTypes } from '../../data/dummy';

import { RxEnter, RxExit } from "react-icons/rx";

import { BsPlusCircleDotted } from "react-icons/bs";

import { strategies } from '../../data/dummy';



const StratExit = ({ editable_ = true, selectedStrat_ = 2 }) => {

    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const editable = editable_;
    const selectedStrat = selectedStrat_;

    return (


        // {/* Exit */}
        <div className='flex flex-col w-full border-1 rounded-xl py-4 mx-2'>

            {/* Exit Icon */}
            <div className='flex gap-4 items-center self-center justify-center'>
                <div className='text-2xl rounded-lg p-4 hover:drop-shadow-md'
                    style={{ color: 'white', backgroundColor: '#00C292' }}>
                    <RxExit />
                </div>

            </div>

            {/* Exit Text */}
            <p className='flex self-center text-xl font-semibold mt-4 dark:text-gray-50'> Exit</p>

            {/* Exit - Exit Type */}
            <div className='flex flex-col items-center self-center justify-stretch mt-4 w-5/6'>


                <div className='flex flex-row justify-between mt-2 items-center w-full'>
                    <div className='flex text-gray-700 w-1/3  dark:text-gray-50'>
                        <p> Exit Type: </p></div>
                    {editable ?
                        <select className="w-1/2 text-md border-1 dark:bg-gray-900 border-gray-300 px-2 py-1 rounded-md" defaultValue={strategies[0].Id}>

                            {exitTypes.map((item) => {
                                return (

                                    <option value={item.Id}> {item.Time}</option>
                                )
                            })}

                        </select>
                        :
                        <div className='flex w-1/2 items-center justify-center '><label className='font-semibold'>{strategies[selectedStrat].exit_type}</label></div>
                    }
                </div>


            </div>
            {/* End of Exit - Exit Type  */}


            {/* Exit - Custom #1 */}
            <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                <div className='flex flex-row justify-between mt-2 items-center w-full'>
                    <div className='flex w-1/3'>
                        {editable ?
                            <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-b-2' type='text' placeholder='Criteria #1'></input>

                            :
                            <div className='flex w-full'><label className=''>Criteria #1:</label></div>}


                    </div>

                    <div className='flex w-1/2  pl-2'>

                        {editable ?
                            <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-b-2' type='text' placeholder='Criteria #1 Value'></input>
                            :
                            <div className='flex w-full justify-center '><label className='font-semibold'>{strategies[selectedStrat].exit_1}</label></div>}

                    </div>
                </div>


            </div>
            {/* End of Exit - Custom #1 */}


            {/* Exit - Custom #2 */}
            {showCustomExit | (!editable) ? <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                <div className='flex flex-row justify-between mt-2 items-center w-full'>
                    <div className='flex w-1/3'>
                        {editable ?
                            <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-b-2' type='text' placeholder='Criteria #2'></input>

                            :
                            <div className='flex w-full'><label className=''>Criteria #2:</label></div>}


                    </div>

                    <div className='flex w-1/2  pl-2'>

                        {editable ?
                            <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-gray-900 border-b-2' type='text' placeholder='Criteria #2 Value'></input>
                            :
                            <div className='flex w-full justify-center '><label className='font-semibold'>{strategies[selectedStrat].exit_2}</label></div>}

                    </div>
                </div>


            </div>
                : null}
            {/* End of Exit - Custom #2 */}


            {/* Exit - Add Criteria */}

            {editable ?
                <button className='flex flex-row justify-center items-center text-3xl mt-8 text-blue-700 dark:text-blue-300' onClick={() => onShowCustomExit()}>
                    <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed ml-4'></div>
                    <div className='text-4xl'>

                        <BsPlusCircleDotted />

                    </div>
                    <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed mr-4'></div>
                </button>
                : <></>}
            {/* End of Exit - Add Criteria */}


        </div>
        // {/* End of Exit */}

    );
};

export default StratExit;
import React from 'react';

import { useStateContext } from '../../contexts/ContextProvider';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs'

import { RxEnter } from "react-icons/rx";

import { BsPlusCircleDotted } from "react-icons/bs";

import { strategies } from '../../data/dummy';


const StratEntry = ({ editable_ = true, selectedStrat_ = 2 }) => {

    const { currentMode } = useStateContext();
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)

    const editable = editable_;
    const selectedStrat = selectedStrat_;

    return (

        // {/* Entry */}
        <div className='flex flex-col w-full border-1 rounded-xl py-4 mx-2'>

            {/* Entry Icon */}
            <div className='flex gap-4 items-center self-center justify-center'>
                <div className='text-2xl rounded-lg p-4 hover:drop-shadow-md'
                    style={{ color: 'white', backgroundColor: '#FB9678' }}>
                    <RxEnter />
                </div>

            </div>

            {/* Entry Text */}
            <p className='flex self-center text-xl font-semibold mt-4 dark:text-gray-50'> Entry</p>

            {/* Entry - Risk */}
            <div className='flex flex-col items-center self-center justify-stretch mt-4 w-5/6 '>


                <div className='flex flex-row justify-between mt-2 items-center w-full'>

                    <p className='flex text-gray-700 w-1/3  dark:text-gray-50'> Risk Per Trade: </p>
                    <div className='flex w-1/2  pl-2'>
                        {editable ?
                            <NumericTextBoxComponent placeholder="Risk %" format='p2' value={0.01} min={0} max={1} step={0.0001} style={{ fontSize: "16px", 'padding-left': '8px', 'background-color': currentMode === 'Dark' ? '#555555' : 'rgba(255, 255, 255,1)', 'color': currentMode === 'Dark' ? '#FFFFFF' : '#010101' }} />
                            :
                            <div className='flex w-full items-center justify-center'><label className='font-semibold'>{strategies[selectedStrat].entry_risk}</label></div>
                        }
                    </div>
                </div>


            </div>
            {/* End of Entry - Risk  */}


            {/* Entry - Leverage */}
            <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>



                <div className='flex flex-row justify-between mt-2 items-center w-full'>

                    <p className='flex text-gray-700 w-1/3  dark:text-gray-50'> Leverage: </p>
                    <div className='flex w-1/2  pl-2'>
                        {editable ?
                            <NumericTextBoxComponent placeholder="Leverage" format='0.' value={3} min={0} max={400} step={1} style={{ fontSize: "16px", 'padding-left': '8px', 'background-color': currentMode === 'Dark' ? '#555555' : 'rgba(255, 255, 255,1)', 'color': currentMode === 'Dark' ? '#FFFFFF' : '#010101' }} />
                            :
                            <div className='flex w-full items-center justify-center'><label className='font-semibold'>{strategies[selectedStrat].entry_leverage}</label></div>
                        }
                    </div>
                </div>


            </div>
            {/* End of Entry - Leverage */}


            {/* Entry - Custom #1 */}
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
                            <div className='flex w-full justify-center '><label className='font-semibold'>{strategies[selectedStrat].entry_1}</label></div>}

                    </div>
                </div>


            </div>
            {/* End of Entry - Custom #1 */}


            {/* Entry - Custom #2 */}
            {showCustomEntry | (!editable) ? <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

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
                            <div className='flex w-full justify-center '><label className='font-semibold'>{strategies[selectedStrat].entry_2}</label></div>}

                    </div>
                </div>


            </div>
                : null}
            {/* End of Entry - Custom #2 */}


            {/* Entry - Add Criteria */}

            {editable ?
                <button className='flex flex-row justify-center items-center text-3xl mt-8 text-blue-700 dark:text-blue-300' onClick={() => onShowCustomEntry()}>
                    <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed ml-4'></div>
                    <div className='text-4xl'>

                        <BsPlusCircleDotted />

                    </div>
                    <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed mr-4'></div>
                </button>
                : <></>}
            {/* End of Entry - Add Criteria */}


        </div>
        // {/* End of Entry */}

    );
};

export default StratEntry;
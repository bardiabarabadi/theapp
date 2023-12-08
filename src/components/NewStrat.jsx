import React from 'react';

import * as ReactDOM from "react-dom";
import { MdOutlineCancel } from 'react-icons/md';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Button } from '.';
import { exitTypes, targetMarkets, timeFrames, userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { NumericTextBox, NumericTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs'

import { FiPlusCircle } from "react-icons/fi";
import product8 from '../data/product8.jpg';
import { FaListCheck } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { RxEnter, RxExit } from "react-icons/rx";

import { BsPlusCircleDotted } from "react-icons/bs";

import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

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

const ExitTypeDropDown = ({ currentMode }) => (
    <div className="border-1 ml-5 border-color px-2 pt-1 rounded-md">
        <DropDownListComponent id="tm" fields={{ text: 'Time', value: 'Id' }} style={{ color: (currentMode === 'Dark') && 'white' }} value="3" dataSource={exitTypes} popupHeight="220px" popupWidth="180px" />
    </div>
);
const NewStrat = () => {
    const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();

    const [showCustomSetup, setShowCustomSetup] = React.useState(false)
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomSetup = () => setShowCustomSetup(!showCustomSetup)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const handleNewStrat = () => setNewStrat(!newStrat);

    return (
        <div className="flex bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit flex-col  rounded-3xl w-5/6 p-8 pt-9 mt-3  bg-no-repeat bg-cover bg-center hover:drop-shadow-xl border-8 border-gray-400 dark:border-gray-600" style={{ zIndex: '2000', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className='flex flex-row justify-normal h-fit'>
                < div className="flex flex-row justify-start items-center h-fit" >

                    {/* Strategy Avatar */}
                    < div className='rounded-full w-20 items-start justify-center h-20 m-2' >
                        <img
                            className="rounded-full "
                            src={product8}
                            alt="user-profile"
                        />
                    </div >


                    {/* Strategy Title */}
                    <div className='flex mb-1 items-center self-center'>
                        <input className='flex text-4xl text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Strategy Name'></input>
                    </div>


                </div >
                {/* close button */}
                <div className='flex justify-self-end w-full justify-end self-start'>
                    <button className='text-4xl hover:drop-shadow-lg' type='button' onClick={() => handleNewStrat()}>
                        <MdOutlineCancel />
                    </button>
                </div>
            </div>

            {/* Strategy Summary */}
            < div className='mt-8 w-auto ml-5 mr-5' >


                <input className='flex w-full text-lg text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Description'></input>
                {/* <TextBoxComponent className="e-input" type="text" placeholder="Description" style={{ fontSize: "20px" }} floatLabelType='Always' /> */}
            </div >

            {/* Strategy Details */}
            < div className='mt-8 w-auto h-fit' >

                <div className='flex flex-row justify-evenly rounded-lg border-spacing-2 p-2  '>


                    {/* Setup */}
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
                                <TargetMarketDropDown className='flex w-1/3' currentMode={currentMode} />
                            </div>


                        </div>
                        {/* End of Setup - Target Market */}


                        {/* Setup - Time Frame */}
                        <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                            <div className='flex flex-row justify-between mt-2 items-center w-full'>

                                <p className='flex text-gray-700 w-1/3 dark:text-gray-50'> Time Frame: </p>
                                <TimeFramesDropDown className="flex  w-1/2" currentMode={currentMode} />
                            </div>


                        </div>
                        {/* End of Setup - Time Frame */}


                        {/* Setup - Custom #1 */}
                        <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                            <div className='flex flex-row justify-between mt-2 items-center w-full'>
                                <div className='flex w-1/3'>

                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #1'></input>
                                </div><div className='flex w-1/2  pl-2'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #1 Value'></input>
                                </div>
                            </div>


                        </div>
                        {/* End of Setup - Custom #1 */}


                        {/* Setup - Custom #2 */}
                        {showCustomSetup ? <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                            <div className='flex flex-row justify-between mt-2 items-center w-full'>
                                <div className='flex w-1/3'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #2'></input>
                                </div><div className='flex w-1/2  pl-2'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #2 Value'></input>
                                </div>
                            </div>


                        </div>
                            : null}
                        {/* End of Setup - Custom #2 */}


                        {/* Setup - Add Criteria */}
                        <button className='flex flex-row justify-center items-center text-3xl mt-8 text-blue-700 dark:text-blue-300' onClick={() => onShowCustomSetup()}>
                            <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed ml-4'></div>
                            <div className='text-4xl'>

                                <BsPlusCircleDotted />

                            </div>
                            <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed mr-4'></div>
                        </button>
                        {/* End of Setup - Add Criteria */}


                    </div>
                    {/* End of Setup */}


                    {/* Entry */}
                    <div className='flex flex-col w-1/3 border-1 rounded-xl py-4 mx-2'>

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
                                    <NumericTextBoxComponent placeholder="Risk %" format='p2' value={0.01} min={0} max={1} step={0.0001} style={{ fontSize: "16px" }} />
                                </div>
                            </div>


                        </div>
                        {/* End of Entry - Risk  */}


                        {/* Entry - Leverage */}
                        <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>



                            <div className='flex flex-row justify-between mt-2 items-center w-full'>

                                <p className='flex text-gray-700 w-1/3  dark:text-gray-50'> Leverage: </p>
                                <div className='flex w-1/2  pl-2'>
                                    <NumericTextBoxComponent placeholder="Leverage" format='0.' value={3} min={0} max={400} step={1} style={{ fontSize: "16px" }} />
                                </div>
                            </div>


                        </div>
                        {/* End of Entry - Leverage */}


                        {/* Entry - Custom #1 */}
                        <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                            <div className='flex flex-row justify-between mt-2 items-center w-full'>
                                <div className='flex w-1/3'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #1'></input>
                                </div><div className='flex w-1/2  pl-2'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #1 Value'></input>
                                </div>
                            </div>


                        </div>
                        {/* End of Entry - Custom #1 */}


                        {/* Entry - Custom #2 */}
                        {showCustomEntry ? <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                            <div className='flex flex-row justify-between mt-2 items-center w-full'>
                                <div className='flex w-1/3'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #2'></input>
                                </div><div className='flex w-1/2  pl-2'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #2 Value'></input>
                                </div>
                            </div>


                        </div>
                            : null}
                        {/* End of Entry - Custom #2 */}


                        {/* Entry - Add Criteria */}
                        <button className='flex flex-row justify-center items-center text-3xl mt-8 text-blue-700 dark:text-blue-300' onClick={() => onShowCustomEntry()}>
                            <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed ml-4'></div>
                            <div className='text-4xl'>

                                <BsPlusCircleDotted />

                            </div>
                            <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed mr-4'></div>
                        </button>
                        {/* End of Entry - Add Criteria */}


                    </div>
                    {/* End of Entry */}


                    {/* Exit */}
                    <div className='flex flex-col w-1/3 border-1 rounded-xl py-4 mx-2'>

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
                        <div className='flex flex-col items-center self-center justify-stretch mt-4 w-5/6 '>


                            <div className='flex flex-row justify-between mt-2 items-center w-full'>

                                <p className='flex text-gray-700 w-1/3  dark:text-gray-50'> Exit Type: </p>
                                <ExitTypeDropDown className="flex  w-1/2" currentMode={currentMode} />
                            </div>


                        </div>
                        {/* End of Exit - Exit Type  */}


                        {/* Exit -  */}
                        {/* <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>



                            <div className='flex flex-row justify-between mt-2 items-center w-full'>

                                <p className='flex text-gray-700 w-1/3'> Leverage: </p>
                                <div className='flex w-1/2  pl-2'>
                                    <NumericTextBoxComponent placeholder="" format='0.' value={3} min={0} max={400} step={1} style={{ fontSize: "16px" }} />
                                </div>
                            </div>


                        </div> */}
                        {/* End of Exit -  */}


                        {/* Exit - Custom #1 */}
                        <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                            <div className='flex flex-row justify-between mt-2 items-center w-full'>
                                <div className='flex w-1/3'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #1'></input>
                                </div><div className='flex w-1/2  pl-2'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #1 Value'></input>
                                </div>
                            </div>


                        </div>
                        {/* End of Exit - Custom #1 */}


                        {/* Exit - Custom #2 */}
                        {showCustomExit ? <div className='flex flex-col items-center self-center justify-evenly mt-4 w-5/6'>

                            <div className='flex flex-row justify-between mt-2 items-center w-full'>
                                <div className='flex w-1/3'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #2'></input>
                                </div><div className='flex w-1/2  pl-2'>
                                    <input className='flex w-full text-md text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Criteria #2 Value'></input>
                                </div>
                            </div>


                        </div>
                            : null}
                        {/* End of Exit - Custom #2 */}


                        {/* Exit - Add Criteria */}
                        <button className='flex flex-row justify-center items-center text-3xl mt-8 text-blue-700 dark:text-blue-300' onClick={() => onShowCustomExit()}>
                            <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed ml-4'></div>
                            <div className='text-4xl'>

                                <BsPlusCircleDotted />

                            </div>
                            <div className='flex w-full border-1 border-blue-700 dark:border-blue-300 border-dashed mr-4'></div>
                        </button>
                        {/* End of Exit - Add Criteria */}


                    </div>
                    {/* End of Exit */}





                </div>
            </div >

        </div >



    );
};

export default NewStrat;

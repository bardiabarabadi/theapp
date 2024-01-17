import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import product8 from '../data/product8.jpg';
import StratDetails from './StratDetails'
import TimeMachineDetails from './TimeMachineDetails';
import { strategies } from '../data/dummy';
import { useNavigate } from "react-router-dom";




const NewRimeMachine = ({ editable_ = false, selectedStrat = 1 }) => {
    const { currentColor, currentMode, newStrat, setNewStrat } = useStateContext();

    const [showCustomSetup, setShowCustomSetup] = React.useState(false)
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomSetup = () => setShowCustomSetup(!showCustomSetup)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const handleNewStrat = () => setNewStrat(!newStrat);

    const navigate = useNavigate();

    const navigateToTimeMachine = () => {
        handleNewStrat();
        navigate("/timemachinepanel")
    }

    return (
        <div className="flex bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-fit flex-col  rounded-3xl w-5/6 p-8 pt-9 mt-3  bg-no-repeat bg-cover bg-center hover:drop-shadow-xl border-8 border-gray-400 dark:border-gray-600" style={{ zIndex: '2000', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className='flex flex-row justify-normal h-fit'>
                < div className="flex flex-row justify-start items-center h-fit w-full" >

                    {/* Strategy Avatar */}
                    < div className='rounded-full w-40 items-start justify-center h-20 m-2' >
                        <img
                            className="rounded-full "
                            src={product8}
                            alt="user-profile"
                        />
                    </div >


                    {/* Strategy Title */}
                    <div className='flex mb-1 items-center self-center'>
                        <input className='flex text-4xl text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Time Machine Name'></input>
                    </div>

                    <div className='flex flex-grow ml-20 bg-gray-200 dark:bg-gray-700 dark:text-gray-50 w-full'>

                        <select className="w-full text-xl border-1 dark:bg-gray-900 border-gray-300 px-2 py-1 rounded-md" defaultValue={strategies[0].Id}>

                            {strategies.map((item) => {
                                return (

                                    <option value={item.Id}> {item.name}</option>
                                )
                            })}

                        </select>
                    </div>


                </div >
                {/* close button */}
                <div className='flex justify-self-end w-1/12 justify-end self-start'>
                    <button className='text-4xl hover:drop-shadow-lg' type='button' onClick={() => handleNewStrat()}>
                        <MdOutlineCancel />
                    </button>
                </div>
            </div>

            {/* Strategy Summary */}
            < div className='mt-8 w-auto ml-5 mr-5' >
                <input className='flex w-full text-lg text-gray-800 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 dark:bg-secondary-dark-bg border-b-2' type='text' placeholder='Description'></input>
            </div >

            {/* Strategy Details */}
            <div>
                <TimeMachineDetails
                    editable_={editable_}
                    selectedStrat_={selectedStrat}
                />
            </div>


            <div className='flex justify-end'>
                <div className='flex justify-self-end w-1/6 mt-4 mr-4 text-xl font-bold'>

                    {editable_ ?
                        <button
                            type="button"
                            onClick={() => { navigateToTimeMachine() }}
                            style={{ backgroundColor: currentColor, color: "white", borderRadius: "10px" }}
                            className={`p-3 w-full hover:drop-shadow-xl}`}
                        >
                            {"Start"}
                        </button>
                        :
                        <button
                            type="button"
                            onClick={() => { navigateToTimeMachine() }}
                            style={{ backgroundColor: currentColor, color: "white", borderRadius: "10px" }}
                            className={`p-3 w-full hover:drop-shadow-xl}`}
                        >
                            {"Resume"}
                        </button>
                    }

                </div>
            </div>

        </div >



    );
};

export default NewRimeMachine;

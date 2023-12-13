// TODO: Update to be new Time Machine Panel
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import product8 from '../data/product8.jpg';
import StratDetails from './StratDetails'

const NewTimeMachine = () => {
    const { currentColor, currentMode, setNewTimeMachine, newTimeMachine } = useStateContext();

    const [showCustomSetup, setShowCustomSetup] = React.useState(false)
    const [showCustomEntry, setShowCustomEntry] = React.useState(false)
    const [showCustomExit, setShowCustomExit] = React.useState(false)
    const onShowCustomSetup = () => setShowCustomSetup(!showCustomSetup)
    const onShowCustomEntry = () => setShowCustomEntry(!showCustomEntry)
    const onShowCustomExit = () => setShowCustomExit(!showCustomExit)

    const handleNewTimeMachine = () => setNewTimeMachine(!newTimeMachine);

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
                    <button className='text-4xl hover:drop-shadow-lg' type='button' onClick={() => handleNewTimeMachine()}>
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
            <div>
                <StratDetails
                    editable_={true}
                />
            </div>

        </div >



    );
};

export default NewTimeMachine;

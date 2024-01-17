import React, { useState, useEffect } from 'react';
import { FaListCheck } from "react-icons/fa6";
import { RxEnter, RxExit } from "react-icons/rx";
import { useStateContext } from '../contexts/ContextProvider';
import { FiPlusCircle } from "react-icons/fi";
import product8 from '../data/product8.jpg';

import { Header } from '../components';
import NewTimeMachine from '../components/NewTimeMachine';

import { strategies } from '../data/dummy';
import { timeMachines } from '../data/dummy';
import { FiDollarSign } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import format from 'date-fns/format';



const TimeMachinePanel = () => {
    const { currentColor, currentMode } = useStateContext();


    const testTMId = 2;
    const testTMStartTime = "02-jan-2024"

    const t = Date.parse(testTMStartTime)


    const [elapsedDays, setElapsedDays] = useState(0);
    const [elapsedHours, setElapsedHours] = useState(0);
    const [elapsedMinutes, setElapsedMinutes] = useState(0);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    const [currentTime, setCurrentTime] = useState("");


    const getElapsedTime = () => {
        const time = -1 * (Date.parse(testTMStartTime) - Date.now());

        setElapsedDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setElapsedHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setElapsedMinutes(Math.floor((time / 1000 / 60) % 60));
        setElapsedSeconds(Math.floor((time / 1000) % 60));
    };

    const getCurrentTime = () => {
        const time = -1 * (Date.parse(testTMStartTime) - Date.now()) + Date.parse(timeMachines[testTMId].start_time);

        let d = new Date(time)
        setCurrentTime(format(d, 'yyyy/MM/dd, kk:mm:ss'))

    };


    useEffect(() => {
        const interval = setInterval(() => { getElapsedTime(); getCurrentTime() }, 1000);

        return () => clearInterval(interval);
    }, []);


    const currentTimeMachine = testTMId;


    return (


        <div className="mr-2 ml-2 mt-8 p-2  bg-gray-100 dark:bg-gray-950 rounded-3xl">


            {/* Background */}
            <div className=" h-fit min-h-screen rounded-xl">

                <div className='flex flex-wrap justify-around h-fit items-center'>


                    {/* TimeMachine Stattus */}
                    <div className='flex w-full justify-evenly font-semibold'>
                        <div> {/* Time Machine Name */}
                            <div className='flex p-2 rounded-xl border-2 bg-gray-200 mx-4 text-xl'>
                                {timeMachines[currentTimeMachine].name}
                            </div>
                        </div>

                        <div className='flex p-2 rounded-xl border-2 bg-gray-200 mx-4 text-xl'>{/* Current Time */}
                            Current Time: {currentTime}
                        </div>

                        <div className='flex p-2 rounded-xl border-2 bg-gray-200 mx-4 text-xl'>{/* Elapsed Time */}
                            Elapsed Time: {elapsedDays} Days, {("0"+elapsedHours).slice(-2)}:{("0"+elapsedMinutes).slice(-2)}:{("0"+elapsedSeconds).slice(-2)}

                        </div>

                        <div className='flex p-2 rounded-xl border-2 bg-gray-200 mx-4 text-xl'>{/* PnL */}
                            PnL: +$100
                        </div>

                        <div className='flex'>{/* End Time Machine Button */}
                            <button
                                type="button"
                                // onClick={() => { navigateToTimeMachine() }}
                                style={{ backgroundColor: "red", color: "white", borderRadius: "10px" }}
                                className={`p-3 w-full hover:drop-shadow-xl}`}
                            >
                                {"Terminate Time Machine"}
                            </button>
                        </div>
                    </div>
                    {/* End of TimeMachine Stattus */}


                    {/* Trading Panel & Journal */}
                    <div className='flex w-full bg-green-200'>
                        Hello
                    </div>
                    {/* End of Trading Panel & Journal */}


                </div >
            </div >
            {/* End of background */}


        </div >



    );
};


export default TimeMachinePanel;

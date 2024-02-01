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
import TradeDetails from '../components/TradeDetails';
import chart_dark from '../data/chart_dark.png';
import chart_light from '../data/chart_light.png';
import tradePanel_dark from '../data/tradingPanel_dark.png';
import tradePanel_light from '../data/tradingPanel_light.png';
import { journalTradeList } from '../data/dummy';
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { BsPlusCircleDotted } from 'react-icons/bs';



const TimeMachinePanel = () => {
    const { currentColor, currentMode, showNewTradeDetail, setShowNewTradeDetail, currentTimeMachine, setCurrentTimeMachine } = useStateContext();

    const onShowNewTradeDetail = () => setShowNewTradeDetail(!showNewTradeDetail);

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
        const time = -1 * (Date.parse(testTMStartTime) - Date.now()) + Date.parse(timeMachines[currentTimeMachine].start_time);

        let d = new Date(time)
        setCurrentTime(format(d, 'yyyy/MM/dd, kk:mm:ss'))

    };


    useEffect(() => {
        const interval = setInterval(() => { getElapsedTime(); getCurrentTime() }, 1000);

        return () => clearInterval(interval);
    }, []);




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
                            Elapsed Time: {elapsedDays} Days, {("0" + elapsedHours).slice(-2)}:{("0" + elapsedMinutes).slice(-2)}:{("0" + elapsedSeconds).slice(-2)}
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



                    {/* Trading Panel */}
                    <div className='flex flex-row w-full my-5'>
                        {/* Main Chart */}
                        <div className='flex w-3/4 ml-2'>
                            <img src={currentMode === 'Dark' ? chart_dark : chart_light} className='rounded-lg border-2 border-gray-950 dark:border-gray-50' >
                            </img>
                        </div>
                        {/* End of Main Chart */}

                        {/* Main Chart */}
                        <div className='flex w-1/4 ml-2'>
                            <img src={currentMode === 'Dark' ? tradePanel_dark : tradePanel_light} className='rounded-lg border-2 border-gray-950 dark:border-gray-50' >
                            </img>
                        </div>
                        {/* End of Main Chart */}

                    </div>
                    {/* End of Trading Panel */}


                    {/* Trading Journal */}
                    <div className='flex w-full mt-10 mr-2'>


                        <div className='flex w-4/5 flex-col'>
                            <div className='flex justify-center'>
                                <Header category="" title="Trade Details" />
                            </div>
                            <TradeDetails/>
                        </div>

                        {/* Trade List */}
                        <div className='flex flex-col w-1/5'>

                            <div className='flex justify-center'>
                                <Header category="" title="Trade History" />
                            </div>
                            <div className='flex flex-col w-full ml-2 mr-2 font-bold text-lg'>

                                {journalTradeList.map((item) => {
                                    return (
                                        <div key={item.id} className='flex flex-row border-2 items-center border-gray-600 dark:border-gray-400 justify-evenly rounded-xl bg-gray-200 dark:bg-gray-800 w-full h-20 mb-2'>
                                            <div className='flex dark:text-gray-100 w-1/3 justify-center'>
                                                <h2>{item.date}</h2>
                                            </div>

                                            <div className='flex justify-center w-5/12'>
                                                {item.side === 'buy' ? (
                                                    <div className='flex flex-row justify-evenly items-center w-5/12 text-market-green'>
                                                        <BiSolidUpArrow />
                                                        <p className='font-semibold text-lg'>Buy </p>
                                                    </div>

                                                ) : (
                                                    <div className='flex flex-row justify-evenly items-center w-5/12 text-market-red'>
                                                        <BiSolidDownArrow />
                                                        <p className='font-semibold text-lg'>Sell </p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className='flex justify-start w-3/12'>
                                                <h2 className='dark:text-gray-100'>PnL=</h2>
                                                <h2 className={`${item.wnl === 'l' ? 'text-market-green' : 'text-market-red'} mx-1`}>{item.pnl}</h2>
                                            </div>
                                        </div>
                                    )
                                })}


                                {/* Add Trade */}
                                <button className='flex flex-row justify-center items-center text-3xl mt-8 text-gray-700 dark:text-gray-300' onClick={() => onShowNewTradeDetail()}>
                                    <div className='flex w-full border-1 border-gray-700 dark:border-gray-300 border-dashed ml-4'></div>
                                    <div className='text-4xl'>
                                        <BsPlusCircleDotted />
                                    </div>
                                    <div className='flex w-full border-1 border-gray-700 dark:border-gray-300 border-dashed mr-4'></div>
                                </button>
                                {/* End of Add Trade */}


                            </div>
                        </div>
                        {/* End of Trade List */}
                    </div>
                    {/* End of Trading Journal */}


                </div >
            </div >
            {/* End of background */}


        </div >



    );
};


export default TimeMachinePanel;

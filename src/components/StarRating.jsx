import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


const StarRating = () => {
    const [rate, setRate] = useState(0);
    return (
        <div className="flex flex-row items-center text-3xl ml-2 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
    );
};

export default StarRating;

import { K2D } from 'next/font/google';
import React, { useState, useEffect } from 'react'
const k2d = K2D({ weight: '800', subsets: ['latin'] })
export const DateTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div>
            <p className={`${k2d.className}`}>{date.toUTCString()}</p>
        </div >
    )
}

export default DateTime
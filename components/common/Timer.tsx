"use client"

import { useEffect, useState } from "react"

interface TimerProps {
    hoursToEnd: number
}
const Timer: React.FC<TimerProps> = ({ hoursToEnd }) => {

    const [timeToEnd, setTimeToEnd] = useState(() => {
        const totalMiliseconds = hoursToEnd * 60 * 60 * 1000
        return {
            hours: Math.floor(totalMiliseconds / (1000 * 60 * 60)),
            minutes: Math.floor((totalMiliseconds / (1000 * 60)) % 60),
            seconds: Math.floor((totalMiliseconds / 1000) % 60)
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeToEnd(prevTime => {
                const updetedMilliseconds =
                    (prevTime.hours * 1000 * 60 * 60) +
                    (prevTime.minutes * 1000 * 60) +
                    (prevTime.seconds * 1000) - 1000

                if (updetedMilliseconds <= 0) {
                    clearInterval(interval)
                    return { hours: 0, minutes: 0, seconds: 0 }
                }

                return {
                    hours: Math.floor(updetedMilliseconds / (1000 * 60 * 60)),
                    minutes: Math.floor((updetedMilliseconds / (1000 * 60)) % 60),
                    seconds: Math.floor((updetedMilliseconds / 1000) % 60)
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [hoursToEnd])


    return (
        <div className="bg-neutral-700 bg-opacity-70 w-full md:w-[295px] h-[145px] rounded-2xl p-[30px] font-caption">
            <span className="">Auction ends in:</span>
            {
                <div className="w-full flex justify-between gap-3 text-subtitle">
                    <div className="flex flex-col justify-center items-center">
                        <span>{timeToEnd.hours}</span>
                        <span className="text-[12px]">Hours</span>
                    </div> :
                    <div className="flex flex-col justify-center items-center">
                        <span>{timeToEnd.minutes}</span>
                        <span className="text-[12px]">Minutes</span>
                    </div>:
                    <div className="flex flex-col justify-center items-center">
                        <span>{timeToEnd.seconds}</span>
                        <span className="text-[12px]">Seconds</span>
                    </div>
                </div>
            }

        </div>
    )
}

export default Timer

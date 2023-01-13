import React, { useState } from 'react'


export default function Counter() {

    const [number, setNumber] = useState(0)

    const handleClick =     () => {
        setNumber(number + 1)
    }

    return (
        <>
            <div>


                <div className="flex space-x-2 justify-center">

                    <h1 className="text-2xl  font-bold">Current number is: {number}</h1>
                    <button type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={handleClick}>
                        Increment
                    </button>

                    <button type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => setNumber(number - 1)}>
                        Decrement
                    </button>

                </div>
            </div>
        </>
    )
}




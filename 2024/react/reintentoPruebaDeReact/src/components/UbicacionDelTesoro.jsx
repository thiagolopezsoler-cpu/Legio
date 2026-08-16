import React, { useState } from 'react'

export const


    UbicacionDelTesoro = () => {
        const [items, setItems] = useState(Array(25).fill(null));
        console.log(items);
        return (
            <div>
                <h1>Se conecta el componente</h1>
                <div className='botones'>
                    {items.map((index, numero) => {
                        <div
                            key={index}
                            className='booton'
                        >
                        </div>
                    })}
                </div>
                <h2>juga</h2>
            </div>
        )
    }

export default UbicacionDelTesoro;

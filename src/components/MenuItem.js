import React from 'react'

function MenuItem({menuItem, setOrder}) {

    const addToOrder = () => {
        setOrder(prev => [...prev,menuItem.name]);
    }

    return (
        <div onClick={addToOrder}>
            <h2>
                {menuItem.name} costs {menuItem.price}
            </h2>
            <img  className='foodPic' src={menuItem.img}/>
        </div>
    )
}

export default MenuItem
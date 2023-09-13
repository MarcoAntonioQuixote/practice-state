import React, { useEffect, useState } from 'react'
import FormOptions from './FormOptions'

function Form({order}) {

    const [customerInfo, setCustomerInfo] = useState({});

    useEffect(() => {
        console.log(customerInfo);
    }, [customerInfo])

    const showItemsToOrder = order.map((item,i) => <li key={i}>{item}</li>)


    const handleChange = (e) => {
        const prop = e.target.name;
        const value = e.target.value;

        setCustomerInfo(prev => ({...prev, [prop]: value}))
    }

    return (
        <div>
            You are ordering:
            {showItemsToOrder}

            <input onChange={handleChange} type="text" name='customer' /> Your name
            <input onChange={handleChange} type="text" name='address' /> Your address
            <button>Submit</button>
        </div>
    )
}

export default Form
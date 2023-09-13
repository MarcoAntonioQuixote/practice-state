import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Menu from './components/Menu';

function App() {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        console.log('order is', order);
    }, [order])

    return (
        <div className="App-header">
            My Food App

            <Menu setOrder={setOrder} />
            <Form order={order}/>



            {/* //list of options //menu
            //form - 
            //choice of food
            //submit button */}
        </div>
    );
}

export default App;

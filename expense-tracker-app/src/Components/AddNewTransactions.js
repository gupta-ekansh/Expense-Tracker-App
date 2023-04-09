import {useState} from 'react';
import Card from './Card';
// import { HandleClick } from './History';
function AddNewTransaction(props){
    var array = props.arr;
    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);
    const handleClick = () => {
        var name = text;
        var type = amount[0];
        var temp = amount.slice(1 , amount.size);
        var object = {
            name ,
            temp ,  
            type
        }
    }
    return (
        <div>
            <p className = "add-new-transaction">Add New Transaction</p>
            <div className = "inputs">
                <div className = "input-text">
                    <p>Text</p>
                    <input type = "text" placeholder = "Enter text..." onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className = "input-amount">
                    <p className = "p1">Amount</p>
                    <p className = "p2">(negative-expense , positive-income)</p>
                    <input type = "number" placeholder = "Enter amount..." onChange={(e) => setAmount(e.target.value)}/>
                </div>
            </div>
            <button onClick={() => handleClick()} type = "submit" className = "add-transaction">Add Transaction</button>
        </div>
    );  
}
export default AddNewTransaction;
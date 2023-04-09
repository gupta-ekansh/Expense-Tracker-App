import {useState} from 'react';
import { toast} from 'react-hot-toast';
// import Card from './Card';
// import { HandleClick } from './History';
function AddNewTransaction(props){
    var array = props.arr;
    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);
    const handleClick = () => {
        var name = text;
        var type = amount[0];
        var temp = amount.slice(1 , amount.size);
        var id = array.length + 1;
        console.log(array);
        var object = {
            name ,
            amount: temp ,  
            type , 
            key: id
        }
        console.log(object);
        props.setArr((prev) => [...prev , object]);
        // window.alert("New task Added Successfully");
        toast.success('Task Added Successfully');
    }
    const handleChangeText = (e) => {
        setText(e.target.value);
    }
    const handleChangeAmount = (e) => {
        setAmount(e.target.value);
    }
    return (
        <div>
            <p className = "add-new-transaction">Add New Transaction</p>
            <div className = "inputs">
                <div className = "input-text">
                    <p>Text</p>
                    <input type = "text" placeholder = "Enter text..." onChange={(e) => handleChangeText}/>
                </div>
                <div className = "input-amount">
                    <p className = "p1">Amount</p>
                    <p className = "p2">(negative-expense , positive-income)</p>
                    <input type = "text" placeholder = "Enter amount..." onChange={(e) => handleChangeAmount}/>
                </div>
            </div>
            <button onClick={() => handleClick()} type = "submit" className = "add-transaction">Add Transaction</button>
        </div>
    );  
}
export default AddNewTransaction;
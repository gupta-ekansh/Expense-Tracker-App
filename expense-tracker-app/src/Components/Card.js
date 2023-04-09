import Income from "./Income";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import AddNewTransaction from "./AddNewTransactions";
import { useState } from "react";
// import { HandleClick } from "./History";

function Card(){
    // const [arr , setArr] = useState([]);
    var arr = [
        {
            name: 'Cash' , 
            amount: '500',
            type: '+'
        },
        {
            name: 'Book' ,
            amount: '40' , 
            type: '-'
        },
        {
            name: 'Camera' ,
            amount: '200' ,
            type: '-'
        },
    ]
    return (
        <div className="card">
            <h2>Expense Tracker</h2>
            <Income arr = {arr}/>
            <IncomeExpense arr = {arr}/>
            <History arr = {arr}/>
            {/* <HandleClick arr = {arr}/> */}
            <AddNewTransaction arr = {arr}/>
        </div>
    )
}
export default Card;
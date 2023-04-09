import Income from "./Income";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import AddNewTransaction from "./AddNewTransactions";
import { useState } from "react";
// import { HandleClick } from "./History";

function Card(){
    const [arr , setArr] = useState([]);
    return (
        <div className="card">
            <h2>Expense Tracker</h2>
            <Income arr = {arr}/>
            <IncomeExpense arr = {arr}/>
            <History arr = {arr} setArr = {setArr}/>
            {/* <HandleClick arr = {arr}/> */}
            <AddNewTransaction arr = {arr} setArr = {setArr}/>
        </div>
    )
}
export default Card;
function IncomeExpense(props) {
    var arr = props.arr;
    var plusIncome = 0;
    var negIncome = 0;
    arr.map((value) => {
        if(value.type === '+'){
            plusIncome += parseInt(value.amount);
        }
        else {
            negIncome += parseInt(value.amount);
        }
    })
    return (
        <div className = "container">
            <div className = "container-income">
                <h3>Income</h3>
                <p>${plusIncome}.00</p>
            </div>
            <div className = "container-expense">
                <h3>Expense</h3>
                <p>${negIncome}.00</p>
            </div>
        </div>
    );
}
export default IncomeExpense;
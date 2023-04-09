function Income(props){
    var arr = props.arr;
    var income = 0;
    arr.map((value) => {
        if(value.type === '+'){
            income  = income + parseInt(value.amount);
        }
        else {
            income = income - parseInt(value.amount);
        }
    });
    // console.log(income);
    return (
        <div className = "income">
            <div className = "balance">
                <p className = "heading">YOUR BALANCE</p>
                <p className = "money">${income}.00</p>
            </div>
            {/* <div className = "income-expense"></div> */}
        </div>
    )
}
export default Income;
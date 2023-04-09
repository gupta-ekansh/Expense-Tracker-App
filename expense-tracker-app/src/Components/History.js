function History (props) {
    var arr = props.arr;
    console.log(arr);
    return (
        <>
            <p className = "history">History</p>
            <div className = "transactions">
                {
                    arr.map((value) => {
                        return (
                            <div className = "value">
                                <p className = "arr-item">
                                    <span className = "name">{value.name}</span>
                                    <span className = "type-amount">{value.type}{value.amount}</span>
                                </p>
                                {
                                    value.type === '+' ? (<div className = "type" style = {{'backgroundColor': 'limegreen'}}></div>): (<div className = "type" style = {{'backgroundColor': 'rgb(190, 39, 39)'}}></div>)
                                }
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
export default History;
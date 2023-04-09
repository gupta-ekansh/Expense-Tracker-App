// import { useState } from "react";
import { toast } from "react-hot-toast";
function History (props) {
    // const [hover , setHover] = useState(false);
    var arr = props.arr;
    const handleDelete = (value) => {
        var temp = arr.filter(item => item.key !== value.key)
        console.log(temp);
        props.setArr((prev) => temp)
        toast.success("Task Deleted Successfully");
    }
    return (
        <>
            <p className = "history">History</p>
            <div className = "transactions">
                {
                    arr.map((value) => {
                        return (
                            <div className = "value">

                                <p className = "arr-item" >
                                    <span className = "name">{value.name}</span>
                                    <button className="hover" onClick={() => handleDelete(value)}>X</button>
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
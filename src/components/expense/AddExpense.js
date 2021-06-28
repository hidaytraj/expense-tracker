import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useStores } from "../../stores";
import { monthNames } from "../../stores/constants";

const AddExpense = () => {

    const refAmount = useRef(null);

    const { expenseStore, infoStore } = useStores();

    const handlerAddExpense = () => {
        const { current } = refAmount;
        expenseStore.addExpense({ month: infoStore.month, amount: current.value });

        current.value = "";
        current.focus();
    }

    return (
        <div className="row">
            <input type="number" placeholder="enter amount" className="form-control col-sm-6" ref={refAmount} />
            <select
                className="form-control col-sm-3"
                onChange={(e) => {
                    infoStore.changeMonth(e.target.value)
                }}>
                {
                    monthNames.map((month, index) => (
                        <option key={index} value={month}>{month}</option>
                    ))
                }
            </select>
            <button onClick={handlerAddExpense} className="btn btn-primary col-sm-2">Add Expense</button>
        </div>
    )
}

export default observer(AddExpense);
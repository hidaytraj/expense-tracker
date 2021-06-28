import { observer } from "mobx-react-lite";
import { useStores } from "../../stores";
import AddExpense from "./AddExpense";

const ExpenseList = () => {

    const { expenseStore } = useStores();

    return (
        <section>
            <h1>Expense List</h1>

            <AddExpense />

            <ul className="list-group mt-4">
                {
                    expenseStore.list && expenseStore.list.length > 0 ?
                        expenseStore.list.map((exp, index) => {
                            return <li key={index}
                                className="list-group-item"
                                onClick={() => {
                                    expenseStore.deleteExpense(index);

                                }}
                            >
                                <div className="row">
                                    <div className="col-sm-6">
                                        {exp.month}
                                    </div>
                                    <div className="col-sm-6">
                                        {exp.amount}
                                    </div>
                                </div>

                            </li>
                        }) : <p className="alert alert-info">You don't have any list!</p>
                }
            </ul>


        </section>
    )
}

export default observer(ExpenseList);
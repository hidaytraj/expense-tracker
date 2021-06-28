const { makeAutoObservable } = require("mobx");

class expenseStore {
    list = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);

        console.log('  this.rootStore ', this.rootStore)
    }

    addExpense({month, amount}) {
        const expenseData = {
            amount,
            title: "",
            month
        }
        this.list.push(expenseData);
    }

    deleteExpense(index) {
        this.list = this.list.filter((item, itemIndex) => itemIndex !== index);
    }
}

export default expenseStore;
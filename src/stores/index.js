import React from "react";
import expenseStore from "./expenseStore";
import infoStore from "./infoStore";

// root store will contain multiple stores
class RootStore {

    constructor() {
        this.expenseStore = new expenseStore(this);
        this.infoStore = new infoStore(this);
    }
}

// this context will be used
const StoreContext = React.createContext(new RootStore());

// this hooks will be access from component to get stores
export const useStores = () => React.useContext(StoreContext);
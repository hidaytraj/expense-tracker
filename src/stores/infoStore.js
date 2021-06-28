import { makeAutoObservable } from "mobx";

class infoStore {
    month = "January";

    constructor(rootStore) {
        this.rootStore = rootStore;

        makeAutoObservable(this);
    }

    changeMonth(value) {
        this.month = value;
    }
}

export default infoStore;
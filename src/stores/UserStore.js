import { action, decorate, makeObservable, observable } from "mobx";

class Store {
  likesCount = 12;
  isLogged = false;

  constructor(likesCount, isLogged) {
    makeObservable(this, {
      likesCount: observable,
      isLogged: observable,
      toggleLogin: action,
      updateCount: action,
    });
  }

  updateCount() {
    this.likesCount++;
  }

  toggleLogin() {
    this.isLogged = !this.isLogged;
  }
}

const storeInstance = new Store();
export default storeInstance;

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);

    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}

const storage = new Storage(["Nanitoid", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoid", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoid", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoid", "Antigravitator", "Droid"]
storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoid", "Antigravitator", "Droid"]

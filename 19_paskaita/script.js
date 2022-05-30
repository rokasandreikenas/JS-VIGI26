// class Animal {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, color) {
//     super(name, color);
//     this.family = "rabbits";
//     this.created = Date.now();
//   }
// }

// let rabbit = new Animal("White Rabbit", "white");
// let rabbit = new Rabbit("White Rabbit", "white");

class Item {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  addToList = () => {
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.textContent = `${this.name} x ${this.count} = $${
      this.count * this.price
    }`;
    list.append(newItem);
  };
}

const submitItemForm = (event) => {
  event.preventDefault();
  const itemName = document.querySelector("input[name='item']");
  const price = document.querySelector("input[name='price']");
  const count = document.querySelector("input[name='count']");

  const item = new Item(
    itemName.value,
    Number(price.value),
    Number(count.value)
  );

  item.addToList();
};

const itemForm = document.getElementById("form-item");
itemForm.addEventListener("submit", submitItemForm);

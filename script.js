//Task 1
function sumInput() {
  let database = [];
  let data_item = document.getElementById("item").value.split(" ");
  for (let i = 0; i < data_item.length; i++) {
    if (!isNaN(data_item[i])) {
      database.push(data_item[i]);
    }
  }
  document.getElementById("array").innerText = database.join(", ");
  sum = 0;
  for (let i = 0; i < database.length; i++) {
    sum = sum + Number(database[i]);
  }
  document.getElementById("sum").innerHTML = sum;
}
//Task2
const dayInput = document.querySelector("#quantity");
const dayInputRange = document.querySelector("#quantity_range");
const model = document.querySelector("#cars");
const options = Array.from(document.querySelectorAll(".option"));
const age = dayInput.addEventListener("input", function () {
  dayInputRange.value = dayInput.value;
});
dayInputRange.addEventListener("input", function () {
  dayInput.value = dayInputRange.value;
});

model.addEventListener("change", function modelUpdate() {
  currentSet.model = model.value;
});
options.forEach((el) => {
  el.addEventListener("change", optionUpdate);
});
function optionUpdate(e) {
  e.stopPropagation(); //method prevents propagation of the same event from being called
  if (e.target.checked) {
    currentSet.option.push(e.target.id);
  } else {
    let index = currentSet.option.indexOf(e.target.id); //receiving index from array to delete in currentSet
    currentSet.option.splice(index, 1);
  }
}
const modelInfo = {
  model: { volvo: 500, saab: 800, mercedes: 1100, audi: 1400 },
  option: { option1: 100, option2: 200, option3: 300 },
};
let currentSet = {
  model: "volvo",
  option: [],
  getCarPrice() {
    return modelInfo.model[this.model];
  },
  getOptionPrice() {
    let optionPrice = 0;
    if (this.option.length !== 0) {
      for (let el of this.option) {
        optionPrice += modelInfo.option[el];
      }
    }
    return optionPrice;
  },
};
function totalPrice() {
  let sum = 0;
  var radios = document.getElementsByName("age");
  for (var radio of radios) {
    if (radio.checked) {
      sum =
        (currentSet.getCarPrice() * Number(dayInput.value) +
          currentSet.getOptionPrice()) *
        Number(radio.value);
    }
  }
  document.getElementById("total").innerHTML = sum;
}
//Task 3
//#1
let array = ["js", "css", "html"];
console.log(array[0]);
//#2
let array1 = [0, 1, false, 2, undefined, "", 3, null];
let full = array1.filter((el) => typeof el == "number" && el > 0);
console.log(full);
//#3
let array2 = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];
i = 0;
for (let item of array2) {
  if (item.length > 3) {
    console.log(i);
  } else {
    i++;
  }
}

const bigSize = {
  price:100,
  callories:40,
}
const mediumSize = {
  price:75,
  callories:30,
}
const smallSize = {
  price:50,
  callories:20,
}

const cheese = {
  price: 10,
  callories: 20,
};

const salat = {
  price: 20,
  callories: 5,
};

const potato = {
  price: 15,
  callories: 10,
};

const seasoning = {
  price: 15,
  callories: 0,
};

const moyo = {
  price: 20,
  callories: 5,
};


function Hamburger(name) {
  this.name = name;
 
  this.addModifier = function(mod) {
    if(mod) {
      return `Price: ${this.name.price + mod.price} Callories: ${this.name.callories + mod.callories}`
    } else {
      return `Price: ${this.name.price} Callories: ${this.name.callories}`
    }
    
    
  }
}

const big = new Hamburger(bigSize)

console.log(big.addModifier())

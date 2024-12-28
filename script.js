let ArrProducts = [
  {
    id: 1,
    name: "Html",
    image: "img1.png",
    price: "1000",
    rating: "5",
  },
  {
    id: 2,
    name: "Css",
    image: "img2.png",
    price: "2000",
    rating: "3",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "img3.png",
    price: "3000",
    rating: "4",
  },
  {
    id: 4,
    name: "Jquery",
    image: "img4.png",
    price: "4000",
    rating: "3",
  },
  {
    id: 5,
    name: "React",
    image: "img5.png",
    price: "5000",
    rating: "5",
  },
  {
    id: 6,
    name: "Angular",
    image: "img6.png",
    price: "6000",
    rating: "4",
  },
];

const body = document.querySelector("body");
const products = document.querySelector(".products");
const shoppingBasket = document.querySelector(".shoppingBasket");
const close = document.querySelector(".close");
const productList = document.querySelector(".productList");
const quantity = document.querySelector(".quantity");
const total = document.querySelector(".total");

let checkOutList = [];

shoppingBasket.onclick = () => {
  body.classList.add("active");
};

close.onclick = () => {
  body.classList.remove("active");
};

function onInIt() {
  ArrProducts.forEach((item, key) => {
    let div = document.createElement("div");
    div.classList.add("item");

    let star = "";
    for (let i = 1; i <= item.rating; i++) {
      star += `<i class="fa fa-star"></i>`;
    }

    div.innerHTML = `
    <img src="images/${item.image}"/>
    <div class="name">${item.name}</div>
    <div class="star"> ${star} </div>
    <div class="price"> <small> ₹ </small> ${item.price} </div>
    <button onClick="addToCart(${key})"> <i class="fa fa-cart-plus"></i> Add to card</button>
    `;

    products.appendChild(div);
  });
}
onInIt();

function addToCart(id) {
  if (checkOutList[id] == null) {
    checkOutList[id] = ArrProducts[id];
    checkOutList[id].quantity = 1;
  } else {
    checkOutList[id].quantity += 1;
  }
  reloadCard();
}

function reloadCard() {
  productList.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  checkOutList.forEach((item, key) => {
    count += item.quantity;
    totalPrice += parseInt(item.price * item.quantity);

    let li = document.createElement("li");
    li.innerHTML = `
    <img src="images/${item.image}"/>
    <div>${item.name}</div>
    <div>${item.price}</div>
    <div>
      <button onclick="changeQuantity(${key},${item.quantity - 1})" >-</button>
      <div class="count">${item.quantity}</div>
      <button onclick="changeQuantity(${key},${item.quantity + 1})" >+</button>
    </div>
    `;

    productList.appendChild(li);
  });
  quantity.innerHTML = count;
  total.innerHTML = `<small>Subtotal (${count} item) ₹  </small>` + totalPrice;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete checkOutList[key];
  } else {
    checkOutList[key].quantity = quantity;
  }
  reloadCard();
}

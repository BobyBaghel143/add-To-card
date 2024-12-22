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
    rating: "5",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "img3.png",
    price: "3000",
    rating: "5",
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

let body = document.querySelector("body");
let products = document.querySelector(".products");

function onInIt() {
  ArrProducts.forEach((item, key) => {
    let div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
    <img src="images/${item.image}"/>
    <div class="name">${item.name}</div>
    <div class="price"> <small> ₹ </small> ${item.price} </div>
    <button onClick="addToCart(${key})"> <i class="fa fa-cart-plus"></i> Add to card</button>
    `;
    
    products.appendChild(div);
});
}
onInIt();

function addToCart(id) {
    // console.log(checkOutList(id))
    if (checkOutList[id] == null) {
        checkOutList[id] = ArrProducts[id];
    }
}
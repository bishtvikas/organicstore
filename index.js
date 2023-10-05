const body = document.getElementsByTagName("body");
const cartBtnNotfication = document.querySelector(".cartBtnNotfication");
const cartList = [];
const mainCartContent = document.querySelector(".mainCartContent");
const everything_main_products = document.querySelector(
  ".everything-main-products"
);
const bestsellingproductscards = document.querySelector(
  ".bestsellingproductscards"
);

const trendingproductscards = document.querySelector(".trendingproductscards");
const sidebarBtn = document.querySelector(".sidebarBtn");
const sidebar = document.querySelector(".sidebar");
const sidebarClosebtn = document.querySelector(".sidebarClosebtn");
const sidebar_container = document.querySelector(".sidebar-container");
const RemoveItemBtn = document.getElementsByClassName("RemoveItemBtn");
let productDetailsInCart = [];

let productDetails = [
  {
    id: 1,
    quantity: 1,
    categories: "grocery",
    img: "./images/card1.jpg",
    name: "coffeee",
    rating: 5,
    price: "5",
  },
  {
    id: 2,
    quantity: 1,
    categories: "juice",
    img: "./images/card2.jpg",
    name: "chai",
    rating: 5,
    price: "2",
  },
  {
    id: 3,
    quantity: 1,
    categories: "grocery",
    img: "./images/card3.jpg",
    name: "mojito",
    rating: 5,
    price: "3",
  },
  {
    id: 4,
    quantity: 1,
    categories: "grocery",
    img: "./images/card4.jpg",
    name: "beer",
    rating: 5,
    price: "4",
  },
  {
    id: 5,
    quantity: 1,
    categories: "grocery",
    img: "./images/2.jpg",
    name: "vine",
    rating: 5,
    price: "6",
  },
  {
    id: 6,
    quantity: 1,
    categories: "grocery",
    img: "./images/3.jpg",
    name: "alchohol",
    rating: 5,
    price: "7",
  },
  {
    id: 7,
    quantity: 1,
    categories: "grocery",
    img: "./images/4.jpg",
    name: "alchohol",
    rating: 5,
    price: "8",
  },
  {
    id: 8,
    quantity: 1,
    categories: "grocery",
    img: "./images/5.jpg",
    name: "alchohol",
    rating: 5,
    price: "9",
  },
  {
    id: 9,
    quantity: 1,
    categories: "grocery",
    img: "./images/3.jpg",
    name: "alchohol",
    rating: 5,
    price: "10",
  },
  {
    id: 10,
    quantity: 1,
    categories: "grocery",
    img: "./images/4.jpg",
    name: "alchohol",
    rating: 5,
    price: "15.99",
  },
  {
    id: 11,
    quantity: 1,
    categories: "grocery",
    img: "./images/5.jpg",
    name: "alchohol",
    rating: 5,
    price: "15.99",
  },
];

// *******************************************************************

function renderTrendingProduct(index) {
  const htmldata = ` 
    <div class="likeandaddcart">
     <i class="ri-heart-fill productlikeBtn"></i>
   <i class="ri-shopping-cart-fill addtocarticonBtn" onclick = "addtocart(${productDetails[index].id})"></i>
    </div>
    <img src="${productDetails[index].img}" alt="" />
    <h6>${productDetails[index].categories}</h6>
    <a href="">${productDetails[index].name}</a>
    <span>
      <i class="ri-star-line"></i>
      <i class="ri-star-line"></i>
      <i class="ri-star-line"></i>
      <i class="ri-star-line"></i>
      <i class="ri-star-line"></i>
    </span>
    <i class="ri-money-dollar-circle-fill">${productDetails[index].price}</i>
     `;

  const cardSpan = document.createElement("span");
  cardSpan.classList.add("card");

  cardSpan.insertAdjacentHTML("afterbegin", htmldata);
  document.body.querySelector(".trendingproductscards").appendChild(cardSpan);
}

 

 
 function deleteItem(index , id){

  
console.log("before deleting productDetailsInCart:", productDetailsInCart)
 
console.log("before deleting cartList:" , cartList)

  // ! for CRUD operation in JS ARRAYS, splice is the best method
  // !syntax = array.splice(index_where_pointer_will_be , count_of_delete , New_data_to_update)
  console.log(`  deleting at ${index}... `)
  console.log(`  deleting at ${id}... `)
 
  productDetailsInCart.splice(index,1);

  // ! Rendering prodcuctDetailsInCart array to show all cart elements
  mainCartContent.innerHTML = "";

  productDetailsInCart.forEach((item, index) => {
    cartData = document.createElement("div");
    cartData.classList.add("cartData", "merii-font");

    cartData.innerHTML += `

    <img src="${productDetailsInCart[index].img}"></img>
    <span>coffee</span>
    <span class="unitprice">$${productDetailsInCart[index].price}</span>
    <span class="unit">${productDetailsInCart[index].quantity}</span>
    <button class="RemoveItemBtn" onclick = "deleteItem(${index})">Remove</button>`;

    document.querySelector(".mainCartContent").appendChild(cartData);
  });


 
   
 }
 

function addtocart(id) {
 
// ! cartlist is an array, which will hold only the ids of the card clicked by user.
// ! productDetails is an array of objects, which will hold the object/details of the id's present in cartList array.


// ! addtocart() will be invoked as part of onclick function , mentioned in embedded HTML in createCard() function. 


// ! Logic : if cartList array is empty then simply add that card ID into cartList array.
// ! also add that ids detail/object into productDetails array.

// ! if cartList array is not empty , then traverse through cartlist array and find if the clicked card's id 
// ! already present in carList array or not.

// ! if the clicked card's id is not already present then add it to cartList array.
// ! also add that ids detail/object into productDetails array.

// ! if the clicked card's id is already present then dont add it to cartList array.
// ! only add that ids detail/object into productDetails array, with increase quantity.

  if (cartList.length == 0) {
    cartList.push(id);
    let index = id - 1;
    let obj = {
      id: productDetails[index].id,
      quantity: 1,
      categories: productDetails[index].categories,
      img: productDetails[index].img,
      name: productDetails[index].name,
      rating: productDetails[index].rating,
      price: productDetails[index].price,
    };
    productDetailsInCart.push({ ...obj });
  } 
  else {
    let flag = 0;
    // function to check cartList array
    for (let index = 0; index < cartList.length; index++) {
      if (cartList[index] == id) {
        flag++;
      }
    }
    if (flag > 0) {
      for (let key = 0; key < productDetailsInCart.length; key++) {
        if (productDetailsInCart[key].id == id) {
          productDetailsInCart[key].quantity += 1;
        }
      }
    } else {
      cartList.push(id);
      let index = id - 1;
      let obj = {
        id: productDetails[index].id,
        quantity: 1,
        categories: productDetails[index].categories,
        img: productDetails[index].img,
        name: productDetails[index].name,
        rating: productDetails[index].rating,
        price: productDetails[index].price,
      };
      productDetailsInCart.push({ ...obj });
    }
  }

// ! Rendering prodcuctDetailsInCart array to show all cart elements
  mainCartContent.innerHTML = "";

  productDetailsInCart.forEach((item, index) => {
    cartData = document.createElement("div");
    cartData.classList.add("cartData", "merii-font");

    cartData.innerHTML += `

    <img src="${productDetailsInCart[index].img}"></img>
    <span>coffee</span>
    <span class="unitprice">$${productDetailsInCart[index].price}</span>
    <span class="unit">${productDetailsInCart[index].quantity}</span>
    <button class="RemoveItemBtn" onclick = "deleteItem(${index,id})">Remove</button>`;
 // index = for productDetailsInCart array
// id = for cartList array
    document.querySelector(".mainCartContent").appendChild(cartData);
  });

  let para = document.createElement("p");
  para.classList.add("cartBtnNotfication_number");

  notificationData = `${productDetailsInCart.length}`;

  para.insertAdjacentHTML("afterbegin", notificationData);
  document.querySelector(".cartBtnNotfication").appendChild(para);
 
  // ! calling function to set the price in total
  function setTotalPrice() {
     let eachItemPrice = 0;
    let totalPrice = 0;
 

    // ! function to calculate total price
    productDetailsInCart.forEach((item, index) => {
      eachItemPrice = item.quantity * item.price;

      totalPrice += eachItemPrice;
    });
 
    let totalpricediv = document.createElement("div");
    let totalPriceData = `<h1 class="merii-font">Total $${totalPrice}</h1>`;
    // console.log(productDetailsInCart)

    totalpricediv.insertAdjacentHTML("afterbegin", totalPriceData);

    //  sidebar_container.appendChild(totalpricediv);
    mainCartContent.appendChild(totalpricediv);
  }

  setTotalPrice();

  console.log(productDetailsInCart)

}

/** 
  *! function that will create card , and will run the number of time card product are present in productDetails array
   
   */
function createCard(index) {
  const htmldata = ` 
  <div class="likeandaddcart">
   <i class="ri-heart-fill productlikeBtn"></i>
   <i class="ri-shopping-cart-fill addtocarticonBtn" onclick = "addtocart(${productDetails[index].id})"></i>
   </div>
  <img src="${productDetails[index].img}" alt="" />
  <h6>${productDetails[index].categories}</h6>
  <a href="">${productDetails[index].name}</a>
  <span>
    <i class="ri-star-line"></i>
    <i class="ri-star-line"></i>
    <i class="ri-star-line"></i>
    <i class="ri-star-line"></i>
    <i class="ri-star-line"></i>
  </span>
  <i class="ri-money-dollar-circle-fill">${productDetails[index].price}</i>
   `;

  const cardSpan = document.createElement("span");
  cardSpan.classList.add("card");

  cardSpan.insertAdjacentHTML("afterbegin", htmldata);

  if (everything_main_products) {
    document.body
      .querySelector(".everything-main-products")
      .appendChild(cardSpan);
  } else if (bestsellingproductscards) {
    document.body
      .querySelector(".bestsellingproductscards")
      .appendChild(cardSpan);

    renderTrendingProduct(index + 4);
  }
}

/**
 * !  validation to run createCard function only if everything_main_products_box class box is present which is present in everthing,groceries,juice html page
 * !  but not in home page , so we dont want this function to run and throw error
 */

if (everything_main_products) {
  productDetails.forEach((item, index) => {
    createCard(index);
  });
} else if (bestsellingproductscards) {
  for (let index = 0; index < 4; index++) {
    createCard(index);
  }
}

// ! *******************************************************************

// ! Sidebar menu functionality
const addSidebarVisible = () => {
  // console.log("working");
  sidebar.classList.add("sidebar-visible");
};

const removeSidebarVisible = () => {
  sidebar.classList.remove("sidebar-visible");
};
sidebarBtn.addEventListener("click", addSidebarVisible);

sidebarClosebtn.addEventListener("click", removeSidebarVisible);

// ! *******************************************************************
// ! productlikeBtn & addtocarticonBtn  functionality
 
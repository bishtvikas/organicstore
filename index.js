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
// const product_page_main_box = document.querySelector(".product-page-main");
// let cardboxclass;
let productDetailsInCart = [];
let productDetails = [
  {
    id: 1,
    quantity: 1,
    categories: "grocery",
    img: "./images/card1.jpg",
    name: "coffeee",
    rating: 5,
    price: "20.99",
  },
  {
    id: 2,
    quantity: 1,
    categories: "juice",
    img: "./images/card2.jpg",
    name: "chai",
    rating: 5,
    price: "19.99",
  },
  {
    id: 3,
    quantity: 1,
    categories: "grocery",
    img: "./images/card3.jpg",
    name: "mojito",
    rating: 5,
    price: "15.99",
  },
  {
    id: 4,
    quantity: 1,
    categories: "grocery",
    img: "./images/card4.jpg",
    name: "beer",
    rating: 5,
    price: "15.99",
  },
  {
    id: 5,
    quantity: 1,
    categories: "grocery",
    img: "./images/2.jpg",
    name: "vine",
    rating: 5,
    price: "15.99",
  },
  {
    id: 6,
    quantity: 1,
    categories: "grocery",
    img: "./images/3.jpg",
    name: "alchohol",
    rating: 5,
    price: "15.99",
  },
  {
    id: 7,
    quantity: 1,
    categories: "grocery",
    img: "./images/4.jpg",
    name: "alchohol",
    rating: 5,
    price: "15.99",
  },
  {
    id: 8,
    quantity: 1,
    categories: "grocery",
    img: "./images/5.jpg",
    name: "alchohol",
    rating: 5,
    price: "15.99",
  },{
    id: 9,
    quantity: 1,
    categories: "grocery",
    img: "./images/3.jpg",
    name: "alchohol",
    rating: 5,
    price: "15.99",
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
  }
];

// *******************************************************************
// productDetails.forEach((value)=>{
//   console.log("productDetails quantity" , value.quantity)

// })

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

function addtocart(id) {
  // console.log("function starting");
  // console.log("productDetails ", productDetails);
  // console.log("product id", id);
  // console.log("cart list", cartList);
  // console.log("cart list length", cartList.length);

  // console.log(`typeof id is ${typeof id}`);

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
  } else {
    let flag = 0;
    // function to check cartList array
    for (let index = 0; index < cartList.length; index++) {
      // console.log(
      //   `foreach loop running, item : ${cartList[index]} and id: ${id}`
      // );
      if (cartList[index] == id) {
        // console.log(
        //   `click id ${id} already present in cartlist : ${cartList} at index ${index}`
        // );
        // console.log(cartList[index] == id);
        flag++;
        // console.log(`flat ++ : ${flag}`);
      } else {
        // console.log(
        //   `click id ${id} not present in cartlist : ${cartList} at index ${index}`
        // );
        // console.log(cartList[index] == id);
        // console.log(`flat ++ : ${flag}`);
      }
    }
    if (flag > 0) {
      // console.log(
      //   `flag is more than 0, means id already present in cartlist , no need to push again`
      // );
      for (let key = 0; key < productDetailsInCart.length; key++) {
        // console.log("running for loop in productdetailsincart");
        // console.log(productDetailsInCart[key].id == id);
        // console.log(
        //   `click id ${id} and productDetailsInCart[id] : ${productDetailsInCart[key]} `
        // );
        // console.log(productDetailsInCart[key].id);
        if (productDetailsInCart[key].id == id) {
          productDetailsInCart[key].quantity += 1;
          // console.log(
          //   `click id ${id} present in productDetailsInCart : ${productDetailsInCart} at index ${key}`
          // );
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

  // console.log("function ending");
  // console.log("productDetails ", productDetails);
  // console.log("product id", id);
  // console.log("cart list", cartList);
  // console.log("cart list length", cartList.length);
  // console.log("productDetailsInCart", productDetailsInCart);

  let mainCartContent = document.querySelector(".mainCartContent");
   mainCartContent.innerHTML = "";
  
   productDetailsInCart.forEach((item, index) => {
     
     cartData = document.createElement("div");
    cartData.classList.add("cartData", "merii-font");

     
    cartData.innerHTML += `
    <img src="${productDetailsInCart[index].img}"></img>
    <span>coffee</span>
    <span class="unitprice">$${productDetailsInCart[index].price}</span>
    <span class="unit">${productDetailsInCart[index].quantity}</span>
    <button class="RemoveItemBtn">remove</button> `;
    
    document.querySelector(".mainCartContent").appendChild(cartData);
    
  });

  let para = document.createElement("p");
  para.classList.add("cartBtnNotfication_number");

   notificationData = `${productDetailsInCart.length}`

   para.insertAdjacentHTML("afterbegin" , notificationData)
  document.querySelector(".cartBtnNotfication").appendChild(para);
  console.log(cartBtnNotfication);
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
} else {
  // console.log("everything_main_products class box not present in this page");
  // console.log("bestsellingproductscards class box not present in this page");
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

// const productlikeBtn = document.querySelector(".productlikeBtn");
// const addtocarticonBtn = document.querySelectorAll(".addtocarticonBtn");
// let cartList = [];

// function handleClick(item, index, event) {
//   console.log(item);
//   console.log(index);
//   console.log(event);
//   console.log(cartList);

//   if (cartList.length == 0) {
//     cartList.push(productDetails[index]);
//     console.log(cartList);
//   } else {
//     console.log(
//       `cartlist length is ${cartList.length} and greater than 0, so need to check if click item is already present in cartlist`
//     );
//     console.log("searching in cartlist array");
//     for (var i = 0; i < cartList.length; i++) {
//       if (cartList[i].name == productDetails[index].name) {
//         console.log(
//           `${cartList[i].name} is equal to ${productDetails[index].name}`
//         );
//         cartList[i].quantity++;

//       }
//       else {
//         console.log(
//           `${cartList[i].name} is not equal to ${productDetails[index].name}`
//         );
//         cartList.push(productDetails[index]);
//         i = 0;

//       }

//     }
//     console.log(cartList);

//   }

// addtocarticonBtn.forEach((item,index)=>{
//   addtocarticonBtn[index].addEventListener('click' , (event) => {

//     console.log("handleclick called")
//     handleClick(item,index,event);
//   })
// })

//Importing & Exporting Vanilla JS

//Local Storage

//Normally keys & values
/* 
const addToLocalStorage = id => {
  const exist = localStorage.getItem(id);
  console.log(exist);
  if (!exist) {
    localStorage.setItem(id, 1);
  } else {
    const newCount = parseInt(exist) + 1;
    localStorage.setItem(id, newCount);
  }
};
 */

//Employee Calls Quantity in an object in Local Storage

const addToLocalStorage = (id) => {
  // const exist = localStorage.getItem('call_cart');
  const exists = getCalls();
  let call_cart = {};

  if (!exists) {
    call_cart[id] = 1;
  }
  //////////////////////////////////
  else {
    call_cart = JSON.parse(exists);
    //Nested Condition //////////////////////////////
    if (call_cart[id]) {
      const newCount = call_cart[id] + 1;
      call_cart[id] = newCount;
    } else {
      call_cart[id] = 1;
    }
  }
  ////////////////////////////////
  updateCalls(call_cart);
};

const getCalls = () => localStorage.getItem("call_cart");
const updateCalls = (cart) => {
  localStorage.setItem("call_cart", JSON.stringify(cart));
};

//Employee Calls Deletion

const removeCall = (id) => {
  const exists = getCalls();
  if (!exists) {
  } else {
    const call_cart = JSON.parse(exists);
    delete call_cart[id];
    updateCalls(call_cart);
  }
};

export { addToLocalStorage, removeCall };

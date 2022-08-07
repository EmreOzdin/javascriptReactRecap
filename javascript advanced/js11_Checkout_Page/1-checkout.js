const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
    //setItem to localStorage
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    //setItem to sessionStorage
    // sessionStorage.setItem("taxRate", taxRate);
    // sessionStorage.setItem("shippingPrice", shippingPrice);
});

//capturing method 


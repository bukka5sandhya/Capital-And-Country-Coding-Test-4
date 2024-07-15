let countries = {
    paris: "France",
    london: "United Kingdom",
    newYork: "USA",
    newDelhi: "India"
};

let capitalEle = document.getElementById("capital");
let countryEle = document.getElementById("country"); 
capitalEle.addEventListener("change",function(){
    let capitalValue = capitalEle.value; 
    countryEle.textContent = countries[capitalValue];
  countryEle.classList.add("paragraph");
});
// JavaScript code for your index.html

// JavaScript object with product information
const products = [
    {
        name: "Hoodie 1",
        price: "$29.99",
        description: "This is a comfortable and stylish hoodie with a classic design. It's available in various sizes and colors to suit your style.",
        quantity: 5
    },
    {
        name: "Hoodie 2",
        price: "$39.99",
        description: "This hoodie features a trendy design with a hood and front pocket. It's perfect for casual wear and is available in various colors.",
        quantity: 9
    },
    {
        name: "Hoodie 3",
        price: "$49.99",
        description: "This premium hoodie with specific print is made with high-quality materials and offers exceptional warmth and comfort. Available in limited quantities.",
        quantity: 3
    }
];


let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add(".open-popup");
}
function closePopup(){
  popup.classList.remove(".open-popup");
}




const toTop = document.querySelector(".to-toTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >100) {
    toTop.classlist.add("active");
  }   else {
    toTop.classList.remove("active");
  }
})


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

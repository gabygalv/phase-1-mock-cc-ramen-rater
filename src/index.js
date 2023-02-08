// write your code here
//when the page loads (defer)
//request the data from the server
//get all of the ramen objects
//display the image for each ramen using an img tag inside the #ramen-menu div

const ramenMenu = document.querySelector("#ramen-menu");
const ramenURL = "http://localhost:3000/ramens";


fetch(ramenURL)
    .then((response) => response.json())
    .then((results) => renderRamens(results));

function renderRamens(ramensImgUrl) {
   handleRamenClick(ramensImgUrl[0]);
   ramensImgUrl.forEach(addRamenImg); 
};

function addRamenImg(ramen) {
    let ramenImg = document.createElement("img");
    ramenImg.src = ramen.image;
    ramenImg.details = ramen
    ramenImg.addEventListener("click", () => handleRamenClick(ramen));
    ramenMenu.appendChild(ramenImg);
};

function handleRamenClick(ramen) {
    console.log(ramen);
    const ramenName = document.querySelector(".name")
    ramenName.innerText = ramen.name;
    const ramenRestaurant = document.querySelector(".restaurant")
    ramenRestaurant.innerText = ramen.restaurant;
    const ramenPic = document.querySelector(".detail-image")
    ramenPic.src = ramen.image;
    const ramenRating = document.querySelector("#rating-display")
    ramenRating.innerText = ramen.rating;
    const ramenComments = document.querySelector("#comment-display")
    ramenComments.innerText = ramen.comment;
};

const ramenForm = document.querySelector("#new-ramen");

ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#new-name").value;
    const restaurant = document.querySelector("#new-restaurant").value;
    const image = document.querySelector("#new-image").value;
    const rating = document.querySelector("#new-rating").value;
    const comment = document.querySelector("#new-comment").value;
    const newRamen = {name, restaurant, image, rating, comment};
    console.log(newRamen);
    addRamenImg(newRamen);

});

//click on an img and see all the info about that ramen
//displayed in the #ramen-details div + comments and ratings

// ramenMenu.addEventListener("click", (event) => {
//     if (event.target.tagName === "IMG") {
//         let ramenId = event.target.id;
//         let clickedRamenUrl = "http://localhost:3000/ramens/" + ramenId;
//         fetch(clickedRamenUrl)
//            .then((response) => response.json())
//            .then((ramen) => console.log(ramen));
//     }
// });
// write your code here 
// - See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,
//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.

//Step 1 Pseudocode
//get the all the ramen
//grab the container ramen-menu
//iterate through the ramen array
//create a new element for each image
//use interpolation to 
//display the images from the server into the ramen-menu div


// Define a function to fetch ramen data from an API endpoint
function getRamen(){
    // Fetch data from the specified API endpoint
    fetch('http://localhost:3000/ramens')
     // Once the data is retrieved successfully, parse it to JSON
    .then(res => res.json())
    // Once the JSON data is parsed, pass it to the renderRamen function for rendering
    .then(ramens => renderRamen(ramens))
    // Catch and handle any errors that occur during the fetch or parsing process
    .catch(error => console.log(error))

    
}

// Define a function to render ramen images onto the HTML page
function renderRamen(ramens){
    // Iterate through each ramen object in the provided array
    ramens.forEach(ramen => renderNewRamen(ramen));
};

// Create a new ramen after submitting the new-ramen form. The new ramen 
// should be added to the#ramen-menu div. The new ramen does not need to persist; 
// in other words, if you refresh the page, it's okay that the new ramen is no 
// longer on the page.



function showDetails(ramen) {
    const cardImg = document.querySelector('.detail-image');
    const name = document.querySelector('.name');
    const restaurant = document.querySelector('.restaurant');
    const rating = document.getElementById('rating-display');
    const comment = document.getElementById('comment-display');
    // Set details for the clicked ramen item
    cardImg.src = ramen.image;
    name.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    rating.textContent = ramen.rating;
    comment.textContent = ramen.comment
}

//Step 3 Pseudocode
// Add an event listener to the form submission.
// Prevent the default form submission behavior.
// Retrieve the values entered in the form fields.
// Create a new ramen object with those values.
// Render the new ramen item onto the page.

function getNewRamen(){
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        console.log('Form Submitted');
        // Retrieve values entered in the form fields
        const newName = document.getElementById('new-name').value;
        const newRestaurant = document.getElementById('new-restaurant').value;
        const newImage = document.getElementById('new-image').value;
        const newRating = document.getElementById('new-rating').value;
        const newComment = document.getElementById('new-comment').value;
        // Create a new ramen object with the retrieved values
        const newRamen = {
            name: newName,
            restaurant: newRestaurant,
            image: newImage,
            rating: newRating,
            comment: newComment
        };
        renderNewRamen(newRamen);
    })
}

function renderNewRamen(ramen){
    // Get a reference to the HTML element that will contain the ramen images
    const menuContainer = document.getElementById('ramen-menu');
    // Create a new HTML element to represent the new ramen image
    const menuImg = document.createElement('div');
    // Set the inner HTML of the created element to display the ramen image
    menuImg.innerHTML = `
    <img class='menu-img' src='${ramen.image}' alt=""/>
    `;
    // Append the newly created element (representing the new ramen image) to the container
    menuContainer.appendChild(menuImg);
    // Add event listener to the newly created image
    menuImg.addEventListener('click', () => showDetails(ramen));
}
// Invoke the getRamen function to initiate the process of fetching and rendering ramen data
getRamen();
getNewRamen();
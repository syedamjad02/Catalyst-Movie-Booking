// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
const movieContainer = document.getElementById("movieList");



let htmlString = "";

const movieDetails = [
  {
    name : "Jurrasic Park",
    amount : "₹150"
  },
  {
    name : "Pathaan",
    amount : "₹170"
  },
  {
    name : "Jailer",
    amount : "₹200"
  },

]

for(let i=1;i<=3;i++){
  htmlString += `
  <div class="current-movie">
                    <div class="cm-img-box">
                        <img class="poster" src="images/movie${i}.jpg" alt="">
                    </div>
                    <h3 class="movie-title">${movieDetails[i-1].name}</h3>
                    <p class="screen-name">Screen : Platinum</p>
                    <div class="booking">
                        <h2 class="price">${movieDetails[i-1].amount}</h2>
                        <a href="seat-selection.html" class="btn">Buy Tickets</a>
                    </div>
  </div>
  `
}

movieContainer.innerHTML = htmlString;
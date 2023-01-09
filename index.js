//get anime data
let animeList = [];
const fetchAnime = async () => {
  const response = await fetch("https://yanime.onrender.com/anime/admin", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
fetchAnime();
//get elements from html

const contentContainer = document.getElementById("randomize");

//fetch genre list

const temporaryGenre = [
  "Romance",
  "Comedy",
  "Seinen",
  "Isekai",
  "Mecha",
  "Sports",
  "Psychological",
  "Horror",
  "Adventure",
  "Scifi",
  "Slice-of-life",
  "Shoujo",
  "Shonen",
];

//generate 4 random genre
const getRandom4Nums = [];
while (getRandom4Nums.length < 4) {
  let r = Math.floor(Math.random() * temporaryGenre.length) + 0;
  if (getRandom4Nums.indexOf(r) === -1) getRandom4Nums.push(r);
}
const random4Genre = getRandom4Nums.map((num) => {
  return temporaryGenre[num];
});

//generate components based on genre

const genreComponent = random4Genre.map((genre) => {
  return `<div class = "${genre}">
        <h3>Top Anime in ${genre}</h3>
        <div class="anime-list-by-genre"></div> 
    </>`;
});

contentContainer.innerHTML = genreComponent.join("");

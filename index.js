const contentContainer = document.getElementById("randomize");

//fetch genre list

const temporaryGenre = [
  "romance",
  "comedy",
  "seinen",
  "isekai",
  "mecha",
  "sports",
  "psychological",
  "horror",
  "adventure",
  "scifi",
  "slice-of-life",
  "shoujo",
  "shonen",
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
console.log(random4Genre);

//generate components based on genre

const genreComponent = random4Genre.map((genre) => {
  return `<div class = "${genre}">
        <h3>${genre}</h3>
        <div class="anime-list-by-genre"></div> 
    </>`;
});

contentContainer.innerHTML = genreComponent.join("");

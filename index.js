//get anime data
const fetchAnime = async () => {
  try {
    const response = await fetch("https://yanime.onrender.com/anime/admin", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // Do something with the data here
    console.log(data);
    getAnimeData(data);
  } catch (error) {
    console.error(error);
  }
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

const genreComponent = () => {
  random4Genre.map((genre) => {
    const genreContainer = document.createElement("div");
    genreContainer.setAttribute("class", genre);

    const genreHeader = document.createElement("h3");
    genreHeader.setAttribute("class", "genre-header");

    const genreContents = document.createElement("div");
    genreContents.setAttribute("class", "genre-contents");

    genreContainer.appendChild(genreHeader, genreContents);
    contentContainer.appendChild(genreContainer);
  });
};

genreComponent();

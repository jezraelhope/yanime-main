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
    genreComponent(data);
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

const genreComponent = (data) => {
  random4Genre.map((genreName) => {
    const genreContainer = document.createElement("div");
    genreContainer.setAttribute("class", `${genreName} genre-container`);

    const genreHeader = document.createElement("h3");
    genreHeader.setAttribute("class", "genre-header");
    const genreText = document.createTextNode(`Top Anime in ${genreName}`);
    genreHeader.appendChild(genreText);

    const genreContents = document.createElement("div");
    genreContents.setAttribute("class", "genre-contents");

    //get animes per genre
    data.filter((anime) => {
      if (genreName.toLowerCase() === anime.genre) {
        const animeContainer = document.createElement("div");
        animeContainer.setAttribute("class", "anime-container");

        const imageContainer = document.createElement("div");
        imageContainer.setAttribute("class", "image-container");

        const animeImage = document.createElement("img");
        animeImage.setAttribute("src", anime.image);
        animeImage.setAttribute("alt", `${anime.title} image`);

        imageContainer.appendChild(animeImage);

        const animeTitleTag = document.createElement("h4");
        const animeTitle = document.createTextNode(anime.title);
        animeTitleTag.appendChild(animeTitle);

        animeContainer.appendChild(imageContainer);
        animeContainer.appendChild(animeTitleTag);
        genreContents.appendChild(animeContainer);
      }
    });

    genreContainer.appendChild(genreHeader);
    genreContainer.appendChild(genreContents);
    contentContainer.appendChild(genreContainer);
  });
};

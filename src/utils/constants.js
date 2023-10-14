export const LOGO =
  "https://ik.imagekit.io/ansonsaverdsouza/miniflix_SqzGGKrdL.png?updatedAt=1697304197861";

export const PROFILE_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const CARD_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "greek", name: "Greek" },
];


export const GPT_KEY = process.env.REACT_APP_GPT_KEY;

export  const GPT_PROMPT_TEXT = {
  firstpart : "Act as a movie recommendation system and suggest some movies as per the query : ",
  secondpart :"Only give  5 movie comma seperated like the example given ahead. example result:sunaona sum, hero of the class, titanic, kgf, best of all people. movies movie film movie."
}


export const GUEST_USER = process.env.REACT_APP_GUEST_USER;
export const GUEST_PASS = process.env.REACT_APP_GUEST_PASSWORD;

// if incase user as for specific number of movies then give them as per example
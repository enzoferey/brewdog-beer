import axios from "axios";

export const getAllBeers = () => axios.get("https://api.punkapi.com/v2/beers ");

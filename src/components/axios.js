import axios from "axios"
const instans =axios.create({
baseURL:"https://api.themoviedb.org/3",
});
export default instans;


import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-8d5fc-default-rtdb.firebaseio.com";

export default instance;
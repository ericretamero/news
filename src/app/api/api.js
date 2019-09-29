import axios from "axios";
import { apiKey } from '../core/constants/properties';

export default {
    get(url, cb) {
        axios
            .get(this.addKey(url))
            .then(response => cb(response.data))
    },
    addKey(url) {
        return `${url}api-key=${apiKey}`
    }
}
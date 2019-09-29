import { enviroment } from '../../../enviroments/enviroment';

import api from "../../api/api";

export default {
    getNews(params, cb) {
        const queryParams = this.setQueryParams(params);
        const URL = `${enviroment.ROOT_API}/search?${queryParams}`;
        return api.get(URL, cb)
    },
    setQueryParams(params) {
        let queryParams = '';
        for (let item in params) {
            if (params[item]) {
                queryParams += item + '=' + params[item] + '&'
            }
        }
        return queryParams;
    }
}
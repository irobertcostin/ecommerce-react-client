import { message } from "antd";


export default class Data {


    api(path, method = "GET", body = null) {
        const url = "http://localhost:4242" + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }

        if (body != null) {
            options.body = JSON.stringify(body);
        }
        return fetch(url, options)
    }


}
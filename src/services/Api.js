import { message } from "antd";


export default class Data {





    api(path, method = "GET", body = null) {
        const url = "http://localhost:4242/api/v1" + path;

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


    async getProducts() {

        try {
            let data = await this.api('/products')

            if (data.status === 200) {
                let resp = await data.json();
                return resp;
            } else {
                let resp = await data.json();
                message.error(resp.error.message, [3], console.log(""))
            }

        } catch (error) {
            message.error(error, [3], console.log(error))
        }


    }


    async getCustomers() {

        try {
            let data = await this.api('/customers')

            if (data.status === 200) {
                let resp = await data.json();
                return resp;
            } else {
                let resp = await data.json();
                console.log(resp);
            }

        } catch (error) {
            message.error(error, [3], console.log(error))
        }


    }



    async getCustomerByEmail(email) {

        try {
            let data = await this.api('/customers')

            if (data.status === 200) {
                let resp = await data.json();
                return resp;
            } else {
                let resp = await data.json();
                message.error(resp.error.message, [3], console.log(""))
            }

        } catch (error) {
            message.error(error, [3], console.log(error))
        }


    }




    async login(email, password) {

        try {

            let data = await this.api('/customers/login', "POST", { email: email, password: password })


            if (data.status === 202) {
                let resp = await data.json();
                message.success(`Welcome back ${resp.user.full_name}`, [5], console.log(resp))
                return resp
            } else {
                let resp = await data.json();
                message.error(resp, [3], console.log(resp))
            }

        } catch (error) {
            console.log(error);
        }


    }




}
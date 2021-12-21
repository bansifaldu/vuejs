import axios from 'axios'

export default class CustomerService {

	getCustomersSmall() {
		return axios.get('assets/demo/data/customers-small.json').then(res => res.data.data);
    }

    getCustomersMedium() {
		return axios.get("https://admin.dev.bebyte.io/api/sysnet/directory/get_domains").then(res => res.data);
    }

    getCustomersLarge() {
		return axios.get("https://cors-anywhere.herokuapp.com/"+"https://admin.dev.bebyte.io/api/sysnet/directory/get_domains").then(res => res.data);
    }

    getCustomersXLarge() {
		return axios.get('assets/demo/data/customers-xlarge.json').then(res => res.data.data);
	}
}

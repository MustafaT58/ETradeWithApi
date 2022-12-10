
import axios from 'axios'

const url = "https://localhost:7134/"

export async function getProducts() {
    const response = await axios.get(url + 'Products/List');

    const productData = []
    for (const key in response.data) {
        const productObj = {
            id: response.data[key].id,
            description: response.data[key].description,
            productname: response.data[key].productName,
            unitprice: response.data[key].unitPrice,
        }
        productData.push(productObj)
    }
    return productData

}
import axios from 'axios'

const url = "https://localhost:7134/"

export async function getProducts() {
    const response = await axios.get(url + "Products/List")
    const productData = []
    try {

        for (const key in response.data) {
            const productObj = {
                id: response.data[key].id,
                description: response.data[key].description,
                productname: response.data[key].productName,
                unitprice: response.data[key].unitPrice,
            }
            productData.push(productObj)
        }
    } catch (error) {
        console.log(error)
    }
    return productData
}

export async function addProduct(product) {
    const response = await axios.post(url + "Products/Create", product);
    const name = response.data.description;
    return name;
}
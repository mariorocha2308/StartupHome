import { Tproduct, TResponse, TproductSend } from "../types/queries"

const getProductsQuery = (): Promise<[Tproduct]> => {
  return new Promise((resolve, reject) => {
    fetch(`https://startup-api.up.railway.app/api/v1/product/all`)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to get all products'))
  })
}

const postProductQuery = (token, data) => {
  return new Promise((resolve, reject) => {
    fetch(`https://startup-api.up.railway.app/api/v1/product/create`, {
			method: 'POST',
			body: JSON.stringify(data), 
			headers:{
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to post products'))
  })
}


export {
  getProductsQuery,
	postProductQuery
}

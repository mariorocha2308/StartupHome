import { Tproduct, TproductSend } from "../types/queries"

const getProductsQuery = (): Promise<[Tproduct]> => {
  return new Promise((resolve, reject) => {
    fetch(`https://startup-api.up.railway.app/api/v1/product/all`)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to get all products'))
  })
}

interface Iparams {
	permissionToken: string,
	data: TproductSend
}

const postProductQuery = (params: Iparams) => {
  return new Promise((resolve, reject) => {
    fetch(`https://startup-api.up.railway.app/api/v1/product/create`, {
			method: 'POST',
			body: JSON.stringify(params.data), 
			headers:{
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${params.permissionToken}`
			}
		})
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to post product'))
  })
}

const deleteProductQuery = (token: string, id: number) => {
  return new Promise((resolve, reject) => {
    fetch(`https://startup-api.up.railway.app/api/v1/product/delete`, {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers:{
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to delete product'))
  })
}


export {
  getProductsQuery,
	postProductQuery,
	deleteProductQuery
}

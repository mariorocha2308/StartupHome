import { Tproduct } from "../types/queries"

const getProductsQuery = (): Promise<[Tproduct]> => {
  return new Promise((resolve, reject) => {
    fetch(`https://startup-api.up.railway.app/api/v1/product/all`)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to get all products'))
  })
}


export {
  getProductsQuery
}

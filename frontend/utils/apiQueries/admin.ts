import { TAuth } from "../types/queries"

const postSessionTokenQuery = (codeOtp: string): Promise<TAuth> => {
  return new Promise((resolve, reject) => {
    fetch(`https://startup-api.up.railway.app/api/v1/admin/auth`, {
			method: 'POST',
			body: JSON.stringify({token: codeOtp}),
			headers:{
				'Content-Type': 'application/json'
			}
		})
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(() => reject('Failed to authenticate admin'))
  })
}


export {
  postSessionTokenQuery
}

export type TAuth = {
	isAuth: boolean,
	permissionToken: string
}

export type Tproduct = {
	_id: string
	title: string,
	description: string,
	price: number,
	discount: number
}

export type TproductSend = {
	title: string,
	description: string,
	price: number,
	discount: number
}

export type TResponse = {
	message?: string,
	error?: string
}

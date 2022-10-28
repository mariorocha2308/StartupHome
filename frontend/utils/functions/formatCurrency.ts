const formatCurrency = (cash: number) => {
	return '$' + cash.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export { formatCurrency }

import create from 'zustand'

interface productState {
  productId: string,
	setId: (id: string) => void
}

const useProductState = create<productState>((set) => ({
  productId: '',
	setId: async (id) => set({ productId: id})
}))

export { useProductState }

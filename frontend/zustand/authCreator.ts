import create from 'zustand'
import { TAuth } from '../utils/types/queries'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  auth: boolean,
  permissionToken: string,
	setAuth: (obj: TAuth) => void,
	login: (obj: TAuth) => void
	logOut: () => void
}

const useAuthAdmin = create<AuthState>((set) => ({
  auth: false,
	permissionToken: '',
	setAuth: (obj) => set({ auth: obj.isAuth, permissionToken: obj.permissionToken }),
	login: async (obj) => {
		await AsyncStorage.setItem('@storage_admin', JSON.stringify(obj))
		set({ auth: obj.isAuth, permissionToken: obj.permissionToken })
	},
	logOut: async () => {
		await AsyncStorage.removeItem('@storage_admin')
		set({ auth: false, permissionToken: ''})
	}
}))

export { useAuthAdmin }

import { useLocalStorage } from "./useLocalStorage";
import { LOCAL_STORAGE } from "../data/storage";

export const useAuth = () => {
    const { getItem } = useLocalStorage()
    return { isLogin: getItem(LOCAL_STORAGE.TOKEN) ? true : false }
}
import { ROUTES } from "../data/routes";
import { LOCAL_STORAGE } from "../data/storage"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useLocalStorage } from "./useLocalStorage";

export const useUserData = () => {
    const { getItem, setItem } = useLocalStorage()
    const navigate = useNavigate()

    const addUser = (data) => {
        const users = getItem(LOCAL_STORAGE.USERS) ?? []
        users.push(data)
        setItem(LOCAL_STORAGE.USERS, users)
        toast.success('User registered successfully')
        navigate(ROUTES.LOGIN)
    }

    const authenticateUser = ({ email, password }) => {
        const users = getItem(LOCAL_STORAGE.USERS) ?? []
        const index = users.findIndex((user) => user.email === email && user.password === password)

        if (index !== -1) {
            const token = Math.ceil(Math.random() * 10000000)
            users[index] = {
                ...users[index],
                token
            }
            setItem(LOCAL_STORAGE.TOKEN, token)
            setItem(LOCAL_STORAGE.USERS, users)
            navigate(ROUTES.DASHBOARD)
        } else {
            toast.error('Invalid credentials')
        }
    }

    const getUserDetails = () => {
        const token = getItem(LOCAL_STORAGE.TOKEN)
        const users = getItem(LOCAL_STORAGE.USERS) ?? []
        const user = users.filter((user) => user.token === token)[0]
        return user
    }

    return {
        addUser,
        authenticateUser,
        getUserDetails
    }
}
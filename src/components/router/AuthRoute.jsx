import { ROUTES } from "../../data/routes";
import { useAuth } from "../../hooks/useAuth"
import { Outlet, Navigate } from "react-router-dom";

const AuthRoute = () => {
    const { isLogin } = useAuth()

    return (
        <>
            {
                isLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
            }
        </>
    )
}

export default AuthRoute
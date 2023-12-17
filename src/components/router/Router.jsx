import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../data/routes'
import Signup from '../../pages/signup/Signup'
import Login from '../../pages/login/Login'
import AuthRoute from './AuthRoute'
import Dashboard from '../../pages/dashboard/Dashboard'
import NotFound from '../../pages/not-found/NotFound'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC ROUTES */}
                <Route path={ROUTES.SIGNUP} element={<Signup />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.NONE} element={<NotFound />} />

                {/* PRIVATE ROUTE */}
                <Route path='/' element={<AuthRoute />} >
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                </Route>

            </Routes>
        </BrowserRouter >
    )
}

export default Router
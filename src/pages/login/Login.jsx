import Auth from "../../components/auth/Auth";
import Input from "../../components/input/Input";
import styles from './login.module.scss'
import * as Yup from 'yup';
import { useFormik } from "formik"
import { useUserData } from "../../hooks/useUserData";
import { ROUTES } from "../../data/routes";
import { Link } from "react-router-dom";
import { LOGIN_FIELDS } from "../../data/authFields";
import Button from "../../components/button/Button";

const Login = () => {
    const { authenticateUser } = useUserData()

    //==> Yup-Formik validation <==
    const formSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required('Email required'),
        password: Yup.string().trim().required('Password required').min(8, 'Password must be at least 8 characters').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/, 'Password must contain at least one uppercase, one lowercase, one digit, and one special character')
    })

    const initialValues = {
        email: '',
        password: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            authenticateUser(values)
        }
    })

    return (

        <>
            <Auth
                heading={'Login'}
            >
                <div className={styles['login-container']}>
                    <form onSubmit={formik.handleSubmit} className={styles['form']}>
                        {
                            LOGIN_FIELDS?.map((field, index) => {
                                return <div key={index}>
                                    <Input
                                        label={field.label}
                                        name={field.name}
                                        type={field.type}
                                        formik={formik}
                                    />
                                </div>
                            })
                        }
                        <div>
                           <Button text="Login"/>
                        </div>
                    </form>
                    <div className={styles['link-container']}>
                        <Link to={ROUTES.SIGNUP} className={styles['link']}>Have not signup yet?</Link>
                    </div>
                </div >
            </Auth >
        </>
    )
}

export default Login
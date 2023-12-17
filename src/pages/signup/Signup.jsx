import Auth from "../../components/auth/Auth";
import Input from "../../components/input/Input";

import styles from './signup.module.scss'

import * as Yup from 'yup';
import { useFormik } from "formik"

import { useUserData } from "../../hooks/useUserData";
import { Link } from "react-router-dom";
import { ROUTES } from "../../data/routes";
import { SIGNUP_FIELDS } from "../../data/authFields";
import Button from "../../components/button/Button";

const Signup = () => {
    const { addUser } = useUserData()

    //==> Yup-Formik validation <==
    const formSchema = Yup.object().shape({
        userName: Yup.string().trim().required('Username required'),
        name: Yup.string().trim().required('Name required'),
        email: Yup.string().email("Invalid email").required('Email required'),
        password: Yup.string().trim().required('Password required').min(8, 'Password must be at least 8 characters').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/, 'Password must contain at least one uppercase, one lowercase, one digit, and one special character')
    })

    const initialValues = {
        userName: '',
        name: '',
        email: '',
        password: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            addUser(values)
        }
    })

    return (
        <>
            <Auth
                heading={'Signup'}
            >
                <div className={styles['signup-container']}>
                    <form onSubmit={formik.handleSubmit} className={styles['form']}>
                        {
                            SIGNUP_FIELDS?.map((field, index) => {
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
                            <Button text="Signup" />
                        </div>
                    </form>
                    <div className={styles['link-container']}>
                        <Link to={ROUTES.LOGIN} className={styles['link']}>Already signup?</Link>
                    </div>
                </div>
            </Auth>
        </>
    )
}

export default Signup
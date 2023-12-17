import PropTypes from "prop-types"
import styles from './auth.module.scss'

const Auth = ({ heading, children }) => {
    return (
        <>
            <div className={styles['auth-container']}>
                <div className={styles['auth']}>
                    <div className={styles['heading']}>
                        <h1>{heading}</h1>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}


Auth.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
}


export default Auth
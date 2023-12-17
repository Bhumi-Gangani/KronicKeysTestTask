import './input.module.scss'

import PropTypes from "prop-types"

const Input = ({ name, type, label, formik, ...props }) => {

    return (
        <>
            <label>{label}</label>
            <input
                {...props}
                type={type ?? 'text'}
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={(formik.values && formik.values[name]) ?? ''}
            />
            {formik.touched[name] && formik.errors[name] && <p className="error">{formik.errors[name]}</p>}
        </>
    )
}

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    formik: PropTypes.object,
}

export default Input
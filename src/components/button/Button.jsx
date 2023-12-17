import './button.module.scss'

import PropTypes from "prop-types"

const Button = ({text}) => {
    return (
        <>
            <button type="submit">{text}</button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button
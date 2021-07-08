import './Button.css'

const Button = ({ text, variant, ...rest }) => {
    return <button className={`btn ${variant}`} {...rest} >{text}</button>
}

export default Button;

import './Navbar.css'

const Navbar = (props) => {
    return (
        <div>
            <ul>
                {props.icons.map(icon => <li>{icon}</li>)}
            </ul>
        </div>
    )
} 

export default Navbar
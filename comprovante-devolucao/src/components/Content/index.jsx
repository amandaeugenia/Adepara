import Navbar from '../Navbar'
import './Content.css'
const Content = (props) => {
    return (
        <section className="container">
            <div>
                <h2>{props.h2}</h2>
            </div>
            <div className='content'>
                
            </div>
        </section>
    )
}

export default Content
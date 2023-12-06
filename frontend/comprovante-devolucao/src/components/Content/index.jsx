
import './Content.css'
const Content = (props) => {
    return (
        <section className="container">
            <div>
                <h2>{props.h2}</h2>
            </div>
            <div className='content'>
                <div className='subtitle-field'>
                    <h3 className='subtitle'>{props.h3}</h3> 
                </div> 
                <div className='input-field'>
                    <label for='fileInput' className='file-upload'>Selecione um arquivo</label>
                    <input type='file' id='fileInput'></input>
                </div>    
            </div>
        </section>
    )
}

export default Content
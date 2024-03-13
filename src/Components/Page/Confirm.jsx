import { Nav }  from '../Nav.jsx'
import { Footer } from '../Footer'


export function Confirm( {name, date, time, guest, occasion, thanks }){


    return(

        <div>
            <Nav /> 
            <h4 style={{textAlign:'center', marginBottom: '2rem'}}>Confirmation</h4>
            <form>
                <fieldset className='confirm'>
                    <p>Name: <span>{name}</span></p>
                    <p>Date: <span>{date}</span></p>
                    <p>Time: <span>{time}</span></p>
                    <p>Guest: <span>{guest}</span></p>
                    <p>Occasion: <span>{occasion}</span></p>
                    <p>Code: <span>{name[0]}{name[1]}{guest}{occasion[0]}{occasion[1]}{occasion[2]}</span></p>
                    <button id='confirm' aria-label='On Click' value='Confirm your reservation' onClick={thanks}>Confirm</button>
                    <div id='conf-num'># {name[0]}{name[1]}{guest}{occasion[0]}{occasion[1]}{occasion[2]}</div>
                </fieldset>
            </form> 
            <Footer />
        </div>
        
    )
}
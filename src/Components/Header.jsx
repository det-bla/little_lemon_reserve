import { Link } from 'react-router-dom'
//import tray from '../assets/app_tray.png'
import fish from '../assets/fish.png'

export function Header(){
    
    return (

        <header>
            <div id='head'>
                <h3 style={{fontFamily:'Times'}}>Little Lemon</h3>
                <h6 style={{fontFamily:'Times'}}>Chicago</h6>
                <p style= {{fontSize: '20px', paddingBottom:'1.5rem'}}>We are a family owned Mediteranean restaurant, focused on traditional recipes with a modern twist.</p>
                <Link to='/Booking'><button id="res" aria-label='On Click' value='Click to reserve'>Reserve a Table</button></Link>
            </div>
            <img src= {fish} alt='tray' />
        </header>
        
    )
}


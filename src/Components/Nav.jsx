import logo from '../assets/logo_white.png'
import { Link } from  'react-router-dom'

export function Nav(){


    return(

        <nav>
            <img src= {logo} alt='logo' height={80}/>
            <ul>
                <li><Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}} >HOME</Link></li>
                <li><Link to='/About' style={{ color: 'inherit', textDecoration: 'inherit'}}>ABOUT</Link></li>
                <li><Link to='/Menu' style={{ color: 'inherit', textDecoration: 'inherit'}}>MENU</Link></li>
                <li><Link to='/Booking' style={{ color: 'inherit', textDecoration: 'inherit'}}>RESERVATION</Link></li>
            </ul>
        </nav>

    ) 
}
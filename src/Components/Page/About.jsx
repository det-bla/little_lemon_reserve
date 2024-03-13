import { Nav }  from '../Nav.jsx'
import { Footer } from '../Footer'
import bistro from '/src/assets/bistro.png'

export function About(){


    return(

        <div>
            <Nav />
            <div id='about'>
                <div id='location'>
                    <img src={bistro} alt='bistro' width={'500rem'} height={'300rem'}/>
                </div>
            <hr/>
                <div>
                    <p style={{padding: '4rem'}}>
                    "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials."
                    </p>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}
import lemon from '/src/assets/lemon_mono.png'

export function Thankyou(){


    return(

        <div className="thankyou">
            <h3>THANK YOU!</h3>
            <img src= {lemon} alt='food' height={250} />
            <h3>ENJOY</h3>
        </div>
        
    )
}
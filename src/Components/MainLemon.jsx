import bread from '../assets/bruschetta.png'
import salad from '../assets/greek_salad.png'
import pasta from '../assets/pasta.png'
import { useNavigate } from 'react-router-dom'

export function MainLemon(){
    
    const navigate = useNavigate()
    const special = ( ) => {navigate('/menu')};

    return(
        
        <main>
            <section id="top">
                <h4>Customer Favorites</h4>
                <button id="main">Order Now</button>
            </section>
            
            <section id="bot">
                <article class="card" onClick={special}>
                    <img src={salad} alt='food'/>
                    <h4>Greek Salad</h4>
                    <p style={{fontSize:'1rem', paddingTop: '1rem'}}>This delicious Greek salad is made with plum tomatoes, cucumbers, red onion, bell pepper, olives, and crumbled feta cheese.</p>
                </article>
                <article class="card" onClick={special}>
                    <img src={pasta}alt='food'/>
                    <h4>Pasta</h4>
                    <p style={{fontSize:'1rem', paddingTop: '1rem'}}>Penne pasta made with tomatoes, garlic, onions, and herbs added with red pepper flakes to add a little spice.</p>
                </article>
                <article class="card" onClick={special}>
                    <img src={bread} alt='food'/>
                    <h4>Bruschetta</h4>
                    <p style={{fontSize:'1rem', paddingTop: '1rem'}}>Toasted bread topped with tomatoes, Parmesan cheese, garlic, and fresh basil topped with olive oil and balsamic vinegar. </p>
                </article>
            </section>
        </main>

    )
}
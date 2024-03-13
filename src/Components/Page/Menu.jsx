import { Nav }  from '../Nav.jsx'
import { Footer } from '../Footer'

export function Menu(){

    const menu = [
        {   
            id: 1,
            name: 'Greek Salad' ,
            price: `$3.99`,
            description: 'This delicious Greek salad is made with plum tomatoes, cucumbers, red onion, bell pepper, olives, and crumbled feta cheese.',
            image:'src/assets/greek_salad.png'
        },
        {
            id: 2,
            name: 'Bruschetta' ,
            price: `$2.49`,
            description: 'Toasted bread topped with tomatoes, Parmesan cheese, garlic, and fresh basil topped with olive oil and balsamic vinegar.',
            image:'src/assets/bruschetta.png'
        },
        {
            id: 3,
            name: 'Penne Pasta' ,
            price: `$4.99`,
            description: 'Penne pasta made with tomatoes, garlic, onions, and herbs added with red pepper flakes to add a little spice.',
            image:'src/assets/pasta.png'
        }

    ]

    let style_1 = { display: 'flex', width:'90%', margin: '0 auto', justifyContent:'space-around', padding:'2rem' }
    let style_2 = { padding: '1rem'}
    let style_2a = { padding:'1rem', fontSize:'1.5rem' }
    let style_2b = { padding:'1rem', fontSize: '1.25rem', color: 'rgb(73,94,87)' }


    let dishes = menu.map( item => { 
        return( 
            
            <div style={style_1}>
                <img src={item.image} alt='food' height={150} width={250} />
                <div style={style_2}>
                    <p style={style_2a}>{item.name} {item.price}</p> 
                    <p style={style_2b}>{item.description}</p>
                <hr/> 
                </div>              
            </div>
            )
        })

    return(

        <>  
            <Nav />
            <h4 style={{textAlign: 'center'}}> In-House Specials </h4>
            {dishes}
            <Footer />
        </>
        
    )
}
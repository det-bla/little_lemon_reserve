import React from 'react'
import { Nav }  from '../Nav.jsx'
import { Footer } from '../Footer'
import { BookingForm } from '../BookingForm'



export function Booking( 
    {
        availableTimes, 
        dispatch, 
        submitForm, 
        name, 
        nameSet,
        date,
        dateSet, 
        time, 
        timeSet, 
        guest, 
        guestSet, 
        occasion, 
        occasionSet, 
        handleSubmit 
    } )
   
    {
    
   return(

        <div>  
            <Nav />
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
                name={name} 
                nameSet={nameSet}
                date={date} 
                dateSet={dateSet}
                time={time}
                timeSet={timeSet}
                guest={guest}
                guestSet={guestSet}
                occasion={occasion}
                occasionSet={occasionSet}
                handleSubmit={handleSubmit}
            />
            <Footer />
        </div>
        
    )

}
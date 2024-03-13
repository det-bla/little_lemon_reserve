import React, { useState } from 'react'

export function BookingForm( {availableTimes, dispatch, handleSubmit, name, nameSet, date, dateSet, time, timeSet, guest, guestSet, occasion, occasionSet} ){
    //const [name, setName] = useState('')
    //const [time, setTime] = useState('')
    //const [date, setDate] = useState('')
    //const [guest, setGuest] = useState('')
    //const [occasion, setOccasion] = useState('')
    
    
   
   return(

        <div id='booking-form'>
            <h4 style={{textAlign:'center', marginBottom: '2rem'}}>Reserve Your Table</h4>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input style={ {width:'10rem'} } 
                        type='text' 
                        id='name' 
                        name='name' 
                        value={name} 
                        onChange ={ nameSet }
                        autoComplete='off' />
                    </div>
                    <div>
                        <label htmlFor='date'>Date</label>
                        <input style={ {width:'8rem'} } type='date' id='date' name='date' value={date} onChange={ dateSet } required/>
                    </div>
                    <div>
                        <label htmlFor='time'>Time</label>
                        <select id='time' name='time' value={time} onChange={ timeSet }>
                            <option>Please select...</option>
                            {
                                availableTimes.map( availableTimes => {return <option key={availableTimes}>{availableTimes}</option> } )
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor='guests'>Number of Guests</label>
                        <input style={ {width:'2rem'} } 
                        type='number' 
                        id='guests' 
                        name='guests' 
                        min='1' 
                        max='6' 
                        placeholder='2' 
                        value={guest} 
                        onChange={ guestSet } required/>
                    </div>
                    <div>
                        <label htmlFor='occasion'>Occasion</label>
                        <select id='occasion' name='occasion' value={occasion} onChange={ occasionSet }>
                            <option>Please select...</option>
                            <option>Anniversary</option>
                            <option>Birthday</option>
                            <option>Special</option>
                        </select>
                    </div>
                    <button style={!name ? {backgroundColor:'lightgrey'} : null} type='submit' aria-label='On click' value='Reserve your table' disabled={!name}>Submit</button>
                </fieldset>
            </form>
            
        </div>
        
    )
}
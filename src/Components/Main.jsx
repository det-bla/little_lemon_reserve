import '../App.css'
import React, { useState, useReducer } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'
import { Home }  from '../Components/Page/Home.jsx'
import { About }  from '../Components/Page/About.jsx'
import { Menu }  from '../Components/Page/Menu.jsx'
import { Booking }  from '../Components/Page/Booking.jsx'
import { Confirm }  from '../Components/Page/Confirm.jsx'
import { Thankyou }  from '../Components/Page/Thankyou.jsx'


export function Main() {

    /*State declarations*/
    const [name,setName] = useState('');
    const [time, setTime] = useState('')
    const [date, setDate] = useState('') 
    const [guest, setGuest] = useState('')
    const [occasion, setOccasion] = useState('')
    const navigate = useNavigate()
    

    /*State functions*/
    const nameSet = (e) => {setName(e.target.value)};
    const timeeSet = (e) => {setTime(e.target.value)};
    const guestSet = (e) => {setGuest(e.target.value)};
    const occasionSet = (e) => {setOccasion(e.target.value)}
    const dateSet = (e) => {handleChange(e.target.value); console.log(e.target.value);};


    /*Utility functions*/
    const handleChange = (e) => {
        setDate(e);
        dispatch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);   
    }

    const submitAPI = function(){
        if (name && time && guest && occasion)
        return true;

        else {alert(ERROR)}
    }

    function submitForm(){
        console.log()
        if (submitAPI){
            navigate('/confirm');
        }
    }

    const thanks = () => {
        navigate('/thankyou');
    }

       
    const seedRandom = function(seed){
        var m = 2**35 -31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) / m;
        }
    }
    
    const fetchAPI = function(date){
        let result = []
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 21; i++) {
            if (random() < 0.5){
                result.push(i + ':00');
            }
            if (random() > 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    }

    
    /*Reducer function*/
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date){
        return {availableTimes: fetchAPI(new Date())}
    }

    

    return (
        <div className="Main">
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/About' element={ <About /> } />
                <Route path='/Menu' element={ <Menu /> } />
                <Route path='/Booking' 
                    element={ 
                        <Booking
                            availableTimes={state.availableTimes} 
                            dispatch={dispatch} 
                            submitForm={submitForm} 
                            name={name} 
                            nameSet={nameSet} 
                            date={date}
                            dateSet={dateSet}
                            time={time}
                            timeSet={timeeSet}
                            guest={guest}
                            guestSet={guestSet}
                            occasion={occasion}
                            occasionSet={occasionSet}
                            handleSubmit={handleSubmit}
                        /> } 
                />
                <Route path='/Confirm' 
                    element={ 
                        <Confirm 
                            name={name}
                            date={date} 
                            time={time}
                            guest={guest}
                            occasion={occasion}
                            handleSubmit={handleSubmit}
                            thanks={thanks}
                        /> } 
                />
                <Route path='/Thankyou' element={<Thankyou />}/>
            </Routes>
        </div>
  )
  }


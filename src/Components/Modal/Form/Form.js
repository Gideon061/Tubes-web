import {React,useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from 'react-router-dom'
import { hoursList } from './hoursList'

import TimeForm from './TimeForm'

function Form() {
  const [timer,setTimer]= useState(hoursList)

  function toggle(id){
    setTimer(TimeBefore =>{
      return TimeBefore
      .map((timeData) =>{
        return timeData.id === id? {...timeData, on:!timeData.on}:{...timeData, on:timeData.on = false}
      })
    })
  }
  const timerCard = (timer.map((data)=>{
    return (
      <TimeForm 
      key = {data.id}
      id = {data.id}
      on = {data.on}
      time = {data.Time}
      toggle= {toggle}
      visible = {data.visible}
      />
    )
  }))

  const [selectedDate,setSelectedDate] = useState(null)
  // Kalo Misalkan Hari nya adalah Hari yang sama
  // Maka akan dilakukan check jam, jikalau jam sekarang sudah melebihi dari jam order
  // Maka timerCard akan berubah menjadi invisible

  function isDateToday(date){
    setSelectedDate(date)
    const todayDate = new Date()
    if(
      date.getDate() === todayDate.getDate()&&
      date.getMonth() === todayDate.getMonth()&&
      date.getYear() === todayDate.getYear()
    ){
      setTimer((previousTime) =>{
        return previousTime.map((dataTime) =>{
          console.log(todayDate.getHours(),dataTime.Time)
          return todayDate.getHours() > dataTime.Time-3?{...dataTime,visible:!dataTime.visible}:dataTime
          })
      })
    }
  }

  
  return (
  <div>
      <form>
        <div className="form-row">
          <div >
          <label>Party Size</label>
          <div className='form-row'>
          <select className='form-select text-white-color'>
            <option value='1 adult'>1 Adult</option>
            <option value='2 adult'>2 Adult(s)</option>
            <option value='3 adult'>3 Adult(s)</option>
            <option value='4 adult'>4 Adult(s)</option>
            <option value='5 adult'>5 Adult(s)</option>
          </select>
          <select className='form-select text-white-color'>
            <option value='1 kid'>0 Kid</option>
            <option value='2 kid'>1 kid(s)</option>
            <option value='3 kid'>2 kid(s)</option>
            <option value='4 kid'>3 kid(s)</option>
            <option value='5 kid'>4 kid(s)</option>
          </select>
          </div>
          </div>
          <div className='column'>
          <label>Dining Date:</label>
          <DatePicker className='date-handler text-white-color'
          selected={selectedDate}
          onChange={(date)=>isDateToday(date)}
          dateFormat='dd/MM/yyyy'
          minDate={new Date()}
          maxDate = {new Date("06-31-2022")}
          required
          // filterDate={date => date.getDay() != 6 && date.getDay()!=0}
          />
          </div>
        </div>
        <p>Bookings can be made for parties of 1 to 10 (including kids) *To make a booking for a party that exceeds 10 guests, please call +62 85314985945.</p>
        <div>
          <h1>Time</h1>
          <p>*Gray time indicates the time is fully booked. Click to view other available dates. Or you can join waitlist. Once you become a formal booking, we will notify you via email.</p>
        </div>
        <div className='form-row'>
        {timerCard}
        </div>
        <Link to={{
          pathname:"/reservation/data",
          state:{selectedDate}
        }} >
        <button className='custom-button form-button'>Next</button>
        </Link>
    </form>
  </div>
  )
}

export default Form
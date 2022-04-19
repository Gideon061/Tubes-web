import React from 'react'

function TimeForm(props) {

  const styles ={
    backgroundColor: props.on? "#c33939": "#1f1f1f",
  }
  return (
    <div>
    {props.visible &&<div onClick ={()=>props.toggle(props.id)}style = {styles} className='timer-card'>{props.time}:00</div>}
    </div>
  )
}

export default TimeForm
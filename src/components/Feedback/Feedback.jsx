// import React from 'react'
import s from './Feedback.module.css'

const Feedback = () => {
  return (
    <div>
      <ul className={s.feedback}>
              <li>Good: { }</li>
              <li>Neutral: { }</li>
              <li>Bad: { }</li>
              <li>Total: { }</li>
              <li>Positive: { }</li>
      </ul>
    </div>
  )
}

export default Feedback

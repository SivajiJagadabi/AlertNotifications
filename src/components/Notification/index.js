// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="list-alert-item">
      <div className="notification">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification

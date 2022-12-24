// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="icon-container">
        <h1 className="alert-status success">Success</h1>
        <p className="alert-description">
          You can access all the files in the folder.
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="icon-container">
        <h1 className="alert-status error">Error</h1>

        <p className="alert-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="icon-container">
        <h1 className="alert-status warning">Warning</h1>

        <p className="alert-description">
          Viewers of this file can see comments and suggestions.
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="icon-container">
        <h1 className="alert-status info">Info</h1>

        <p className="alert-description">
          Anyone on the internet can view these files.
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-container">
      <div className="response-container">
        <h1 className="main-heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications

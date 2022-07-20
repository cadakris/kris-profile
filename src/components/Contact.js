import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { MdOutlineEmail } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const [toastMessage, setToastMessage] = useState("")

  const handleInputChanges = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value})
  }

  const CloseButton = ({ closeToast }) => (
    <button className="buttonToast" onClick={closeToast}><span>x
      </span></button>
  );

  const toastId = React.useRef(null);

  const notify = () => {
    if(! toast.isActive(toastId.current)) {
      toastId.current =  toast(toastMessage)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_eeppvch',
      'template_16tntih',
      toSend,
      'L5nQ0nqKIO5xA9rZ2'
    )
    .then((res) => {
      setToastMessage('Your Email Has Been Sent!')
    })
    .catch((err) => {
      setToastMessage(err)
    })
  }

  return (
   <section className="collapse" id="contact">
    <header className="headerColor">
      <h2 className="mainSideHeaer">Let's Connect</h2>
    </header>

    <div className="content">

        <h2>Send a message! </h2> 

      <section className="collapse">
        <header>
          <div className="contactInfo">
            <p className="email"><span className="icon"><MdOutlineEmail size={25}/></span>kriscadacio@gmail.com</p>
          </div>
        </header>
      </section>


      <div className="content contactContent">
      <p>I am currently open to new freelance projects, full-time job opportunities, and funny memes!</p>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="halfContainer">
          <input className="half"
            type='text'
            name='from_name'
            placeholder='Name'
            value={toSend.first_name}
            onChange={handleInputChanges}
          /><br/>
          <input className="half"
            type='text'
            name='from_email'
            placeholder='Email'
            value={toSend.from_email}
            onChange={handleInputChanges}
          /><br/>
          </div>
          <div className="messageContainer">
          <textarea className="message"
            type='text'
            name='message'
            placeholder='Write Your Message Here'
            value={toSend.message}
            onChange={handleInputChanges}
          /><br/>
              <button onClick={notify} type="submit"><span>Submit</span></button>
              <ToastContainer 
                position="top-center"
                autoClose={1500}
                toastClassName="modifiedToast"
                closeButton={CloseButton}
              />
          </div>

        </form>
      </div>
    </div>
    </div>
   </section>
  )
}
export default Contact

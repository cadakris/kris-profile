import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const handleInputChanges = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value})
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
      alert('Your Email Has Been Sent!', res.status, res.text)
    })
    .catch((err) => {
      console.log('FAILED...', err)
    })
  }

  return (
   <section className="collapse" id="contact">
    <header className="headerColor">
      <h2 className="mainSideHeaer">Let's Connect</h2>
    </header>

    <div className="content contentContact">
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
                    <button  type="submit"><span>Submit</span></button>
          </div>

        </form>
      </div>
    </div>
   </section>
  )
}
export default Contact

import React, { useState } from 'react'
import { send } from 'emailjs-com'
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
      console.log('SUCCESS!', res.status, res.text)
    })
    .catch((err) => {
      console.log('FAILED...', err)
    })
  }

  return (
   <section className="contact">
    <header>
      <h2>Let's Connect</h2>
    </header>

    <div className="content">
      <p>I am currently open to new freelance projects, full-time job opportunities, and memes!</p>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='from_name'
            placeholder='Name'
            value={toSend.first_name}
            onChange={handleInputChanges}
          />
          <input
            type='text'
            name='from_email'
            placeholder='Email'
            value={toSend.from_email}
            onChange={handleInputChanges}
          />
          <input
            type='text'
            name='message'
            placeholder='Write Your Message Here'
            value={toSend.message}
            onChange={handleInputChanges}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

   </section>
  )
}
export default Contact

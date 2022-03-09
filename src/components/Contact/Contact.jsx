import React, { useRef, useState, useEffect } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import { Element } from 'react-scroll';

function Contact(props) {
  init('user_6FqX0M9JjoiaBRXBdMm6v');
  const form = useRef();
  const submitBtn = useRef();
  const [disable, setDisable] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  useEffect(() => {
    setMsgSent(false);
    setDisable(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ibv2jze',
        'template_en0ykqb',
        form.current,
        'user_6FqX0M9JjoiaBRXBdMm6v'
      )
      .then(
        (result) => {
          setMsgSent(true);
          setDisable(true);
          console.log(result.text);
        },
        (error) => {
          setMsgSent(false);
          console.log(error.text);
        }
      )
      .then(form.current.reset());
  };
  return (
    <Element id='contact' name='contact'>
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <h3>get in touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            {/* <label htmlFor='name'>Name</label> */}
            <input
              type='text'
              id='name'
              name='user_name'
              required
              placeholder='full name'
            />
            {/* <label htmlFor='email'>Email</label> */}
            <input
              type='email'
              id='email'
              name='user_email'
              required
              placeholder='email address'
            />
            {/* <label htmlFor='phone'>Phone</label> */}
            <input
              type='tel'
              id='phone'
              name='user_phone'
              required
              placeholder='phone number'
            />
            {/* <label htmlFor='message'>Message</label> */}
            <textarea
              type='text'
              id='message'
              cols='10'
              rows='10'
              name='message'
              required
              placeholder='message'
            />
            <button
              className={styles.submitBtn}
              type='submit'
              ref={submitBtn}
              disabled={disable}>
              <p id='btnText'>{!msgSent ? 'Send Message' : 'Message Sent!'}</p>
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
}

export default Contact;

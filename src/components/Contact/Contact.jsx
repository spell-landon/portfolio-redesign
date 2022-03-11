import React, { useRef, useState, useEffect } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import { Element } from 'react-scroll';
import { Ellipsis } from 'react-awesome-spinners';

function Contact(props) {
  init('user_6FqX0M9JjoiaBRXBdMm6v');
  const form = useRef();
  const submitBtn = useRef();
  const [disable, setDisable] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [sending, setSending] = useState(false);
  useEffect(() => {
    setSending(false);
    setMsgSent(false);
    setDisable(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        'service_ibv2jze',
        'template_en0ykqb',
        form.current,
        'user_6FqX0M9JjoiaBRXBdMm6v'
      )
      .then(
        (result) => {
          setSending(false);
          setMsgSent(true);
          setDisable(true);
        },
        (error) => {
          setMsgSent(false);
          setSending(false);
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
              {sending ? (
                <Ellipsis color={'var(--darkblue)'} size={64} />
              ) : (
                <p id='btnText'>{msgSent ? 'Success!' : 'Send Message'}</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
}

export default Contact;

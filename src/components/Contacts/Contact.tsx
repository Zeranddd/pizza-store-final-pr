// Contact.tsx
import React from 'react';
import styles from './Contacts.module.css'

function Contact() {
  return (
    <div className={styles.contact_container}>
      <h1 className={styles.main_title}>Контакты</h1>

      <div className={styles['contacts_card']}>


        <div className={styles['info']}>

          <div className={styles['info_address']}>
            <p>ул. Васильковская 8, Киев, Киевская обл.</p>
          </div>


          <div className={styles['info_phone']}>
            <p>0 700 510 838</p>
          </div>


          <div className={styles['info_email']}>
            <p>info@goldenpizza.com</p>
          </div>


          <div className={styles['info_time']}>
            <p><strong>пн-чт</strong> — с 11:00 до 22:00, <strong>пт-вс</strong> — с 10:00 до 23:00</p>
          </div>

          <div className="contacts-social-medias">

                <div className="contacts-sm-links">
                  <a href="https://www.youtube.com/results?search_query=пицца" className={styles['contacts_sm_link']}><img className={styles['contacts-logo-sm']} src="images/youtube.png" alt="yt" /></a>
                  <a href="https://www.instagram.com/accounts/login/" className={styles['contacts_sm_link']}><img className={styles['contacts-logo-sm']} src="images/instagram.png" alt="insta" /></a>
                  <a href="https://m.facebook.com/login/?locale=ru_RU&refsrc=deprecated" className={styles['contacts_sm_link']}><img className={styles['contacts-logo-sm']} src="images/facebook.png" alt="fb" /></a>
                  <a href="https://web.telegram.org/k/" className={styles['contacts_sm_link']}><img className={styles['contacts-logo-sm']} src="images/telegram.png" alt="tg" /></a>
                </div>
              </div>

        </div>

        <div className={styles['map']}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17108.614478396805!2d30.50978523785635!3d50.39990968098588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8cbfad81967%3A0xe6d19c7e3f3d4eb4!2sDomino&#39;s%20Pizza!5e0!3m2!1sru!2sde!4v1706119868987!5m2!1sru!2sde" width="600" height="450"></iframe>
        </div>
      </div>


    </div>
  );
}

export default Contact;

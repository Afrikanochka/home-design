import React from 'react';
import sprite from '../../images/sprite.svg';
import { ContactsStyled } from './ContactsStyled';

const Contacts = () => {
    return (
        <ContactsStyled>
        <div className="footer" id="contacts">
            <div className="footer__contacts">
            <ul className="footer__contacts-list">
            <li className="footer__contacts-item">
                <a href="mailto:mtgnatali@gmail.com" className="footer__contacts-link link" lang="en">
                    <svg className="footer__contacts-icon" width="14" height="14">
                        <use href={sprite + '#icon-mail'}></use>
                    </svg>
                    mtgnatali@gmail.com
                </a></li>
            <li className="footer__contacts-item">
                <a href="tel:+380660379460" className="footer__contacts-link link">
                    <svg className="footer__contacts-icon" width="14" height="14">
                        <use href={sprite + '#icon-tel'}></use>
                    </svg>
                    +38 066 037 94 60
                </a></li>
            </ul>
        </div>
        
        <div className="FooterWrapper">
          <p className="FooterText">©2022 Cteated to improve React skills</p>
          <svg className="FooterIcon" width="36" height="36">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
        </div>
        <p className="FooterDeveloperText">
          Designed by
          <a
            href="#gallery"
            className="Developer"
          >
            Cherkassy
          </a>
        </p>
        <p className="FooterDeveloperText">
          Developed by
          <a
            href="https://www.linkedin.com/in/natalia-polovynko-13660321b"
            target="_blank"
            rel="noreferrer"
            className="Developer"
          >
            Natalia Polovynko
          </a>
        </p>
        </div>
        </ContactsStyled>
    );
}

export default Contacts;
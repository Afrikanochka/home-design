import styled from 'styled-components';

export const ContactsStyled = styled.div`

.footer {
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid var(--dark-gray);
}
  .FooterWrapper {
    display: flex;
    justify-content: center;
  }
  .FooterText {
    color: var(--primary-color);
    text-align: center;
    margin-right: 5px;
    font-size: 14px;
    width: 260px;
  }
  .FooterIcon {
    fill: rgba(192, 192, 192, 1);
    animation: reactIcon 1500ms infinite alternate;
  }
  @keyframes reactIcon {
    from {
      fill: rgba(192, 192, 192, 1);
    }
    to {
      fill: rgba(166, 25, 46, 0.5);
    }
  }
  .FooterDeveloperText {
    color: var(--primary-color);
    text-align: center;
    font-size: 12px;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
  }
  .Developer {
    text-decoration: underline;
    font-style: italic;
    color: var(--primary-color);
    cursor: pointer;
  }
  .Developer:hover {
    color: var(--accent-color);
  }
  .footer__contacts {
    text-align: center;
  }
  .footer__contacts-list {
    margin-bottom: 10px;
  }
  .footer__contacts-link {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    transition: color var(--timing-duration-function);
    color: var(--secondary-text-color);
  }
  .footer__contacts-link:hover, .footer__contacts-link:focus {
    color: var(--accent-color);
  }
  .footer__contacts-icon {
    margin-right: 10px;
    fill: currentColor;
  }
  @media (min-width: 1280px) {
    .footer {
      margin-top: 180px;
    }
  }
`;
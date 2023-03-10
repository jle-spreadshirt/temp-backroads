import { pageLinks, socialLinks } from '../data'
const Footer = () => {
  return (
    <>
      <footer className='section footer'>
        <ul className='footer-links'>
          {pageLinks.map((link) => {
            return (
              <>
                <li key={link.id}>
                  <a href={link.href} className='footer-link'>
                    {link.text}
                  </a>
                </li>
              </>
            )
          })}
        </ul>

        <ul className='footer-icons'>
          {socialLinks.map((social) => {
            const { href, icon } = social
            return (
              <li>
                <a
                  href={href}
                  rel='noreferrer'
                  target='_blank'
                  className='footer-icon'
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
        <p className='copyright'>
          copyright &copy; Backroads travel tours company
          <span id='date'></span> all rights reserved
        </p>
      </footer>
    </>
  )
}
export default Footer

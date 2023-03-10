import Title from './Title'
import { services } from '../data'
const Services = () => {
  return (
    <>
      <section className='section services' id='services'>
        <Title title1='our' title2='services' />
        <div className='section-center services-center'>
          {services.map((article) => {
            const { id, icon, title, text } = article
            return (
              <article className='service'>
                <span className='service-icon'>
                  <i className={icon}></i>
                </span>
                <div className='service-info'>
                  <h4 className='service-title'>{title}</h4>
                  <p className='service-text'>{text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Services

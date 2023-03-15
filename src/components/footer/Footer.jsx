import { FooterWrap } from './styles';

const Footer = () => {
  return (
    <FooterWrap id={'contacts'}>
      <footer className='footer-area'>
        <div className='container'>
          <div className='footer-positioning'>
            <div className='single-footer-widget'>
              <h3>Контакти</h3>
              <ul className='footer-contact-info'>
                <li>
                  <span>Адреса:</span> <br />
                  вул. Велика Васильківська / вул. Басейна, 1-3/2
                </li>

                <li>
                  <span>Телефон:</span> <br />
                  <a href='tel:+38 097 080-30-22'>+38 097 080 30 22</a> <br />
                  <br />
                  <span>Електронна скринька:</span> <br />
                  <a href='mailto:info@arena-city.com'>info@arena-city.com</a>
                </li>
              </ul>
            </div>
            <div className='map'>
              <iframe
                title='arena-map'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2540.962513538631!2d30.518572!3d50.4417989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ceff134d4b6d%3A0x4e98f6baec886f0!2z0JDRgNC10L3QsCDQodGW0YLRlg!5e0!3m2!1sru!2sua!4v1677795389136!5m2!1sru!2sua'
                width='100%'
                height='380'
                //   style='border:0;'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className='copyright-area'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-sm-6 col-md-6'>
                <p>
                  <i className='far fa-copyright' /> Arena City {/*<a*/}
                  {/*  href='https://envytheme.com/'*/}
                  {/*  target='_blank'*/}
                  {/*  rel='noreferrer'*/}
                  {/*>*/}
                  {/*  EnvyTheme*/}
                  {/*</a>*/}
                  {/*<p>*/}
                  {/*  {' '}*/}
                  {/*  Розробка{' '}*/}
                  {/*  <a*/}
                  {/*    href='https://t.me/dedvitalik'*/}
                  {/*    target='_blank'*/}
                  {/*    rel='noreferrer'*/}
                  {/*  >*/}
                  {/*    @dedVitalik*/}
                  {/*  </a>*/}
                  {/*</p>*/}
                </p>
              </div>
              <div className='col-lg-6 col-sm-6 col-md-6'>
                <ul>
                  <li>
                    <a href='/index2/#'>Політика приватності</a>
                  </li>
                  <li>
                    <a href='/index2/#'>Умови користування</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrap>
  );
};

export default Footer;

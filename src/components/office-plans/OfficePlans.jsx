import { useState, useEffect } from 'react';
import { PlansWrap } from './styles';
import generalImg from './media/1.jpeg';
import { floors } from '../data/floors';
import floor1 from './media/floor-1.png';
import floor2 from './media/floor-2.png';
import floor3 from './media/floor-3.png';
import floor4 from './media/floor-4.png';
import floor5 from './media/floor-5.png';

function OfficePlans() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsContent, setTabsContent] = useState([]);

  useEffect(() => {
    setTabsContent(Array.from(document.querySelectorAll('#tab')));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    tabsContent.map((tab, index) => {
      index === activeTab
        ? (tab.className = 'tabs_item visible')
        : (tab.className = 'tabs_item hidden');
    });
  }, [activeTab, tabsContent]);

  return (
    <PlansWrap>
      <section className='floor-plans-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Планування офісів</h2>
            <p>
              Ознайомтесь з плануванням офісів, завантаживши презентацію
              бізнес-центру.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='tab'>
                <ul className='tabs'>
                  {floors.map((floor, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setActiveTab(index);
                      }}
                      className={index === activeTab && 'current'}
                    >
                      {floor}
                    </li>
                  ))}
                </ul>
                <div className='tab_content'>
                  <div id='tab'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>БЦ "АРЕНА-СІТІ"</h3>
                          <p>
                            Комплекс побудований каркасно-монолітним способом.
                            Всі внутрішні перегородки не несучі, що дозволяє
                            проводити перепланування з урахуванням Ваших
                            побажань. Усі необхідні комунікації підключені та
                            повністю готові до експлуатації.
                          </p>
                          <ul className='features-list'>
                            <li className>
                              Загальна площа <span>14 165,6 м2</span>
                            </li>
                            <li className>
                              Поверхи <span>1-5</span>
                            </li>
                            <li className>
                              Ліфти <span>9</span>
                            </li>

                            <li className>
                              Найменший офіс <span>35 м2</span>
                            </li>
                            <li className>
                              Найбільший офіс <span>2500 м2</span>
                            </li>
                          </ul>
                          <a
                            className='default-btn'
                            href='/files/arena-city.pdf'
                            download
                            target='_blank'
                          >
                            Завантажити презентацію <span />
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 image first'>
                        <div className='tabs_item_image'>
                          <img src={generalImg} alt='floor-img' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='tab'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 1</h3>
                          <div className='col-lg-6 col-md-12 image'>
                            <div className='tabs_item_image'>
                              <img src={floor1} alt='floor-img' />
                            </div>
                          </div>
                          <a
                            className='default-btn'
                            href='/files/arena-city.pdf'
                            download
                            target='_blank'
                          >
                            Завантажити презентацію <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='tab'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 2</h3>
                          <div className='col-lg-6 col-md-12 image'>
                            <div className='tabs_item_image'>
                              <img src={floor2} alt='floor-img' />
                            </div>
                          </div>
                          <a
                            className='default-btn'
                            href='/files/arena-city.pdf'
                            download
                            target='_blank'
                          >
                            Завантажити презентацію <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='tab'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 3</h3>
                          <div className='col-lg-6 col-md-12 image'>
                            <div className='tabs_item_image'>
                              <img src={floor3} alt='floor-img' />
                            </div>
                          </div>
                          <a
                            className='default-btn'
                            href='/files/arena-city.pdf'
                            download
                            target='_blank'
                          >
                            Завантажити презентацію <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='tab'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 4</h3>
                          <div className='col-lg-6 col-md-12 image'>
                            <div className='tabs_item_image'>
                              <img src={floor4} alt='floor-img' />
                            </div>
                          </div>
                          <a
                            className='default-btn'
                            href='/files/arena-city.pdf'
                            download
                            target='_blank'
                          >
                            Завантажити презентацію <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='tab'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 5</h3>
                          <div className='col-lg-6 col-md-12 image'>
                            <div className='tabs_item_image'>
                              <img src={floor5} alt='floor-img' />
                            </div>
                          </div>
                          <a
                            className='default-btn'
                            href='/files/arena-city.pdf'
                            download
                            target='_blank'
                          >
                            Завантажити презентацію <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PlansWrap>
  );
}

export default OfficePlans;

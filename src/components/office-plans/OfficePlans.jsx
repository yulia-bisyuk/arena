import React from 'react';
import { useState, useEffect } from 'react';
import PlansCarousel from './PlansCarousel';
import { PlansWrap } from './styles';
import generalImg from './media/1.jpeg';
import { floors } from '../../data/floors';
import { offices } from '../../data/offices';
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
                            <li>
                              Загальна площа <span>14 165,6 м2</span>
                            </li>
                            <li>
                              Поверхи <span>1-5</span>
                            </li>
                            <li>
                              Ліфти <span>9</span>
                            </li>

                            <li>
                              Найменший офіс <span>35 м2</span>
                            </li>
                            <li>
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
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img
                            src={generalImg}
                            alt='floor-img'
                            className='first'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='tab' className='tabs_item'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src={floor1} alt='floor-plan' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 1</h3>
                          <p>
                            Виберіть найбільш привабливий та комфортний для Вас
                            офіс зі всіх доступних для оренди в нашому БЦ.
                          </p>
                          <PlansCarousel images={offices[0].images} />

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
                  <div id='tab' className='tabs_item'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src={floor2} alt='floor-plan' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 2</h3>
                          <p>
                            Виберіть найбільш привабливий та комфортний для Вас
                            офіс зі всіх доступних для оренди в нашому БЦ.
                          </p>
                          <PlansCarousel images={offices[1].images} />
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
                  <div id='tab' className='tabs_item'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src={floor3} alt='floor-plan' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 3</h3>
                          <p>
                            Виберіть найбільш привабливий та комфортний для Вас
                            офіс зі всіх доступних для оренди в нашому БЦ.
                          </p>
                          <PlansCarousel images={offices[2].images} />
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
                  <div id='tab' className='tabs_item'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src={floor4} alt='floor-plan' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 4</h3>
                          <p>
                            Виберіть найбільш привабливий та комфортний для Вас
                            офіс зі всіх доступних для оренди в нашому БЦ.
                          </p>
                          <PlansCarousel images={offices[3].images} />
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
                  <div id='tab' className='tabs_item'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src={floor5} alt='floor-plan' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Поверх 5</h3>
                          <p>
                            Виберіть найбільш привабливий та комфортний для Вас
                            офіс зі всіх доступних для оренди в нашому БЦ.
                          </p>
                          <PlansCarousel images={offices[4].images} />
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

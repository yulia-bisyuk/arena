import { useState } from 'react';
import { PlansWrap } from './styles';
import generalImg from './media/1.jpeg';

function OfficePlans() {
  const [tabs, setTabs] = useState([
    { id: 'tab1', active: false },
    { id: 'tab2', active: false },
    { id: 'tab3', active: false },
    { id: 'tab4', active: false },
    { id: 'tab5', active: false },
    { id: 'tab6', active: false },
  ]);

  const onTabClick = (e) => {
    setTabs((prevTabs) => [...prevTabs, { id: e.target.id, active: true }]);
  };

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
                <ul className='tabs' onClick={onTabClick}>
                  <li id='tab1' className='current'>
                    Про приміщення
                  </li>
                  <li id='tab2' className={tabs[1].active ? 'current' : ''}>
                    Поверх 1
                  </li>
                  <li id='tab3' className={tabs[2].active ? 'current' : ''}>
                    Поверх 2
                  </li>
                  <li id='tab4' className={tabs[3].active ? 'current' : ''}>
                    Поверх 3
                  </li>
                  <li id='tab5' className={tabs[4].active ? 'current' : ''}>
                    Поверх 4
                  </li>
                  <li id='tab6' className={tabs[5].active ? 'current' : ''}>
                    Поверх 5
                  </li>
                </ul>
                <div className='tab_content'>
                  <div
                    id='tab1'
                    className='tabs_item'
                    style={{ display: 'block' }}
                  >
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
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src={generalImg} alt='floor-img' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id='tab2'
                    className='tabs_item'
                    style={{ display: 'none' }}
                  >
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src='/images/floor-img2.png' alt='floor-img' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Floor 2</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s.
                          </p>
                          <ul className='features-list'>
                            <li className>
                              Floor No <span>2</span>
                            </li>
                            <li className>
                              Rooms <span>4</span>
                            </li>
                            <li className>
                              Total Area <span>311.50 sqft</span>
                            </li>
                            <li className>
                              Bathroom <span>Yes</span>
                            </li>
                            <li className>
                              Windows <span>4</span>
                            </li>
                          </ul>
                          <a className='default-btn' href='/the-place/#'>
                            Schedule a Visit <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id='tab3'
                    className='tabs_item'
                    style={{ display: 'none' }}
                  >
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Floor 3</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s.
                          </p>
                          <ul className='features-list'>
                            <li className>
                              Floor No <span>3</span>
                            </li>
                            <li className>
                              Rooms <span>4</span>
                            </li>
                            <li className>
                              Total Area <span>311.50 sqft</span>
                            </li>
                            <li className>
                              Bathroom <span>Yes</span>
                            </li>
                            <li className>
                              Windows <span>4</span>
                            </li>
                          </ul>
                          <a className='default-btn' href='/the-place/#'>
                            Schedule a Visit <span />
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src='/images/floor-img3.png' alt='floor-img' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id='tab4'
                    className='tabs_item'
                    style={{ display: 'none' }}
                  >
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src='/images/floor-img4.png' alt='floor-img' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Floor 4</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s.
                          </p>
                          <ul className='features-list'>
                            <li className>
                              Floor No <span>4</span>
                            </li>
                            <li className>
                              Rooms <span>4</span>
                            </li>
                            <li className>
                              Total Area <span>311.50 sqft</span>
                            </li>
                            <li className>
                              Bathroom <span>Yes</span>
                            </li>
                            <li className>
                              Windows <span>4</span>
                            </li>
                          </ul>
                          <a className='default-btn' href='/the-place/#'>
                            Schedule a Visit <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id='tab5'
                    className='tabs_item'
                    style={{ display: 'none' }}
                  >
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Floor 5</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s.
                          </p>
                          <ul className='features-list'>
                            <li className>
                              Floor No <span>5</span>
                            </li>
                            <li className>
                              Rooms <span>4</span>
                            </li>
                            <li className>
                              Total Area <span>311.50 sqft</span>
                            </li>
                            <li className>
                              Bathroom <span>Yes</span>
                            </li>
                            <li className>
                              Windows <span>4</span>
                            </li>
                          </ul>
                          <a className='default-btn' href='/the-place/#'>
                            Schedule a Visit <span />
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src='/images/floor-img5.png' alt='floor-img' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id='tab6'
                    className='tabs_item'
                    style={{ display: 'none' }}
                  >
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>Floor 5</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s.
                          </p>
                          <ul className='features-list'>
                            <li className>
                              Floor No <span>5</span>
                            </li>
                            <li className>
                              Rooms <span>4</span>
                            </li>
                            <li className>
                              Total Area <span>311.50 sqft</span>
                            </li>
                            <li className>
                              Bathroom <span>Yes</span>
                            </li>
                            <li className>
                              Windows <span>4</span>
                            </li>
                          </ul>
                          <a className='default-btn' href='/the-place/#'>
                            Schedule a Visit <span />
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img src='/images/floor-img5.png' alt='floor-img' />
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

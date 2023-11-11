import React from 'react';
import { useState, useEffect } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import PlansCarousel from './PlansCarousel';
import { useTranslation } from 'react-i18next';
import { PlansWrap } from './styles';
import { tabs_ua, tabs_en, plug_en, plug_ua, floors } from '../../data/floors';

function OfficePlans() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsContent, setTabsContent] = useState([]);
  const isMobile = useMediaQuery('(max-width: 991px)');
  const { t, i18n } = useTranslation();
  const tabs = i18n.language === 'en' ? tabs_en : tabs_ua;

  //change plug here depending on if there no available space or just no photo
  // for available space
  const floorPlug = i18n.language === 'en' ? plug_en.noSpace : plug_ua.noSpace;
  useEffect(() => {
    setTabsContent(Array.from(document.querySelectorAll('#tab')));
  }, [isMobile]);

  useEffect(() => {
    tabsContent.map((tab, index) => {
      return index === activeTab
        ? (tab.className = 'tabs_item visible')
        : (tab.className = 'tabs_item hidden');
    });
  }, [activeTab, tabsContent]);

  const getFloorButtons = () => {
    return tabs.map((tab, index) => (
      <li
        key={index}
        onClick={() => {
          setActiveTab(index);
        }}
        className={index === activeTab ? 'current' : null}
      >
        {tab}
      </li>
    ));
  };

  return (
    <PlansWrap>
      <section className='floor-plans-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>{t('officePlans.title')}</h2>
            <p>{t('officePlans.description')}</p>
          </div>

          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='tab'>
                <ul className='tabs'>{getFloorButtons()}</ul>
                <div className='tab_content'>
                  <div id='tab'>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12 content'>
                        <div className='tabs_item_content'>
                          <h3>{t('officePlans.arenaCity')}</h3>
                          <p>{t('officePlans.arenaCityDescription')}</p>
                          <ul className='features-list'>
                            <li>
                              {t('officePlans.totalArea')}{' '}
                              <span>
                                14 165 {i18n.language === 'en' ? 'm' : 'м'}
                                <sup>2</sup>
                              </span>
                            </li>
                            <li>
                              {t('officePlans.floors')} <span>1-6</span>
                            </li>
                            <li>
                              {t('officePlans.lifts')} <span>9</span>
                            </li>

                            <li>
                              {t('officePlans.smallestOffice')}{' '}
                              <span>
                                35 {i18n.language === 'en' ? 'm' : 'м'}
                                <sup>2</sup>
                              </span>
                            </li>
                            <li>
                              {t('officePlans.largestOffice')}{' '}
                              <span>
                                2500 {i18n.language === 'en' ? 'm' : 'м'}
                                <sup>2</sup>
                              </span>
                            </li>
                          </ul>
                          <a
                            className='default-btn'
                            href={
                              i18n.language === 'en'
                                ? 'files/Arena-City-11-2023-EN.pdf'
                                : 'files/Арена-Сіті-11-2023.pdf'
                            }
                            download
                            target='_blank'
                            rel='noreferrer'
                          >
                            {t('download_presentation')} <span />
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 image'>
                        <div className='tabs_item_image'>
                          <img
                            src='./images/floorPlans/1.jpg'
                            alt='floor-img'
                            className='first'
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {floors.map((floor, index) => {
                    return isMobile ? (
                      // mobile
                      <div id='tab' className='tabs_item' key={index}>
                        <div className='row align-items-center'>
                          <div className='col-lg-6 col-md-12 content'>
                            <div className='tabs_item_content'>
                              <h3>{tabs[index + 1].toUpperCase()}</h3>
                              <div className='col-lg-6 col-md-12 image'>
                                <div className='tabs_item_image'>
                                  <img
                                    src={
                                      i18n.language === 'en'
                                        ? floor.plan.en
                                        : floor.plan.ua
                                    }
                                    alt='floor-plan'
                                    style={{ marginBottom: '20px' }}
                                  />
                                </div>
                              </div>

                              <PlansCarousel images={floor.images} />

                              <a
                                className='default-btn'
                                href={
                                  i18n.language === 'en'
                                    ? 'files/Arena-City-11-2023-EN.pdf'
                                    : 'files/Арена-Сіті-11-2023.pdf'
                                }
                                download
                                target='_blank'
                                rel='noreferrer'
                              >
                                {t('download_presentation')} <span />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // desktop
                      <div id='tab' className='tabs_item' key={index}>
                        <div className='row align-items-center'>
                          <div className='col-lg-6 col-md-12 image'>
                            <div className='tabs_item_image'>
                              <img
                                src={
                                  i18n.language === 'en'
                                    ? floor.plan.en
                                    : floor.plan.ua
                                }
                                alt='floor-plan'
                              />
                            </div>
                          </div>
                          <div className='col-lg-6 col-md-12 content'>
                            <div className='tabs_item_content'>
                              <h3>{tabs[index + 1].toUpperCase()}</h3>
                              <PlansCarousel
                                images={
                                  floor.images.length !== 0
                                    ? floor.images
                                    : floorPlug
                                }
                                key={index}
                              />

                              <a
                                className='default-btn'
                                href={
                                  i18n.language === 'en'
                                    ? 'files/Arena-City-11-2023-EN.pdf'
                                    : 'files/Арена-Сіті-11-2023.pdf'
                                }
                                download
                                target='_blank'
                                rel='noreferrer'
                              >
                                {t('download_presentation')} <span />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

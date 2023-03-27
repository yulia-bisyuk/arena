import React from 'react';
import {useTranslation} from 'react-i18next';
import sprite from '../../icons/sprite.svg';
import {AdvantagesWrap} from './styles';

function Advantages() {
  const {t} = useTranslation();
  
  return (
    <AdvantagesWrap>
      <section className="services-area pt-100 pb-70" id="advantages">
        <div className="container">
          <div className="section-title">
            <h2>{t('advantages.premiumClassOfficeCenter')}</h2>
            <p>
              {t('advantages.arenaCityDescription')}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-location"/>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('cityCenterLocation')}</h3>
                <p>{t('cityCenterLocationDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-work"/>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('furnishedOffices')}</h3>
                <p>{t('furnishedOfficesDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <svg width="40px" height="46px" className="icon-additional">
                    <use href={sprite + '#home-architecture-plan-icon'}/>
                  </svg>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('engineeringCommunications')}</h3>
                <p>{t('engineeringCommunicationsDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <svg width="40px" height="46px" className="icon-additional">
                    <use href={sprite + '#floor-plan-icon'}/>
                  </svg>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('floorPlanning')}</h3>
                <p>{t('floorPlanningDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <svg width="40px" height="46px" className="icon-additional">
                    <use href={sprite + '#smart-home-electricity-icon'}/>
                  </svg>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('autonomy')}</h3>
                <p>{t('autonomyDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-security"/>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('securityComfort')}</h3>
                <p>{t('securityComfortDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-parking"/>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('accessibleParking')}</h3>
                <p>{t('accessibleParkingDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <svg width="40px" height="46px" className="icon-additional">
                    <use href={sprite + '#tram-transport-icon'}/>
                  </svg>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('transportAccessibility')}</h3>
                <p>{t('transportAccessibilityDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box last">
                <div className="icon">
                  <svg width="40px" height="46px" className="icon-additional">
                    <use href={sprite + '#announcement-icon'}/>
                  </svg>
                  <div className="icon-bg">
                    <img src="/images/icon-bg1.png" alt="advantage-icon"/>
                    <img src="/images/icon-bg2.png" alt="advantage-icon"/>
                  </div>
                </div>
                <h3>{t('sheltersNearby')}</h3>
                <p>{t('sheltersNearbyDesc')}</p>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="advantage-icon"/>
                  <img src="/images/box-shape2.png" alt="advantage-icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdvantagesWrap>
  );
}

export default Advantages;

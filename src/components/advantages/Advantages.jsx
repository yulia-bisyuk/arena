import React from 'react';
import sprite from '../../icons/sprite.svg';
import { AdvantagesWrap } from './styles';

// import { ReactComponent as ArrowIcon } from '../../assets/icons/icons-expand-more.svg';

function Advantages() {
  return (
    <AdvantagesWrap>
      <section className='services-area pt-100 pb-70' id='advantages'>
        <div className='container'>
          <div className='section-title'>
            <h2>Офісний центр преміум класу</h2>
            <p>
              «Арена Сіті» не схожий на інші бізнес центри. Розташування в
              самому серці міста, старовинна архітектура, унікальна
              інфраструктура та зручна транспортна розв'язка роблять його
              особливим.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <i className='flaticon-location' />
                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Розміщення в центрі міста</h3>
                <p>
                  Бізнес центр знаходиться в самому центрі ділового та
                  історичного Києва{' '}
                </p>
                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <i className='flaticon-work' />
                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Вмебльовані офіси під ключ</h3>
                <p>
                  При необхідності - оперативно та безкоштовно меблюємо та
                  обладнуємо робочі місця
                </p>

                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <svg width='40px' height='46px' className='icon-additional'>
                    <use href={sprite + '#home-architecture-plan-icon'} />
                  </svg>
                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Інженерні комунікації</h3>
                <p>
                  Всі офіси з гарним ремонтом, підключені до необхідних
                  комунікацій та повністю готові до експлуатації.
                </p>

                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <svg width='40px' height='46px' className='icon-additional'>
                    <use href={sprite + '#floor-plan-icon'} />
                  </svg>
                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Планування поверхів</h3>
                <p>
                  Доступні різні типи планувань: оупен-спейс, кабінетна система,
                  комбінована.
                </p>
                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <svg width='40px' height='46px' className='icon-additional'>
                    <use href={sprite + '#smart-home-electricity-icon'} />
                  </svg>
                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Автономність</h3>
                <p>
                  Завжди є електроенергія та інтернет, власні автономні джерела
                  живлення
                </p>
                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <i className='flaticon-security' />
                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Безпека та комфорт</h3>
                <p>Доступ 24/7, цілодобова охорона, клінінг</p>
                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <i className='flaticon-parking' />
                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Доступний паркінг</h3>
                <p>
                  Дворівневий підземний паркінг на 300+ паркомісць прямо в БЦ,
                  близько 170 паркомісць на вулиці.
                </p>
                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <svg width='40px' height='46px' className='icon-additional'>
                    <use href={sprite + '#tram-transport-icon'} />
                  </svg>

                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Транспортна розв'язка</h3>
                <p>
                  3 станції метро та 30+ зупинок громадського транспорту до 5
                  хвилин пішки
                </p>
                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-services-box'>
                <div className='icon'>
                  <svg width='40px' height='46px' className='icon-additional'>
                    <use href={sprite + '#announcement-icon'} />
                  </svg>

                  <div className='icon-bg'>
                    <img src='/images/icon-bg1.png' alt='advantage-icon' />
                    <img src='/images/icon-bg2.png' alt='advantage-icon' />
                  </div>
                </div>
                <h3>Укриття поблизу</h3>
                <p>
                  Наявність 3 укриттів / бомбосховищ в доступності до 1 хвилини
                  з будь-якого місця в БЦ.
                </p>
                <div className='box-shape'>
                  <img src='/images/box-shape1.png' alt='advantage-icon' />
                  <img src='/images/box-shape2.png' alt='advantage-icon' />
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

import React from 'react';
import {AdvantagesWrap} from './styles';

function Advantages() {
  return (
    <section className="services-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Офісний центр преміум класу</h2>
          <p>«Арена Сіті» не схожий на інші бізнес центри. Розташування в самому серці міста, старовинна архітектура,
            унікальна інфраструктура та зручна транспортна розв'язка роблять його особливим.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon"><i className="flaticon-location"/>
                <div className="icon-bg">
                  <img src="/images/icon-bg1.png" alt="image"/><img src="/images/icon-bg2.png"
                                                                    alt="image"/></div>
              </div>
              <h3>Расположение в центре города</h3>
              <p>Деловой центр находится в 5 минутах ходьбы от станций метро Крещатик, Площадь Независимости и Площадь
                Льва Толстого, на пересечении улиц Красноармейской, Бассейной и Крещатик.</p>
              <div className="box-shape"><img src="/images/box-shape1.png" alt="image"/><img
                src="/images/box-shape2.png" alt="image"/></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon"><i className="flaticon-work"/>
                <div className="icon-bg"><img src="/images/icon-bg1.png" alt="image"/><img src="/images/icon-bg2.png"
                                                                                           alt="image"/></div>
              </div>
              <h3><a href="/service-details/">Меблированные офисы под ключ
              </a></h3><p>Вы можете въехать в новый офис, когда захотите – в помещениях сделан ремонт и установлена
              мебель.</p>
              
              <div className="box-shape"><img src="/images/box-shape1.png" alt="image"/><img
                src="/images/box-shape2.png" alt="image"/></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon"><i className="flaticon-room"/>
                <div className="icon-bg"><img src="/images/icon-bg1.png" alt="image"/><img src="/images/icon-bg2.png"
                                                                                           alt="image"/></div>
              </div>
              <h3><a href="/service-details/">Инженерные коммуникации
              </a></h3><p>Все необходимые коммуникации подключены и полностью готовы к эксплуатации.</p>
              
              <div className="box-shape"><img src="/images/box-shape1.png" alt="image"/><img
                src="/images/box-shape2.png" alt="image"/></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon"><i className="flaticon-location"/>
                <div className="icon-bg"><img src="/images/icon-bg1.png" alt="image"/><img src="/images/icon-bg2.png"
                                                                                           alt="image"/></div>
              </div>
              <h3><a href="/service-details/">Типовой план этажа
              </a></h3><p>У нас вы сможете выбрать кабинетную систему или open space от самого маленького офиса в 40м до
              помещения в 2000м на одном этаже.</p>
              <div className="box-shape"><img src="/images/box-shape1.png" alt="image"/><img
                src="/images/box-shape2.png" alt="image"/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

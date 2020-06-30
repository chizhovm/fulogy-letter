import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import OrderInfo from './components/orderInfo';
import InfoBlock from './components/infoBlock';
import Price from './components/price';

const defaultCustomer = {
  name: 'Покупатель Покупателевич',
  email: 'amozik@yandex.ru',
  adress: 'Адрес: 115487, г Москва, ул Садовая Б., д 45',
  phone: '+7 902 266-44-63',
  contractor: 'Группа компаний Fulogy',
  manager: 'Широков Евгений',
  managerPhone: '+7(499)116-34-00',
  orderNumber: 'T-RP/00129',
  assembly: 'Да',
  kitComposition: [
    [ 'Светильник по вашему размеру -', 2, 'шт.' ],
    [ 'Блок питания 100 Вт. -', 1, 'шт.' ],
    [ 'Крепления -', 'саморезы каждые 30 см' ],
    [ 'Комментарий:', 'Можно мне гаечный ключ вместо отвертки' ],
    [ 'Конфигурация светильника (вариант 2):', 'scheme' ]
  ],
  specifications: [
    [ 'Длина 1-го светильника (L1):', 1375, 'мм.' ],
    [ 'Длина 2-го светильника (L2):', 2110, 'мм.' ],
    [ 'Вид профиля:', 'Накладной профиль с молочным рассеивателем' ],
    [ 'Лента:', 'Светодиодная лента 24V SMD 2835 140LED/m 18W IP33 Day White LUX CRI 90' ],
    [ 'Суммарная потребляемая мощность:', 63, 'Вт.'],
    [ 'Вывод питающего кабеля из светильника:', 'через заглушку' ],
    [ 'Стык светильников:', 'под углом 45 градусов' ],
    [ 'Длина кабеля до блока питания (Lcb):', 240, 'см.' ]
  ],
  price: 14000,
};


 
const App = () => {

  const [ customer ] = useState(defaultCustomer);


  return (
    <div className="App">
      <Header
        name = { customer.name }
        orderNumber = { customer.orderNumber }
      />
      <OrderInfo 
        name = { customer.name }
        email = { customer.email }
        adress = { customer.adress }
        phone = { customer.phone }
        contractor = { customer.contractor }
        manager = { customer.manager }
        managerPhone = { customer.managerPhone }
        orderNumber = { customer.orderNumber }
        assembly = { customer.assembly }
      />
      <InfoBlock
        header = {'Состав комплекта:'}
        info = { customer.kitComposition }
      />
      <InfoBlock
        header = {'Технические характеристики:'}
        info = { customer.specifications }
      />
      <Price 
        price = { customer.price }
      />
    </div>
  );
}

export default App;

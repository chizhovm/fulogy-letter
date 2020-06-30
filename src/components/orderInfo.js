import React from 'react';

const OrderInfo = (props) => {
  return (
    <div>
      <p>
        <b>Информация о заказе:</b>
      </p>
      <p>
        Заказчик: {props.name}
      </p>
      <p>
        Email: {props.email}
      </p>
      <p>
        Адрес: {props.adress}
      </p>
      <p>
        Телефон: {props.phone}
      </p>
      <p>
        Исполнитель: {props.contractor}
      </p>
      <p>
        Менеджер: {props.manager}
      </p>
      <p>
        Телефон: {props.managerPhone}
      </p>
      <p>
        Монтаж: {props.assembly}
      </p>
    </div>
  );
}

export default OrderInfo;

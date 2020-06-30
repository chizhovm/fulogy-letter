import React from 'react';

const Header = (props) => {
  return (
    <div>
      <p>
        Здравствуйте, {props.name}!
      </p>
      <p>
        Ваш заказ № {props.orderNumber} оформлен
      </p>
      <p>
        Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для
      подтверждения заказа.
      </p>
    </div>
    );
}

export default Header;
import React from 'react';

const InfoBlock = (props) => {
  console.log(props.info);

  const li = props.info.map((el) => {
    return (
      <p key={el[0]}>
        { el.join(' ') }
      </p> 
    );
  });

  return (
    <div>
      <p>
        <b>
          {props.header}
        </b>
      </p>
      <ul>
        { li }
      </ul>
    </div>
  );
}

export default InfoBlock;
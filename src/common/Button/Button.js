import React, {memo} from 'react';

const Button = ({text = '', btnClass = '', onClick, disabled = true}) => {
  return <button onClick={onClick} disabled={disabled} className={`btn ${btnClass ? btnClass : 'btn-primary'}`}>
    {text}
  </button>
}

export default memo(Button)
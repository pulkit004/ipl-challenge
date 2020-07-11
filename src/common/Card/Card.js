import React, {memo} from 'react';

const Card = ({children, parentClass = ''}) => {
  return <div className={`card shadow p-4 ${parentClass}`}>
    <div className="card-body">
      {children}
    </div>
  </div>
}

export default memo(Card)
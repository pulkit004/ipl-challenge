import React, {memo} from 'react';

const Alert = ({children}) => <div className="alert alert-info alert-dismissible fade show" role="alert">
  {children}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

export default memo(Alert)
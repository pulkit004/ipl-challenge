import React, {memo} from 'react';
const Heading = ({text}) => <h1 className="display-4 mb-4 font-weight-bold">{text}</h1>
export default memo(Heading)
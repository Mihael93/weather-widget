import React from 'react';
import ss from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
   return (
      <input ref={ref} className={ss.myInput} {...props} />
   );
});

export default MyInput;
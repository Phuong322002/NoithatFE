import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButttonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textbutton,
    bordered,
    backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13, 92, 182)',
    colorButton = '#000'
  } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, marginRight: '8px', width: '400px', borderRadius: '10px' }}
        {...props}
      />
      {/* <ButtonComponent
        size={size}
        styleButton={{
          backgroundColor: backgroundColorButton,
          border: !bordered && 'none',
          height: '100%',
          borderRadius: '0',
          marginLeft: '-1px',
          borderRadius: '10px'
        }}
        textbutton={textbutton}
        styleTextButton={{ color: colorButton }}
      /> */}
    </div>
  );
};

export default ButttonInputSearch;

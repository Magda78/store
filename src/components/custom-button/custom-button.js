import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button classNmae='costum-button' {...otherProps}>
        {children}
    </button>
)

export default CustomButton;
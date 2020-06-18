import React from 'react';

const Button = ({btnDisplayName, clickHandler}) => (
<button onClick={clickHandler}>{btnDisplayName}</button>
)

export default Button;
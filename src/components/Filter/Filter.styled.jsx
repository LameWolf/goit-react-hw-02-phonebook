import s from 'styled-components';

export const Label = s.label`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 20px;
margin-bottom: 15px;

font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 1.1;`;

export const Input = s.input`
background-color: #000000;
color: #fbf8cc;
font-size: 1em;
border: 5px solid #ffffff;
border-radius: 3px;
margin-left: 15px;`;

import s from 'styled-components';

export const Form = s.form`
width: 465px;
padding: 40px;
border: 1px solid black;
border-radius: 10px;
margin: 20px auto;
text-align: center;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
}`;

export const Label = s.label`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
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

export const Button = s.button`
border-radius: 74px;
border: 2px solid #000000;
width: 200px;
height: 50px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 1.67;
color: #111;
padding-left: 24px;
padding-right: 24px;
transition: color .3s cubic-bezier(.4,0,.2,1),background .3s cubic-bezier(.4,0,.2,1),border .3s cubic-bezier(.4,0,.2,1),border-color .3s cubic-bezier(.4,0,.2,1);
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

&:hover {
    background: #001233;
    color: #ffd60a
  }`;

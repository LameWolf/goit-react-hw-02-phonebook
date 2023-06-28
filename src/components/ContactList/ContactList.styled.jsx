import s from 'styled-components';

export const List = s.ul`
display: flex;
flex-direction: column;
width: 600px;
padding: 20px;
border: 1px solid black;
border-radius: 10px;
margin: 20px auto;
text-align: center;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
}`;

export const Item = s.li`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 1.1;`;

export const Button = s.button`
border-radius: 74px;
border: 2px solid #000000;
width: 120px;
height: 35px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
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

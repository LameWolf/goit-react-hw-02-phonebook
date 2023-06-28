import s, { keyframes } from 'styled-components';

const scaledTitle = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const MainTitle = s.h1`
    text-align: center;
    animation: ${scaledTitle} 4s infinite;
`;

export const Contacts = s.h2`
    text-align: center;
    animation: ${scaledTitle} 4s infinite;
`;

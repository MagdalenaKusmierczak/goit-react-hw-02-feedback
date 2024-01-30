import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  background-color: white;
  display: flex;
  gap: 10px;
  padding-left: 20px;
`;
export const Button = styled.button`
  border-color: #d2c8c8;
  font-size: 16px;
  width: 80px;
  height: 40px;
  padding: 0;
  background-color: white;
  border-radius: 5px;
  text-transform: capitalize;
  &:hover {
    background-color: #3f97e7;
    cursor: pointer;
  }
`;

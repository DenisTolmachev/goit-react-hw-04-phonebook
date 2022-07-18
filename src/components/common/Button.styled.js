import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  margin: 5px 10px;
  font-size: ${props => props.theme.fontSizes.m};
  text-transform: capitalize;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

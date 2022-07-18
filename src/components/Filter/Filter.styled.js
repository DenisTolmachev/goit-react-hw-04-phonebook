import styled from 'styled-components';

export const FilterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.secondary};
`;

export const FilterLabelTitle = styled.span`
  font-size: ${props => props.theme.fontSizes.m};
`;

export const FilteInput = styled.input`
  outline: none;
  border: none;
  border-radius: 3px;
  margin-top: 5px;
  padding: 5px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

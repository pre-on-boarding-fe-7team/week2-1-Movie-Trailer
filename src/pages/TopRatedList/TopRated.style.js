import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  span {
    font-size: ${props => props.theme.fontSizes.paragraph};
  }
`;

export const Img = styled.img`
  width: 100%;
`;

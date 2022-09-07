import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  span {
    color: 
    font-size: ${props => props.theme.fontSizes.paragraph};
  }
`;

export const ImgDiv = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 150%;
  display: block;
`;

export const Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled.span`
  padding: ${props => props.theme.paddings.xl} 0 ${props => props.theme.paddings.small};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.white};
`;

export const AverageSpan = styled.span`
  font-size: ${props => props.theme.fontSizes.xsmall};
  color: ${props => props.theme.colors.yellow};
`;

export const DateSpan = styled.span`
  margin-top: 0.3rem;
  font-size: ${props => props.theme.fontSizes.xsmall};
  color: #777;
`;

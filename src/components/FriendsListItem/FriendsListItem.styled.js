import styled from 'styled-components';

const basicWidth = '300px';
const topPadding = '10px';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 15px;
  width: ${basicWidth};
  height: calc(${basicWidth} / 3);
  padding: ${topPadding} 15px;
  background-color: #ffff;
  box-shadow: 0 6px 8px 2px rgba(0, 0, 0, 0.5);
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const ImageContainer = styled.div`
  width: calc(${basicWidth} / 3 - (2 * ${topPadding}));
  height: calc(${basicWidth} / 3 - (2 * ${topPadding}));
  border-radius: 7px;
  background-color: rgb(232, 230, 225);
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

import styled from 'styled-components';

const sectionWidth = '480px';

export const FriendsContainer = styled.section`
  width: ${sectionWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(232, 230, 225);
  margin: 0 auto 20px;
  padding: 15px;
`;

export const FriendsList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

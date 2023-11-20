import styled from 'styled-components';

const sectionWidth = '480px';
const basicWidth = '300px';

export const ProfileContainer = styled.section`
  width: ${sectionWidth};
  height: 565px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(232, 230, 225);
  margin: 0 auto 20px;
`;

export const ProfileWrapper = styled.div`
  width: ${basicWidth};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(232, 230, 225);
  border-radius: 5px;
`;

export const ProfileFrame = styled.div`
  width: 100%;
  height: 350px;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
  background-color: rgb(232, 230, 225);
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  text-align: center;
`;

export const StatsContainer = styled.div`
  width: 100%;
  background-color: rgb(240, 238, 233);
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

export const StatsList = styled.ul`
  display: flex;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  height: calc(${basicWidth} / 3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
  &:not(:last-child) {
    border-top: 1px solid rgb(232, 230, 225);
    border-right: 1px solid rgb(232, 230, 225);
  }
  &:last-child {
    border-top: 1px solid rgb(232, 230, 225);
  }
`;

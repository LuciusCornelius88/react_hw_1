import styled from 'styled-components';

const sectionWidth = '480px';
const sectionHeight = '322px';
const basicWidth = '380px';
const basicHeight = '180px';

export const StatsSection = styled.section`
  width: ${sectionWidth};
  height: ${sectionHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(232, 230, 225);
  margin: 0 auto 20px;
`;

export const Container = styled.div`
  width: ${basicWidth};
  height: ${basicHeight};
  background-color: #ffff;
  box-shadow: 0 5px 13px 6px rgba(0, 0, 0, 0.4);
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: calc(100% - (${basicWidth} / 5));
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticsContainer = styled.div`
  width: 100%;
  height: calc(${basicWidth} / 5);
`;

export const StatisticsList = styled.ul`
  display: flex;
  height: inherit;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

export const StatisticsItem = styled.li`
  flex-basis: calc(100% / 5);
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 5px;
  background-color: ${({ color }) => color};
`;

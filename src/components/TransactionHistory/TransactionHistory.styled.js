import styled from 'styled-components';

const sectionWidth = '510px';
const borderColor = 'rgba(232, 230, 225, 0.8);';

export const TableContainer = styled.section`
  width: ${sectionWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  margin: 0 auto;
  padding: 15px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);
`;

export const THead = styled.thead`
  color: #ffff;
  background-color: rgb(141, 215, 240);
`;

export const TH = styled.th`
  height: 60px;
  &:last-child {
    border-bottom: 1px solid ${borderColor};
  }
  &:not(:last-child) {
    border-right: 1px solid ${borderColor};
    border-bottom: 1px solid ${borderColor};
  }
`;

export const TD = styled.td`
  text-align: center;
  height: 50px;
  &:last-child {
    border-bottom: 1px solid ${borderColor};
  }
  &:not(:last-child) {
    border-right: 1px solid ${borderColor};
    border-bottom: 1px solid ${borderColor};
  }
`;

export const TR = styled.tr`
  &:nth-child(2n + 1):not(:first-child) {
    background-color: #ffff;
  }
  &:nth-child(2n) {
    background-color: rgba(232, 230, 225, 0.3);
  }
  &:last-child {
    & > * {
      border-bottom: 0;
    }
  }
`;

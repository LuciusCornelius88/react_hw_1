import * as TransactionStyles from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  const tableHeader = Object.keys(transactions[0]);

  return (
    <TransactionStyles.TableContainer className="table-container">
      <TransactionStyles.Table className="transaction-history">
        <TransactionStyles.THead>
          <tr>
            {tableHeader.map((colTitle) => {
              colTitle = colTitle.replace(/^./, colTitle[0].toUpperCase());
              return colTitle !== 'Id' ? <TransactionStyles.TH key={Math.random() + colTitle}>{colTitle}</TransactionStyles.TH> : '';
            })}
          </tr>
        </TransactionStyles.THead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <TransactionStyles.TR key={transaction.id}>
                <TransactionStyles.TD>{transaction.type}</TransactionStyles.TD>
                <TransactionStyles.TD>{transaction.amount}</TransactionStyles.TD>
                <TransactionStyles.TD>{transaction.currency}</TransactionStyles.TD>
              </TransactionStyles.TR>
            );
          })}
        </tbody>
      </TransactionStyles.Table>
    </TransactionStyles.TableContainer>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

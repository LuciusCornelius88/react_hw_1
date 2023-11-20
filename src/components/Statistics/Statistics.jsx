import PropTypes from 'prop-types';
import * as StatsStyles from './Statistics.styled';

const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export const Statistics = ({ statData }) => {
  const { title, data } = statData;
  return (
    <StatsStyles.StatsSection className="statistics">
      <StatsStyles.Container className="container">
        <StatsStyles.TitleContainer className="title-container">
          <h2 className="title">{title.toUpperCase()}</h2>
        </StatsStyles.TitleContainer>
        <StatsStyles.StatisticsContainer className="stats-container">
          <StatsStyles.StatisticsList className="stat-list">
            {data.map(({ id, label, percentage }) => (
              <StatsStyles.StatisticsItem className="item" key={id} color={randomColor()}>
                <span className="label">{label}: </span>
                <span className="percentage">{percentage}%</span>
              </StatsStyles.StatisticsItem>
            ))}
          </StatsStyles.StatisticsList>
        </StatsStyles.StatisticsContainer>
      </StatsStyles.Container>
    </StatsStyles.StatsSection>
  );
};

Statistics.propTypes = {
  statData: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

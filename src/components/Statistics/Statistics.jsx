import PropTypes from 'prop-types';

export const Statistics = ({ statData }) => {
  const { title, data } = statData;
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}: </span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statData: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

import PropTypes from 'prop-types';

const EventReal = ({
  eventReal: {
    title = '',
    description = '',
    date = '',
    time = '',
    location = '',
    category,
  },
}) => {
  return (
    <article>
      <h3>
        {title} category: {category}
      </h3>
      <p>{description}</p>
      <p>
        {date} {time}
      </p>
      <p>location: {location}</p>
    </article>
  );
};

EventReal.propTypes = {
  eventReal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default EventReal;

import PropTypes from 'prop-types';

const Main = ({ children, className = '' }) => {
  return <main className={className}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Main;

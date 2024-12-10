import PropTypes from 'prop-types';

function Section({ children }) {
  return (
    <section className="w-screen h-1/2 flex justify-center items-center overflow-hidden ">
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node
};

export default Section;

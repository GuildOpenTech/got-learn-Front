import propTypes from 'prop-types';

/**
 * @param {string} title title of the section
 * @param {React.ReactNode} children content of the section
 * @returns {React.ReactNode} Page's section component
 */
export default function Section(
  { title, children }: { title: string, children: React.ReactNode }
) {

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
Section.proptTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
}
import propTypes from 'prop-types';

/**
 * @param {string} title title of the section
 * @param {React.ReactNode} children content of the section
 * @returns {React.ReactNode} Page's section component
 */
export default function Section(
  { title, children }: Props
) {

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

interface Props {
  title: string,
  children: React.ReactNode,
}
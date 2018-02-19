import styled from 'styled-components'

const SectionHeader = styled.h2`
  font-family: 'Open Sans';
  font-size: 1.2rem;
  font-weight: 400;

  &:after {
    background: #008bca;
    height: 0.1rem;
    width: 3rem;
    content: '';
    display: block;
    position: relative;
    bottom: -0.5rem;
  }
`

export default SectionHeader

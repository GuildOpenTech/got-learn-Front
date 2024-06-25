import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

export default function Body({ children }: Props) {

  const [position, setPosition] = useState(0)

  const handleScroll = (e: Event) => {
    const documentHeight = document.body.scrollHeight
    const newPosition = window.scrollY
    const scroll = ((newPosition + window.innerHeight/2) * 100 / documentHeight)
    setPosition(scroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [position])

  return (
    <main>
      <Box
        height='100%'
        width="5px"
        sx={{
          background: `linear-gradient(to bottom, #0D2D45 ${position - 25}%, #2AB8CD ${position - 15}%, #2AB8CD ${position + 15}%, #0D2D45 ${position + 25}%)`,
          position: 'fixed',
          top: '0',
          left: '114px'
        }}
      />
      { children }
    </main>
  )
}

interface Props {
  children: React.ReactNode,
}
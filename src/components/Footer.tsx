import Box from "@mui/material/Box";
import { Colors } from "../core/colors";

export default function Footer() {
  return (
    <footer>
      <Box
        height='74px'
        width="100%"
        sx={{
          background: `radial-gradient(at left top, ${Colors.BLEU_OUTREMER}, ${Colors.BLEU_NUIT})`,
          position: 'fixed',
          bottom: '0',
        }}
      >
      </Box>
    </footer>
  ) 
}
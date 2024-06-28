import Box from "@mui/material/Box";
import { Colors } from "../core/colors";
import canvaImage from "../assets/canva.png";
import Github from "../assets/Github.png";
import HelloAsso from "../assets/HelloAsso.png";
import JeVeuxAider from "../assets/JeVeuxAidergouvfr.png";

export default function Footer() {
  return (
    <footer>
      <Box
        height="74px"
        width="100%"
        sx={{
          background: `radial-gradient(at left top, ${Colors.BLEU_OUTREMER}, ${Colors.BLEU_NUIT})`,
          position: "fixed",
          bottom: "0",
        }}
      >
        <div className="footer">
          <h1 className="footer-title">Nos Partenaires</h1>
          <div className="partners">
            <img src={Github} alt="Github" />
            <img src={canvaImage} alt="canvaImage" />
            <img src={HelloAsso} alt="HelloAsso" />
            <img src={JeVeuxAider} alt="JeVeuxAider" />
          </div>
        </div>
    
      </Box>
    </footer>
  );
}

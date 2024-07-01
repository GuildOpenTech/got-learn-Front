import { Box, Button, Typography } from "@mui/material";
import Section from "../../Section";
import { Colors } from "../../../core/colors";
import "./GotAme.css";

export default function GotAme() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "128px", // margin-top from header
          mb: "28px", // margin-bottom from the scrollbar
          height: 60,
          width: 782,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Cabin",
            // fontWeight: 600, // Semi-bold
            fontSize: "60",
            // letterSpacing: "62px",
            color: "white",
            textAlign: "center", // Ensures text is centered
          }}
        >
          (Se) Dépasser l'obstacle
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            color: Colors.ORANGE,
          }}
        >
          <h2>Avec la GOT Ame : vous gagnez de l'expérience pratique</h2>
        </Box>
        <Box color={"white"}>
          <ul>
            <li>tu acquiers de la séniorité</li>
            <li>pour trouver ton premier job</li>
            <li>pour valider ta reconversion</li>
            <li>pour acquérir de nouvelles compétences</li>
          </ul>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            color: Colors.ORANGE,
          }}
        >
          <h2>Le GOT Engagement : tu participes à l'association</h2>
        </Box>
        <Box color={"white"}>
          <ul>
            <li>tu acquiers et/ou partages des connaissances</li>
            <li>
              dans des projets opensource que tu intègres dans ton portfolio
            </li>
            <li>
              nous créons les projets qui te manquent et nous montons les
              équipes
            </li>
          </ul>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          color: Colors.ORANGE,
          background: Colors.BLEU_OUTREMER,
        }}
      >
        J'ai déjà la Got Ame: Je m'engage
      </Button>

      {/*} 
      <Box
        sx={{
          color: Colors.ORANGE,
          height: "calc(100vh)",
          backgroundImage:
            'url("src/assets/backgrounds/Body_MeshGradient_2.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <h2>Avec la GOT Ame : vous gagnez de l'expérience pratique</h2>
      </Box>
      <Box>
        <h3>Avec la GOT Ame : vous gagnez de l'expérience pratique</h3>
        <ul>
          <li>tu acquiers de la séniorité</li>
          <li>pour trouver ton premier job</li>
          <li>pour valider ta reconversion</li>
          <li>pour acquérir de nouvelles compétences</li>
        </ul>
      </Box>
      <Button
        sx={{
          height: 74,
          width: 508,
          color: Colors.ORANGE,
          background: Colors.BLEU_NUIT,
        }}
        variant="contained"
      >
        J'ai déjà la Got Ame: Je m'engage !
      </Button>  */}

      {/* <Section title="" id={"got-ame-title"}>
        <Box
          bgcolor={Colors.BLEU_NUIT}
          sx={{
            height: "calc(100vh)",
            backgroundImage:
              'url("src/assets/backgrounds/Body_MeshGradient_2.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right",
          }}
        >
          
          <section>
            <h3>Avec la GOT Ame : vous gagnez de l'expérience pratique</h3>
            <ul>
              <li>tu acquiers de la séniorité</li>
              <li>pour trouver ton premier job</li>
              <li>pour valider ta reconversion</li>
              <li>pour acquérir de nouvelles compétences</li>
            </ul>
          </section>
          <section>
            <h3>Le GOT Engagement : tu participes à l'association</h3>
            <ul>
              <li>tu acquiers et/ou partages des connaissances</li>
              <li>
                dans des projets opensource que tu intègres dans ton portfolio
              </li>
              <li>
                nous créons les projets qui te manquent et nous montons les
                équipes
              </li>
            </ul>
          </section>
        </Box>
      </Section> */}
    </>
  );
}

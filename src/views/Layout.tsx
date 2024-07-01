import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
import Section from "../components/Section";
import { Box } from "@mui/material";
import TopSection from "../components/Sections/TopSection";
import GotAme from "../components/Sections/GotAme/GotAme";

/**
 * Display the layout of the page
 * @returns {React.ReactNode} Layout component
 */
export default function Layout({}: Props) {
  return (
    <>
      <Header />
      <Body>
        <TopSection />
        <Box
          sx={{
            height: "calc(100vh)",
            backgroundImage:
              'url("src/assets/backgrounds/Body_MeshGradient_2.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Section title="La GOT Âme" id="gotAme">
            <GotAme></GotAme>
          </Section>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={"200px"}
          sx={{
            background: "linear-gradient(0deg, #071520 30%, #0D2D45 90%)",
          }}
        >
          <Section title="Projets en cours" id="projects">
            <p>content of section here</p>
          </Section>
          <Section title="section 5" id="5">
            <p>content of section here</p>
          </Section>
          <Section title="section 6" id="6">
            <p>content of section here</p>
          </Section>
          <Section title="Ils racontent leur expérience" id="feedbacks">
            <p>content of section here</p>
          </Section>
        </Box>
      </Body>

      <Footer />
    </>
  );
}

interface Props {
  children: React.ReactNode;
}

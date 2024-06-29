import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../../core/colors";

export default function TopSection() {
  return (
    <Box
      bgcolor={Colors.BLEU_NUIT}
      sx={{
        height: 'calc(100vh - 130px)',
        backgroundImage: 'url("src/assets/backgrounds/Body_MeshGradient N°1.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        paddingLeft: '38px'
      }}
    >
      <TitleAndLogo />
      <Description />
      <CTAButton />
    </Box>
  )
}

const Marker = (props: MarkerProps) => {
  return (
    <Box
      width={props.sizePx ?? '11px'}
      height={props.sizePx ?? '11px'}
      sx={{
        borderRadius: '50%',
        background: Colors.BLEU_NUIT,
        border: `${props.borderSize ?? '1mm'} solid ${props.color ?? 'white'}`,
      }}
    />
  )
}

interface MarkerProps {
  sizePx?: number;
  borderSize?: string;
  color?: string;
}


interface MarkerWithTextProps {
  color?: string;
  text: string;
}
const MarkerWithText = ({ color, text }: MarkerWithTextProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '24px',
        color: color ?? 'white',
        fontSize: '24px'
      }}
    >
      <Marker color={color} />
      <p>{text}</p>
    </Box>
  )
}

const TitleAndLogo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '59px',
        paddingTop: '130px',
      }}
    >
      <Box component="img" src="src/assets/logos/LOGO_TxtBlc_158px.png" />
      <Typography variant="h2"
        sx={{
          fontSize: '59px',
          fontWeight: '600',
          lineHeight: '62px',
          letterSpacing: '0.1em',
          color: 'white',
        }}
      >
        Innovons l'informatique, <br />
        inspirons les talents
      </Typography>
    </Box>
  )
}

const CTAButton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        variant="contained"
        sx={{
          background: 'radial-gradient(170.24% 336.33% at 100% 84.88%, #0D2D45 0%, #0D2D45 38.42%, #2AB8CD 100%)',
        }}
      >
        Contained
      </Button>
    </Box>

  )
}

const MarkersLine = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        marginLeft: '175px',
        marginTop: '16px',
        width: '2.3px',
        height: '160px',
        background: 'white',
      }}
    />
  )
}

const Description = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
        marginLeft: '170px',
        marginTop: '48px',
      }}
    >
      <MarkerWithText
        text="Participe gratuitement à des projets open source technologiquement innovants"
      />

      <MarkerWithText
        color={Colors.ORANGE}
        text="Immerge toi dans la GOT Âme, inspirée par l'École 42 et notre passion pour l'IT"
      />

      <MarkerWithText
        text="Expérimenté ou en reconversion, réseaute avec des experts dans leurs domaines"
      />

      <MarkerWithText
        color={Colors.ORANGE}
        text="Collabore avec des passionnés solidaires, acquiers de l'expérience, monte en compétences"
      />
    </Box>
  )
}
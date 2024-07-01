import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../../../core/colors";
import { SHAKE } from "../../../core/animations";

export default function TopSection() {
  return (
    <Box
      bgcolor={Colors.BLEU_NUIT}
      sx={{
        height: 'calc(100vh - 130px)',
        backgroundImage: 'url("src/assets/backgrounds/Body_MeshGradient_1.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        paddingLeft: '8px'
      }}
    >
      <TitleAndLogo />
      <Description />
      <CTAButton />
      <BotImagePlaceholder />
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
        paddingTop: '60px',
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
        marginTop: '84px'
      }}
    >
      <Button
        data-testid="ctaButton"
        variant="contained"
        disableRipple
        sx={{
          background: `radial-gradient(170.24% 336.33% at 100% 84.88%, ${Colors.BLEU_OUTREMER} 0%, ${Colors.BLEU_OUTREMER} 38.42%, ${Colors.TURQUOISE} 100%)`,
          border: '1px solid',
          borderImageSource: `radial-gradient(170.24% 336.33% at 100% 84.88%, ${Colors.BLEU_OUTREMER} 0%, ${Colors.BLEU_OUTREMER} 38.42%, ${Colors.TURQUOISE} 100%)`,
          width: '164px',
          height: '73px',
          padding: '12px 25px 12px 25px',
          gap: '10px',
          borderRadius: '128px',
          boxShadow: `2px 2px 3px 0px ${Colors.LUEUR_BLEUE} inset`,
          textTransform: 'none',
          fontSize: '20px',
          lineHeight: 'initial',
          color: Colors.ORANGE,
          opacity: '0.5',
          textAlign: 'center',

          ':hover': {
            opacity: '1',
            animation: `${SHAKE} 0.82s cubic-bezier(.36, .07, .19, .97) both infinite;`,
          },
        }}
        href="/inscription"
      >
        Viens sur <br /> Discord
      </Button>
    </Box>

  )
}

const MarkersLine = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        marginLeft: '174.33px',
        marginTop: '64px',
        width: '2.3px',
        height: '160px',
        background: 'white',
      }}
    />
  )
}

const Description = () => {
  return (
    <>
      <MarkersLine />
      <Box
        sx={{
          position: 'relative',
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
    </>
  )
}

const BotImagePlaceholder = () => {
  return (
    <>
      <Box
        sx={{
          fontSize: '134px',
          position: 'absolute',
          marginRight: '81px',
          right: 0,
          bottom: '43%',
          rotate: '-15deg',
        }}
      >
        🤖
      </Box>
      <Box
        sx={{
          fontSize: '18px',
          position: 'absolute',
          marginRight: '160px',
          right: 0,
          top: '35%',
          color: `${Colors.ORANGE}`,
          padding: '0 16px',
        }}
      >
        Miss Terry <br/> te répond
      </Box>
    </>

  )
}
import { Colors } from "../core/colors";
import Navbar from "./NavBar/Navbar";

export default function Header() {

  return (
    <header style={{
      width: "100 %",
      height: "130px",
      position: "sticky",
      display: "flex",
      alignItems:  "center",
      justifyContent: "space-between",
      top: 0,
      background:Colors.BLEU_NUIT
    }}>
      <img
        onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth', })}}
        src="/src/assets/LOGO_TxtBlc_99px.svg"
        alt="Logo Guild Open Tech"
        style={{
          width: '99px',
          marginLeft: "58px",
        }}
      />
      <Navbar />
    </header >
  )
}

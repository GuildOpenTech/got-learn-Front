import Navbar from "./NavBar/Navbar";

export default function Header() {

  return (
    <header>
      <img 
        src="/src/assets/react.svg"
        alt="image ici" 
        style={{
          width: '100px'
        }}
      />
      <Navbar />
    </header>
  ) 
}
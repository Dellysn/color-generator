import {
    emoji,
    footer, footerText
} from "../styles/footer.css";


function Footer() {
  return (
    <footer className={footer}>
      <p
        className={footerText}
      >Made with <span role="img" aria-label="love"
        className={emoji}
      >❤️</span> by Codellyson from Nigeria <span role="img" aria-label="flag"
        className={emoji}
      >🇳🇬</span></p>
    </footer>
  );
}

export default Footer;

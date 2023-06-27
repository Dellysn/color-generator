


function Footer({
    color,
}: {
    color: string;
}) {
  return (
    <footer className={'footer'}

    >
      <p
        className={'footer-text'}
      >Made with <span role="img" aria-label="love"
        className={'emoji'}
      >❤️</span> by <a
        href="https://codellyson.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            color: color,
        }}

      >Codellyson</a> from Nigeria <span role="img" aria-label="flag"
        className={'emoji'}
      >🇳🇬</span></p>
    </footer>
  );
}

export default Footer;

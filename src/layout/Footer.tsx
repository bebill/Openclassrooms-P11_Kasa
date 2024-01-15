export const Footer = () => {
  return (
    <footer>
      <img
        src={`${process.env.PUBLIC_URL}/logo_footer.svg`}
        alt="Logo Kasa Footer"
      />
      <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
};

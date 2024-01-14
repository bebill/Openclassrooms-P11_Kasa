import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <main>
      <div className="error404">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  );
};

import React from "react";

import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/comprovante-devolucao">Comprovante de Devolução</Link>
        </li>
        <li>
          <Link to="/consulta">E-mails de Consulta</Link>
        </li>
        <li>
          <Link to="/demonstrativo-despesas">Demonstrativo de Despesas</Link>
        </li>
        <li>
          <Link to="/despesas-especiais">Demonstrativo de Despesas Específicas</Link>
        </li>
      </ul>
    </nav>
  );
};

import React from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
import { Header } from "./composants/Header";
import { Footer } from "./composants/Footer";
import Container from "react-bootstrap/Container";

import { PageAccueil } from "./pages/PageAccueil";
import { PageRepertoire } from "./pages/PageRepertoire";
import { PageAjouterRepertoire } from "./pages/PageAjouterRepertoire";
import { PageAdmin } from "./pages/PageAdmin";
import { PageModifierRepertoire } from "./pages/PageModifierRepertoire";
import { PageConfirmationSuppression } from "./pages/PageConfirmationSuppression";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/repertoire" element={<PageRepertoire />} />
          <Route path="/admin" element={<Navigate to='/admin/repertoire' />} />
          <Route path="/admin/repertoire" element={<PageAdmin />} />
          <Route path="/admin/repertoire/ajouter" element={<PageAjouterRepertoire />} />
          <Route path="/admin/repertoire/modifier/:id" element={<PageModifierRepertoire />} />
          <Route path="/admin/repertoire/supprimer/:id" element={<PageConfirmationSuppression />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

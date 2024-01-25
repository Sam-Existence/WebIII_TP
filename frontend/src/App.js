import React from "react";
import {
  BrowserRouter,
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/repertoire" element={<PageRepertoire />} />
          <Route path="/ajouter" element={<PageAjouterRepertoire />} />
          <Route path="/admin" element={<PageAdmin />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

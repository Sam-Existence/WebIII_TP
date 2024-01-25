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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/repertoire" element={<PageRepertoire />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Header } from "./composants/Header";
import { Footer } from "./composants/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from 'react-router-dom';

import { PageAccueil } from "./pages/PageAccueil";
import { PageRepertoire } from "./pages/PageRepertoire";
import { PageAjouterRepertoire } from "./pages/PageAjouterRepertoire";
import { PageAdmin } from "./pages/PageAdmin";
import { PageModifierRepertoire } from "./pages/PageModifierRepertoire";
import { GabaritClient } from "./composants/GabaritClient";
import { GabaritAdmin } from "./composants/GabaritAdmin";
import { PageConsulterDemandeSpeciale } from "./pages/PageConsulterDemandeSpeciale";
import { PageConsulterTop5 } from "./pages/PageConsulterTop5";
import { PageDemandeSpeciales } from "./pages/PageDemandesSpeciales";
import { PageRechercherDemandeSpeciales } from "./pages/PageRechercherDemandeSpeciale";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<GabaritClient />}>
            <Route index element={<PageAccueil />} />
            <Route path="repertoire" element={<PageRepertoire />} />
            <Route path="demandes-speciales" element={<PageRechercherDemandeSpeciales />} />
          </Route>
          <Route path="/admin" element={<GabaritAdmin />}>
            <Route index element={<Navigate to='/admin/repertoire' />} />
            <Route path="repertoire" element={<PageAdmin />} />
            <Route path="repertoire/top-5" element={<PageConsulterTop5 />} />
            <Route path="repertoire/ajouter" element={<PageAjouterRepertoire />} />
            <Route path="repertoire/modifier/:id" element={<PageModifierRepertoire />} />
            <Route path="demandes-speciales" element={<PageDemandeSpeciales />} />
            <Route path="demandes-speciales/:id" element={<PageConsulterDemandeSpeciale />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

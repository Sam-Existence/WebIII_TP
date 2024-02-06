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
import { PageConfirmationSuppression } from "./pages/PageConfirmationSuppression";
import { GabaritClient } from "./composants/GabaritClient";
import { GabaritAdmin } from "./composants/GabaritAdmin";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<GabaritClient />}>
            <Route index element={<PageAccueil />} />
            <Route path="repertoire" element={<PageRepertoire />} />
          </Route>
          <Route path="/admin" element={<GabaritAdmin />}>
            <Route index element={<Navigate to='/admin/repertoire' />} />
            <Route path="repertoire" element={<PageAdmin />} />
            <Route path="repertoire/ajouter" element={<PageAjouterRepertoire />} />
            <Route path="repertoire/modifier/:id" element={<PageModifierRepertoire />} />
            <Route path="repertoire/supprimer/:id" element={<PageConfirmationSuppression />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

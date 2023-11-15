import './App.css';
import './BaseLayout.css';
import './Homepage/Homepage.css'
import { BaseLayout } from './BaseLayout';
import { HomeContents} from './Homepage/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path='/portfolio' element={<HomeContents />} />
          <Route path='/projects' />
          <Route path='about' />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;

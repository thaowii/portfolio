import { BaseLayout } from './BaseLayout';
import { HomeContents} from './Homepage/Homepage';
import { ProjectsContent } from './ProjectsPage/ProjectsPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path='/portfolio' element={<HomeContents />} />
          <Route path='/projects' element={<ProjectsContent/>} />
          <Route path='about' />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;

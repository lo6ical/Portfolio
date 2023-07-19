import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
function App() {

  return (
    <>
    <div style={{ width: '90%', margin: '0 auto' }}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Resume />} />
          <Route path={"/resume"} element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}
export default App

import SideLogin from "./components/Authentication/SideLogin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SideSignup from "./components/Authentication/SideSignup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { ConfigProvider } from 'react-avatar';

function App() {
  return (
    <ConfigProvider colors={['yellow', 'green', 'blue']}>
      <BrowserRouter>
        <div className="App">

          {/* Routes */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SideSignup />} />
            <Route exact path="/login" element={<SideLogin type="student" />} />
            <Route exact path="/faculty" element={<SideLogin type="faculty" />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>

        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;

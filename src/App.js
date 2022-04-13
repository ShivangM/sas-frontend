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
import Loading from "./components/Loading";
import { useSelector } from 'react-redux';

function App() {

  const loading = useSelector(state => state.loading.loading.loading)
  const loadingMsg = useSelector(state => state.loading.loading.msg)

  return (
    <ConfigProvider colors={['yellow', 'green', 'blue']}>
      <BrowserRouter>
        <div className="App">
          {loading? <Loading msg={loadingMsg}/>: null} 

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

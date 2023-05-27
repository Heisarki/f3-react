import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Stack } from '@mui/material';
import Header from './components/Header';
import Login from './components/Login';
import Profile from './components/Profile'
import NotFound from './components/NotFound';
 

function App() {
    return (
        <Stack alignItems='center' bgcolor='black' sx={{minHeight:"100vh"}}>
            <Header />
            <Stack maxWidth={800} >
                {/* <Stack sx={{width: "100%"}} border={1}> */}
                <p style={{opacity: "0"}}>Then we define our  An application can have multiple   Our basic example only uses one.</p>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/" element={<Login />} />

                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                {/* </Stack> */}
            </Stack>
      </Stack>
  );
}

export default App;

import './App.css';
import 'devextreme/dist/css/dx.light.css';
import Stack from '@mui/material/Stack';
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{backgroundColor:"#edededc2"}}>
          <Sidebar width="30%"/>
          <MainComponent />
      </Stack>
      
    </div>
  );
}

export default App;

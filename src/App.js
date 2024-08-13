import './App.css';
import 'devextreme/dist/css/dx.light.css';
import Stack from '@mui/material/Stack';
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';
import DmsDocModal from './components/DmsDocModal';

function App() {
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{backgroundColor:"#edededc2"}}>
          <Sidebar width="30%"/>
          <MainComponent />
      </Stack>
      <DmsDocModal/>
    </div>
  );
}

export default App;

import './App.css';
import 'devextreme/dist/css/dx.light.css';
import Stack from '@mui/material/Stack';
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';
import DmsDocModal from './components/DmsDocModal';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
    const urlSearchParams = new URLSearchParams(window.location.search);
    const ecryptedObj = urlSearchParams.get('schema');
    const decodedObj = ecryptedObj ? JSON.parse(atob(ecryptedObj)) : { ids: [], type: '' };
    console.log('decodedObj', decodedObj);

    axios.post("https://docusms.uk/dsdesktopwebservice.asmx/Json_GetItemBase64DataById", {
      "agrno": "0003",
      "Email": "patrick@docusoft.net",
      "password": "UGF0cmljazEyMy4=",
      "ItemId": "1125997"
  }).then(res=>console.log("res", res.data.d)).catch(err=>console.error("error", err))
  },[]);
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{backgroundColor:"#edededc2"}}>
          <Sidebar width="26%"/>
          <MainComponent />
      </Stack>
      <DmsDocModal/>
    </div>
  );
}

export default App;

import { GlobalStyle } from '@sharedComponents/GlobalStyle';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '@pages/Home';
import { SamplePage } from '@pages/SamplePage';
import { Room } from '@pages/Room/Room';

import { Main } from '@pages/Main/Main';
import { CreateRoom } from '@pages/CreateRoom/CreateRoom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/samplepage' element={<SamplePage />} />
        <Route path='/room/create' element={<CreateRoom />} />
        <Route path='/room' element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { GlobalStyle } from '@sharedComponents/GlobalStyle';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '@pages/Home';
import { SamplePage } from '@pages/SamplePage';
import { Room } from '@pages/Room/Room';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/samplepage' element={<SamplePage />} />
          <Route path='/room' element={<Room />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

import YouTube from 'react-youtube';
import styled from 'styled-components';

export const YoutubeContainer = () => {
  return (
    <Container>
      <YouTube
        videoId={'GY_StGcBSYw'}
        opts={{
          width: '560',
          height: '315',
          playerVars: {
            autoplay: 1, //자동재생 O
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </Container>
  );
};

const Container = styled.div``;

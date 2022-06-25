import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import YouTube, { YouTubeEvent } from 'react-youtube';
import styled from 'styled-components';

export const YoutubeContainer = () => {
  // ------------------------------- 1차시도 --------------------------------------------------------
  const handleClick = () => {
    const iFrame = document.querySelector('.youtubeIframe');
    console.log(iFrame);
  };
  return (
    <Container>
      <YouTube
        videoId={'GY_StGcBSYw'}
        iframeClassName={'youtubeIframe'}
        opts={{
          width: '560',
          height: '315',
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
          },
        }}
        onPlay={(e) => {}}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </Container>
  );
};
//   //----------------------------------------------2차시도-----------------------------------------------------------
//   // useEffect(() => {
//   //   const tag = document.createElement('script');
//   //   tag.src = 'https://www.youtube.com/iframe_api';
//   //   const firstScriptTag = document.getElementsByTagName('script')[0];
//   //   (firstScriptTag as any).parentNode.insertBefore(tag, firstScriptTag);
//   //   var player;
//   //   function onYouTubeIframeAPIReady() {
//   //     player = new YT.Player('gangnamStyleIframe', {
//   //       //                height: '315',            // <iframe> 태그 지정시 필요없음
//   //       //                width: '560',             // <iframe> 태그 지정시 필요없음
//   //       //                videoId: '9bZkp7q19f0',   // <iframe> 태그 지정시 필요없음
//   //       //                playerVars: {             // <iframe> 태그 지정시 필요없음
//   //       //                    controls: '2'
//   //       //                },
//   //       events: {
//   //         onReady: onPlayerReady, // 플레이어 로드가 완료되고 API 호출을 받을 준비가 될 때마다 실행
//   //         onStateChange: onPlayerStateChange, // 플레이어의 상태가 변경될 때마다 실행
//   //       },
//   //     });
//   //   }
//   //   function onPlayerReady(event) {
//   //     console.log('onPlayerReady 실행');
//   //     // 플레이어 자동실행 (주의: 모바일에서는 자동실행되지 않음)
//   //     event.target.playVideo();
//   //   }
//   //   var playerState;
//   //   function onPlayerStateChange(event) {
//   //     playerState =
//   //       event.data == YT.PlayerState.ENDED
//   //         ? '종료됨'
//   //         : event.data == YT.PlayerState.PLAYING
//   //         ? '재생 중'
//   //         : event.data == YT.PlayerState.PAUSED
//   //         ? '일시중지 됨'
//   //         : event.data == YT.PlayerState.BUFFERING
//   //         ? '버퍼링 중'
//   //         : event.data == YT.PlayerState.CUED
//   //         ? '재생준비 완료됨'
//   //         : event.data == -1
//   //         ? '시작되지 않음'
//   //         : '예외';
//   //     console.log('onPlayerStateChange 실행: ' + playerState);
//   //   }
//   // }, []);
//   // return (
//   //   <>
//   //     <iframe
//   //       id='gangnamStyleIframe'
//   //       width='560'
//   //       height='315'
//   //       src='https://www.youtube.com/embed/9bZkp7q19f0?rel=0&enablejsapi=1'
//   //       frameBorder='0'
//   //       allow='autoplay; fullscreen'
//   //       allowFullScreen
//   //     ></iframe>
//   //   </>
//   // );
//   //----------------------------3차 시도 ---------------------------------
//   // const [playbackRate, setPlayBackRate] = useState(1);
//   // const handleClick = () => {
//   //   setPlayBackRate(2);
//   // };
//   // return (
//   //   <Container>
//   //     <ReactPlayer
//   //       url='https://www.youtube.com/watch?v=TjoQ2H57IjE'
//   //       playbackRate={playbackRate}
//   //     />
//   //     <button>2배속</button>
//   //   </Container>
//   // );
//   //-----------------4차 시도-----------------------
//   // let loadYT: any;
//   // useEffect(() => {
//   //   if (!loadYT) {
//   //     loadYT = new Promise((resolve) => {
//   //       const tag = document.createElement('script');
//   //       tag.src = 'https://www.youtube.com/iframe_api';
//   //       const firstScriptTag = document.getElementsByTagName('script')[0];
//   //       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//   //       window.onYouTubeIframeAPIReady = () => {
//   //         if (window.YT) return resolve(window.YT);
//   //       };
//   //     });
//   //   }
//   // }, []);
//   // return <Container></Container>;
// };

// const Container = styled.div``;

//----------------------5차 시도---------------------------------------
// import { Component, PropTypes } from 'react';

// let loadYT;

// export default class YouTube extends Component {
//   componentDidMount() {
//     if (!loadYT) {
//       loadYT = new Promise((resolve) => {
//         const tag = document.createElement('script');
//         tag.src = 'https://www.youtube.com/iframe_api';
//         const firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//         window.onYouTubeIframeAPIReady = () => resolve(window.YT);
//       });
//     }
//     loadYT.then((YT) => {
//       this.player = new YT.Player(this.youtubePlayerAnchor, {
//         height: this.props.height || 390,
//         width: this.props.width || 640,
//         videoId: this.props.YTid,
//         events: {
//           onStateChange: this.onPlayerStateChange,
//         },
//       });
//     });
//   }

//   onPlayerStateChange = (e) => {
//     if (typeof this.props.onStateChange === 'function') {
//       this.props.onStateChange(e);
//     }
//   };

//   render() {
//     return (
//       <section className='youtubeComponent-wrapper'>
//         <div
//           ref={(r) => {
//             this.youtubePlayerAnchor = r;
//           }}
//         ></div>
//       </section>
//     );
//   }
// }

// YouTube.propTypes = {
//   YTid: PropTypes.string.required,
//   width: PropTypes.number,
//   height: PropTypes.number,
//   onStateChange: PropTypes.func,
// };

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

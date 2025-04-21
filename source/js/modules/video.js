const iframeWrap = document.querySelector('.about__video-wrapper');
const imageVideo = document.querySelector('.about__video-image');
const playVideo = document.querySelector('.about__video-play');

const createIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=9cwJzHRNsp0-8a4b?autoplay=1';
  iframe.width = '320';
  iframe.height = '170';
  iframe.style = 'border: 0';
  iframe.allow = 'accelerometer';
  iframeWrap.append(iframe);
};

const onPlayVideo = () => {
  playVideo.classList.add('hidden');
  imageVideo.classList.add('hidden');
};


playVideo.addEventListener('click',() => {
  onPlayVideo();
  createIframe(iframeWrap);
}
);

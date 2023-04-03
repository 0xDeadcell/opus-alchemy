const getVideoUrl = () => {
  return new Promise((resolve) => {
    chrome.webRequest.onCompleted.addListener(
      (details) => {
        if (
          details.url.includes('akamaized') &&
          details.url.includes('.mp4') &&
          details.url.includes('range=')
        ) {
          const modifiedUrl = details.url.replace(/&range=.*$/, '');
          resolve(modifiedUrl);
        }
      },
      { urls: ['<all_urls>'] },
      []
    );
  });
};

const button = document.createElement('button');
button.textContent = 'Download Video';
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
button.style.zIndex = '1000';
document.body.appendChild(button);

button.addEventListener('click', async () => {
  const videoUrl = await getVideoUrl();
  chrome.runtime.sendMessage({ type: 'downloadVideo', url: videoUrl });
});

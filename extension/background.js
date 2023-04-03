chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      if (request.type === 'downloadVideo') {
        const { url } = request;
        chrome.downloads.download({ url, filename: 'video.mp3' });
      }
    }
  );
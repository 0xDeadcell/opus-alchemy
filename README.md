# Opus Alchemy

![Opus Alchemy Logo](./extension/icons/icon.png)

- In Progress! Please wait for the first major release before downloading/cloning this repo


Opus Alchemy is a free, open-source browser extension that automatically converts XHR and OPUS audio stream media types to MP3 for easy downloading on the cybrary.it platform.

---

**Disclaimer**: Opus Alchemy is provided for educational and non-commercial purposes only. Please respect the terms of service and intellectual property rights of the platforms you use this extension with. The developers of Opus Alchemy are not responsible for any actions taken by users of this extension.

---

## Features

- Activates when connected to a domain playing video
- Listens for requests containing specific parameters
- Modifies requests to fetch the full video
- Provides a convenient download button

## Installation

1. Clone this repository to your local machine.
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner of the extensions page.
4. Click "Load unpacked" and select the `extension` folder in the cloned repository.

## Usage

1. Navigate to a video and play it.
2. Click the Opus Alchemy extension icon in the browser toolbar.
3. Press the "Convert XHR (OPUS) to MP3!" button.
4. The extension will listen for requests and provide a download link for the converted video.

## Project Structure

```
.
│   .babelrc
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   webpack.config.js
│
├───.vs
│   │   ProjectSettings.json
│   │   slnx.sqlite
│   │   VSWorkspaceState.json
│   │
│   └───opus-alchemy
│       └───v16
├───extension
│   │   background.js
│   │   content.js
│   │   content.js.map
│   │   manifest.json
│   │
│   ├───icons
│   │       icon-t.png
│   │       icon.png
│   │       icon.svg
│   │       logo-popup.png
│   │
│   └───popup
│           popup.html
│
└───src
        index.js
```

## Contributing

We welcome contributions to improve and expand the functionality of Opus Alchemy. Please submit a pull request with your proposed changes, and make sure to follow the existing code style and structure.

## License

Opus Alchemy is released under the MIT License. See the [LICENSE](LICENSE) file for more details.


---

**Disclaimer (Yes Again)**: Opus Alchemy is provided for educational and non-commercial purposes only. Please respect the terms of service and intellectual property rights of the platforms you use this extension with. The developers of Opus Alchemy are not responsible for any actions taken by users of this extension.

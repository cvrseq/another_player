# WaveSurfer.js Player



[![WaveSurfer](https://user-images.githubusercontent.com/381895/226091100-f5567a28-7736-4d37-8f84-e08f297b7e1a.png)](https://github.com/katspaugh/wavesurfer.js)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[![npm version](https://img.shields.io/npm/v/wavesurfer.js.svg)](https://www.npmjs.com/package/wavesurfer.js)

---

[Перейти на русский язык](README_RU.md)

WaveSurfer.js Player is a simple and stylish audio player designed for playing music tracks with spectrum visualization. The project includes a responsive design and supports multiple tracks playback.

---

## 📖 Features

- 🎵 Play tracks with spectrum visualization.
- 🚀 Intuitive and user-friendly interface.
- 📱 Responsive design for various devices.
- 🎛️ Easy customization of appearance and functionality.

---

## 🖼️ Screenshots

![Screenshot 2024-12-31 at 21 39 46](https://github.com/user-attachments/assets/9a0410d2-9349-43fe-9ffe-fde7c0dfab24)

---

## 🚀 Installation and Launch

### 1. Clone the repository
Clone the project to your local machine:
```bash
git clone https://github.com/cvrseq/another_player.git
cd another_player
```

### 2. Run the project locally

Use any static server to run the project. For example, with Python or JavaScript:
```python
python3 -m http.server
```
```javascript
npx serve .
```
Then open in your browser:
```arduino
http://localhost:8000
```
### 3. Deploy to hosting

Upload all project files to your hosting provider with HTML, CSS, and JavaScript support. Ensure that tracks and peaks.json paths are correctly configured.


## 📂Project Structure
```plaintext
another_player/
├── photos/          # img
├── tracks/          # tracks
├── TildaSans.07TTF/ # fonts
├── index.html       # main page
├── style.css        # styles
├── script.js        # js
├── peaks.json       # caching
└── LICENSE          # license
```

## ⚙️ Usage

Place your tracks in the tracks/ folder.
Update peaks.json for each track. Use audiowaveform to generate peaks:
    
```bash
audiowaveform -i your_audio.mp3 -o peaks.json --pixels-per-second 20
```

Configure the paths to tracks in script.js and index.html.


## 🔧 Development

If you want to make changes to the project:

    Make sure you have a text editor installed, such as VSCode.
    Edit index.html, style.css, or script.js as needed.
    Use browser developer tools (F12) for debugging.
## 📄 License

This project is licensed under the terms of the MIT license. Feel free to use, modify, and distribute this code.
## ✉️ Commercial Offer

Looking for a stylish and convenient audio player for your project?

WaveSurfer.js Player is ideal for:

    Personal music portfolios.
    Websites with podcasts or educational content.
    Commercial platforms for music streaming.

offer:

    Custom Design: Tailor the player’s appearance and functionality to your needs.
    Integration: Help with integrating the player into your website or platform.
    Support: Provide technical support and updates.

💬 Contact us to discuss collaboration:
Email: skuenemy@gmail.com

⭐ If you like the project, don't forget to star it on GitHub!

### [--> Template <--](https://ivansuslin.com/)

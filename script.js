const ctx = document.createElement('canvas').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 75);
const secondGradient = ctx.createLinearGradient(0, 0, 0, 130);
const thirdGradient = ctx.createLinearGradient(0, 0, 0, 100);
const thirdAnotherGradient = ctx.createLinearGradient(0, 0, 0, 120);
const fourGradient = ctx.createLinearGradient(0, 0, 0, 150);
gradient.addColorStop(0, 'rgb(230, 230, 0)');
gradient.addColorStop(1, 'rgb(170, 40, 0)');
secondGradient.addColorStop(0, 'rgb(255, 255, 0)');
secondGradient.addColorStop(1, 'rgb(0, 255, 0)');
thirdAnotherGradient.addColorStop(0, 'rgb(255, 0, 0)');
thirdAnotherGradient.addColorStop(1, 'rgb(255, 90, 90)');
thirdGradient.addColorStop(0, 'rgb(192, 18, 18)');
thirdGradient.addColorStop(1, 'rgb(92, 18, 18)');
fourGradient.addColorStop(0, 'rgb(0, 255, 255)');
fourGradient.addColorStop(1, 'rgb(255, 0, 255)');

const buttons = {
  playPause: document.getElementById('playPause'),
  secondPlayPause: document.getElementById('playPause2'),
  thirdPlayPause: document.getElementById('playPause3'),
  fourPlayPause: document.getElementById('playPause4'),
  fifthPlayPause: document.getElementById('playPause5'),
  sixthPlayPause: document.getElementById('playPause6'),
  seventhPlayPause: document.getElementById('playPause7'),
  eighthPlayPause: document.getElementById('playPause8'),
  ninthPlayPause: document.getElementById('playPause9'),
  //tenthPlayPause: document.getElementById('playPause10'),
  eleventhPlayPause: document.getElementById('playPause11'),
  twlthPlayPause: document.getElementById('playPause12'),
  thrteenthPlayPause: document.getElementById('playPause13'),
  fourteenthPlayPause: document.getElementById('playPause14'),
  svnteenthPlayPause: document.getElementById('playPause17'),
  eighteenthPlayPause: document.getElementById('playPause18'),
  ninteenthPlayPause: document.getElementById('playPause19'),
  twenteenthPlayPause: document.getElementById('playPause20'),
  twen1teenthPlayPause: document.getElementById('playPause21'),
};

const waveSurfers = [];

async function loadPeaks() {
  const response = await fetch('./peaks.json');
  const data = await response.json();
  return data.tracks;
}

// Function to initialize all tracks
async function initTracks() {
  const tracks = await loadPeaks();

  // Initialize each track
  loadTrack(
    Spectrum,
    'Posledniy boy v2.mp3',
    'audio-spectrum',
    buttons.playPause,
    tracks
  );
  loadTrack(
    secondSpectrum,
    'Vechno Zhivem.mp3',
    'second-audio-spectrum',
    buttons.secondPlayPause,
    tracks
  );
  loadTrack(
    thirdSpectrum,
    'Burn remaster 4.mp3',
    'third-audio-spectrum',
    buttons.thirdPlayPause,
    tracks
  );
  loadTrack(
    fourSpectrum,
    'rage2.mp3',
    'four-audio-spectrum',
    buttons.fourPlayPause,
    tracks
  );
  loadTrack(
    fifthSpectrum,
    'HAN1.mp3',
    'fifth-audio-spectrum',
    buttons.fifthPlayPause,
    tracks
  );
  loadTrack(
    sixthSpectrum,
    'test.mp3',
    'sixth-audio-spectrum',
    buttons.sixthPlayPause,
    tracks
  );
  loadTrack(
    seventhSpectrum,
    '04 Cups And Biscuits 060419 V2.mp3',
    'seventh-audio-spectrum',
    buttons.seventhPlayPause,
    tracks
  );
  loadTrack(
    eighthSpectrum,
    'rascolbas.mp3',
    'eighth-audio-spectrum',
    buttons.eighthPlayPause,
    tracks
  );
  loadTrack(
    ninthSpectrum,
    'play.mp3',
    'ninth-audio-spectrum',
    buttons.ninthPlayPause,
    tracks
  );
  loadTrack(
    eleventhSpectrum,
    'KATYA1.mp3',
    'eleventh-audio-spectrum',
    buttons.eleventhPlayPause,
    tracks
  );
  loadTrack(
    twlthSpectrum,
    '1 - Rojdenie Zemli.mp3',
    'twlth-audio-spectrum',
    buttons.twlthPlayPause,
    tracks
  );
  loadTrack(
    thrteenthSpectrum,
    'DICH.mp3',
    'thrteenth-audio-spectrum',
    buttons.thrteenthPlayPause,
    tracks
  );
  loadTrack(
    fourteenthSpectrum,
    'ACDC.mp3',
    'fourteenth-audio-spectrum',
    buttons.fourteenthPlayPause,
    tracks
  );
  loadTrack(
    svnteenthSpectrum,
    'SNIP1.mp3',
    'svnteenth-audio-spectrum',
    buttons.svnteenthPlayPause,
    tracks
  );
  loadTrack(
    eighteenthSpectrum,
    '3 TEST.mp3',
    'eighteenth-audio-spectrum',
    buttons.eighteenthPlayPause,
    tracks
  );
  loadTrack(
    ninteenthSpectrum,
    'thithif.mp3',
    'ninteenth-audio-spectrum',
    buttons.ninteenthPlayPause,
    tracks
  );
  loadTrack(
    twenteenthSpectrum,
    '01 NS.mp3',
    'twenteenth-audio-spectrum',
    buttons.twenteenthPlayPause,
    tracks
  );
  loadTrack(
    twen1teenthSpectrum,
    '- 08 Tony Ten.mp3',
    'twen1teenth-audio-spectrum',
    buttons.twen1teenthPlayPause,
    tracks
  );
}

function updateCursorStates() {
  waveSurfers.forEach(({ instance }) => {
    if (instance.isPlaying()) {
      instance.setOptions({ cursorWidth: 4 }); 
    } else {
      instance.setOptions({ cursorWidth: 0 }); 
    }
  });
}


function handleButtonClick(clickedWave, button) {
  waveSurfers.forEach(({ instance, button: btn }) => {
    if (instance === clickedWave) {
      if (instance.isPlaying()) {
        instance.pause();
        btn.innerHTML =
          '<path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>';
      } else {
        instance.play();
        btn.innerHTML =
          '<path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>';
      }
    } else {
      if (instance.isPlaying()) {
        instance.pause();
        btn.innerHTML =
          '<path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>';
      }
    }
  });
  updateCursorStates(); // Обновляем курсоры
}

function handleWaveClick(clickedWave) {
  waveSurfers.forEach(({ instance, button }) => {
    if (instance === clickedWave) {
      if (!instance.isPlaying()) {
        instance.play();
        button.innerHTML =
          '<path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>';
      }
    } else {
      if (instance.isPlaying()) {
        instance.pause();
        button.innerHTML =
          '<path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>';
      }
    }
  });
  updateCursorStates(); 
}


function loadTrack(
  waveSurferInstance,
  trackName,
  containerId,
  playButton,
  tracksData
) {
  const trackData = tracksData[trackName];
  const peaks = trackData.peaks || [];
  const duration = trackData.duration || null;

  waveSurferInstance.load(`./tracks/${trackName}`, peaks, duration);

  document.getElementById(containerId).addEventListener('click', () => {
    handleWaveClick(waveSurferInstance);
  });

  playButton.addEventListener('click', () => {
    handleButtonClick(waveSurferInstance, playButton);
  });
}

var Spectrum = WaveSurfer.create({
  //first wave
  container: '#audio-spectrum',
  progressColor: fourGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({ instance: Spectrum, button: buttons.playPause });

var secondSpectrum = WaveSurfer.create({
  //second wave
  container: '#second-audio-spectrum',
  progressColor: secondGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: secondSpectrum,
  button: buttons.secondPlayPause,
});

var thirdSpectrum = WaveSurfer.create({
  container: '#third-audio-spectrum',
  progressColor: gradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: thirdSpectrum,
  button: buttons.thirdPlayPause,
});

var fourSpectrum = WaveSurfer.create({
  container: '#four-audio-spectrum',
  progressColor: thirdGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: fourSpectrum,
  button: buttons.fourPlayPause,
});

var fifthSpectrum = WaveSurfer.create({
  container: '#fifth-audio-spectrum',
  progressColor: fourGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: fifthSpectrum,
  button: buttons.fifthPlayPause,
});

var sixthSpectrum = WaveSurfer.create({
  container: '#sixth-audio-spectrum',
  progressColor: secondGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: sixthSpectrum,
  button: buttons.sixthPlayPause,
});

var seventhSpectrum = WaveSurfer.create({
  container: '#seventh-audio-spectrum',
  progressColor: gradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: seventhSpectrum,
  button: buttons.seventhPlayPause,
});

var eighthSpectrum = WaveSurfer.create({
  container: '#eighth-audio-spectrum',
  progressColor: thirdAnotherGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: eighthSpectrum,
  button: buttons.eighthPlayPause,
});

var ninthSpectrum = WaveSurfer.create({
  container: '#ninth-audio-spectrum',
  progressColor: gradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: ninthSpectrum,
  button: buttons.ninthPlayPause,
});

/*var tenthSpectrum = WaveSurfer.create({
                    container: '#tenth-audio-spectrum',
                    progressColor: '#ff8c00',
                    waveColor: '#383838',
                    barWidth: 2,
                    height: 50,
                    barRadius: 6,
                    cursorWidth: 4,
                    cursorColor: '#f9f9f9',
                    responsive: true,
                    dragToSeek: true,
                    normalize: true,
                  });*/

var eleventhSpectrum = WaveSurfer.create({
  container: '#eleventh-audio-spectrum',
  progressColor: fourGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: eleventhSpectrum,
  button: buttons.eleventhPlayPause,
});

var twlthSpectrum = WaveSurfer.create({
  container: '#twlth-audio-spectrum',
  progressColor: thirdAnotherGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: twlthSpectrum,
  button: buttons.twlthPlayPause,
});

var thrteenthSpectrum = WaveSurfer.create({
  container: '#thrteenth-audio-spectrum',
  progressColor: secondGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: thrteenthSpectrum,
  button: buttons.thrteenthPlayPause,
});

var fourteenthSpectrum = WaveSurfer.create({
  container: '#fourteenth-audio-spectrum',
  progressColor: gradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: fourteenthSpectrum,
  button: buttons.fourteenthPlayPause,
});

var svnteenthSpectrum = WaveSurfer.create({
  container: '#svnteenth-audio-spectrum',
  progressColor: fourGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: svnteenthSpectrum,
  button: buttons.svnteenthPlayPause,
});

var eighteenthSpectrum = WaveSurfer.create({
  container: '#eighteenth-audio-spectrum',
  progressColor: thirdAnotherGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: eighteenthSpectrum,
  button: buttons.eighteenthPlayPause,
});

var ninteenthSpectrum = WaveSurfer.create({
  container: '#ninteenth-audio-spectrum',
  progressColor: secondGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: ninteenthSpectrum,
  button: buttons.ninteenthPlayPause,
});

var twenteenthSpectrum = WaveSurfer.create({
  container: '#twenteenth-audio-spectrum',
  progressColor: thirdAnotherGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: twenteenthSpectrum,
  button: buttons.twenteenthPlayPause,
});

var twen1teenthSpectrum = WaveSurfer.create({
  container: '#twen1teenth-audio-spectrum',
  progressColor: secondGradient,
  waveColor: '#383838',
  barWidth: 2,
  height: 50,
  barRadius: 6,
  cursorWidth: 4,
  cursorColor: '#f9f9f9',
  responsive: true,
  dragToSeek: true,
  normalize: true,
});

waveSurfers.push({
  instance: twen1teenthSpectrum,
  button: buttons.twen1teenthPlayPause,
});

initTracks().then(updateCursorStates);

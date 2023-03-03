const { PythonShell } = require('python-shell');

const transcribeButton = document.getElementById('transcribe-button');
const transcriptionResult = document.getElementById('transcription-result');

transcribeButton.addEventListener('click', () => {
  const audioFile = document.getElementById('audio-file').files[0];
  const options = {
    scriptPath: './python',
    args: [audioFile.path]
  };
  const pyshell = new PythonShell('transcribe.py', options);

  pyshell.on('message', (message) => {
    transcriptionResult.textContent = message;
  });

  pyshell.end((err) => {
    if (err) {
      throw err;
    }
  });
});
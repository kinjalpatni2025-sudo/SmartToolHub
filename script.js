const fileInput = document.getElementById('fileInput');
const processBtn = document.getElementById('processBtn');
const progressBar = document.getElementById('progressBar');
const downloadLink = document.getElementById('downloadLink');

processBtn?.addEventListener('click', () => {
    if(!fileInput.files.length) { alert('Please select a file'); return; }

    let progress = 0;
    progressBar.style.width = '0%';
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        if(progress >= 100) {
            clearInterval(interval);
            downloadLink.style.display = 'inline-block';
            downloadLink.href = URL.createObjectURL(fileInput.files[0]);
            downloadLink.download = 'processed-' + fileInput.files[0].name;
        }
    }, 200);
});


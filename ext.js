const savedEntry = localStorage.getItem('entry');

if (savedEntry) {
    const savedEntry = localStorage.getItem('entry');
    document.querySelector('#entry').value = savedEntry;
    calcPeriod();
}

document.querySelector('#entry').addEventListener('change', () => {
    const finish = moment(document.querySelector('#entry').value, 'HH:mm').add(9, 'h');
    document.querySelector('#finish').value = finish.format('HH:mm');
    localStorage.setItem('entry', document.querySelector('#entry').value);
    calcRemaining();
});

function calcPeriod() {
    const finish = moment(document.querySelector('#entry').value, 'HH:mm').add(9, 'h');
    document.querySelector('#finish').value = finish.format('HH:mm');
    calcRemaining();
}

function calcRemaining() {
    setInterval(() => {
        const current = moment();
        const finish = moment(document.querySelector('#finish').value, 'HH:mm');

        const diff = finish.diff(current);

        document.querySelector('#left').textContent = moment(diff).add(2, 'h').format(
            'HH:mm:ss');
    }, 1000)
}
let saveEl = document.querySelector('#save-el');
    let countH = document.querySelector('.count');
    let count = 0;

    function increment() {
        count += 1;
        countH.textContent = count;
    }
    function save() {
        let saveN = count + ' - ';
        saveEl.textContent += saveN;
        countH.textContent = 0;
        count = 0;

    } 
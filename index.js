  function check() {
    let s = 0;

    document.querySelectorAll('input[type=radio]:checked')
        .forEach(x => {
            if (x.value === 'true') s++;
        });

    document.getElementById('res').innerText = 'Eredmény: ' + s + '/5';}
let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendToDisplay(key) {
    display.value = display.value + key;
}

function deleteLast() {
    display.value = display.value.slice(0, -1)
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const allowedKeys = /[0-9%/*-+.]|Backspace|Enter/;
    if (allowedKeys.test(key)) {
        if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            deleteLast();
        } else {
            appendToDisplay(key);
        }
        event.preventDefault();
    }
});

let isDarkMode = false;
const icon = document.getElementById('theme-toggle-icon');

icon.addEventListener('click', function () {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

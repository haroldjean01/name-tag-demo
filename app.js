//  display name
const nameDisplay = document.getElementById('name');
console.log('nameDisplay');

nameDisplay.textContent = 'Michelle';
nameDisplay.classList.add('red');

// button event
const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('Button click works!!!!');

    const nameInput = document.getElementById('name-input');

    nameDisplay.textContent = nameInput.ariaValueMax;
    nameInput.value = '';
});

const colorDropdown = document.getElementById('color-dropdown');
colorDropdown.addEventListener('change', () => {
    console.log('change is happening!');
    console.log(colorDropdown.value);

    nameDisplay.classList.remove('purple');
    nameDisplay.classList.remove('orange');
    nameDisplay.classList.remove('green');
    nameDisplay.classList.add(colorDropdown.value);
});

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

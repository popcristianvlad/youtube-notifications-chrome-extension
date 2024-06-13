// content.js
window.addEventListener('load', () => {
    // Wait for the YouTube page to fully load
    setTimeout(addButton, 2000);
});

function addButton() {
    // Check if the button already exists to avoid adding it multiple times
    if (document.getElementById('my-custom-button')) {
        return;
    }

    // Create a new button element
    const button = document.createElement('button');
    button.id = 'my-custom-button';
    button.innerText = 'My Button';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#ff0000';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    // Add an event listener to the button
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });

    // Append the button to the body
    document.body.appendChild(button);
}

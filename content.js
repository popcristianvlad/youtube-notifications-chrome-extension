function addButtons() {
    const notifications = document.querySelectorAll('ytd-notification-renderer');
    notifications.forEach(notification => {
        // Check if the button already exists to avoid adding it multiple times
        if (notification.querySelector('#my-custom-button')) {
            return;
        }

        // Create a new button element
        const button = document.createElement('button');
        button.id = 'my-custom-button';
        button.innerText = 'Open';
        button.style.marginLeft = '10px';
        button.style.padding = '2px 5px';
        button.style.fontSize = '12px';
        button.style.backgroundColor = '#ff0000';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '3px';
        button.style.cursor = 'pointer';

        // Add an event listener to the button
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });

        // Append the button to the notification element
        notification.appendChild(button);
    });
}

// Check for notifications when the page loads
window.addEventListener('load', addButtons);

// Optionally, observe changes in the notifications area
const observer = new MutationObserver(addButtons);
observer.observe(document.body, {childList: true, subtree: true});

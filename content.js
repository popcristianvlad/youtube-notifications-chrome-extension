// content.js
window.addEventListener('load', () => {
    // Wait for the YouTube page to fully load
    setTimeout(addButtons, 1000);
});

function addButtons() {
    // Get all <ytd-notification-renderer> elements with the specified classes
    const notifications = document.querySelectorAll('ytd-notification-renderer.style-scope.yt-multi-page-menu-section-renderer.unread');

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

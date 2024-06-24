function addButtons() {
    const notifications = document.querySelectorAll('ytd-notification-renderer');
    notifications.forEach(notification => {
        // Check if the buttons already exist to avoid adding them multiple times
        if (notification.querySelector('#my-open-button') || notification.querySelector('#my-close-button')) {
            return;
        }

        // Create the "Closed" button
        const closeButton = document.createElement('button');
        closeButton.id = 'my-close-button';
        closeButton.innerText = 'Close';
        closeButton.classList.add('my-close-button');

        // Create the "Open" button
        const openButton = document.createElement('button');
        openButton.id = 'my-open-button';
        openButton.innerText = 'Open';
        openButton.classList.add('my-open-button');

        closeButton.addEventListener('click', () => {
            // Simulate clicking the "Hide this notification" option
            simulateHideNotification(notification);
        });

        // Add event listeners to the buttons
        openButton.addEventListener('click', () => {
            const videoUrl = extractVideoUrl(notification);
            if (videoUrl) {
                window.open(videoUrl, '_blank'); // Open video URL in a new tab
            } else {
                alert('No video URL found for this notification.');
            }
        });

        // Append the buttons to the notification element
        notification.appendChild(closeButton);
        notification.appendChild(openButton);
    });
}

function simulateHideNotification(notification) {
    // Simulate clicking the "Hide this notification" option
    // Example: Find and click the appropriate elements in the notification dialog
    const hideButton = notification.querySelector('yt-icon-button#button'); // Replace with actual selector
    if (hideButton) {
        hideButton.click(); // Trigger click event on the hide button
    } else {
        console.log('Could not find the hide button for this notification.');
    }
}

function extractVideoUrl(notification) {
    // Implement your logic to extract the video URL or ID from the notification element
    // Example: Look for a link, data attribute, or any other relevant information
    // For demonstration, assume the video URL is extracted from a child element
    const videoLinkElement = notification.querySelector('a'); // Example: Assuming a link element
    if (videoLinkElement) {
        return videoLinkElement.href; // Return the href attribute of the link
    }
    return null; // Return null if no video URL is found
}

// Debounce function to limit the rate at which a function can fire
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check for notifications when the page loads
window.addEventListener('load', addButtons);

// Observe changes in the notifications area
const observer = new MutationObserver(debounce(addButtons, 200));
observer.observe(document.body, { childList: true, subtree: true });

// Add styles through CSS
const style = document.createElement('style');
style.textContent = `
    .my-close-button, .my-open-button {
        padding: 1px 3px;
        font-size: 14px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: #fff;
    }
    .my-close-button {
        margin-left: 2px;
        background-color: #ff0000; /* Red */
    }
    .my-open-button {
        margin-left: 12px;
        background-color: #008000; /* Green */
    }
`;
document.head.appendChild(style);

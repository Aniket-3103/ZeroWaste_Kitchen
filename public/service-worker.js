// src/service-worker.js

self.addEventListener('push', function (event) {
    const options = {
        body: event.data.text() || 'This is a notification.',
        icon: 'icon.png', // Add an icon for your notification
    };

    event.waitUntil(
        self.registration.showNotification('Notification Title', options)
    );
});

// This function checks localStorage for notification times
const checkForNotifications = () => {
    console.log("check-notification");
    const notificationTime = window.localStorage.getItem('notificationTime');
    if (notificationTime) {
        const now = new Date();
        if (now >= new Date(notificationTime)) {
            self.registration.showNotification('Time to check!', {
                body: 'Your scheduled notification is here!',
                icon: 'icon.png',
            });
            localStorage.removeItem('notificationTime'); // Clear the time after showing
        }
    }
};

// Check for notifications every minute
setInterval(checkForNotifications, 1 * 1000);

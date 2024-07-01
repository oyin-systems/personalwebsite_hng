window.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const now = new Date();
        const options = { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeFormatter = new Intl.DateTimeFormat('en-US', options);
        const nigeriaTime = timeFormatter.format(now);
        
        const dayOptions = { timeZone: 'Africa/Lagos', weekday: 'long' };
        const dayFormatter = new Intl.DateTimeFormat('en-US', dayOptions);
        const day = dayFormatter.format(now);

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = nigeriaTime;
        document.querySelector('[data-testid="currentDay"]').textContent = day;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

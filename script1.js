// Sample in-memory array to simulate a database
let timetable = [];

// Function to update the timetable display
function updateTimetable() {
    const timetableDiv = document.getElementById('timetable');
    timetableDiv.innerHTML = ''; // Clear existing entries
    timetable.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.textContent = `${entry.subject} on ${entry.day} at ${entry.time}`;
        timetableDiv.appendChild(entryDiv);
    });
}

// Load existing timetable from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const storedTimetable = JSON.parse(localStorage.getItem('timetable'));
    if (storedTimetable) {
        timetable = storedTimetable;
        updateTimetable();
    }
});

// Function to update localStorage
function saveToLocalStorage() {
    localStorage.setItem('timetable', JSON.stringify(timetable));
}

// Handle form submission
document.getElementById('timetable-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const subject = document.getElementById('subject').value.trim();
    const day = document.getElementById('day').value.trim();
    const time = document.getElementById('time').value.trim();

    // Add new entry to the timetable if input is valid
    if (subject && day && time) {
        timetable.push({ subject, day, time });
        
        // Clear form fields
        this.reset();
        
        // Update the timetable display and localStorage
        updateTimetable();
        saveToLocalStorage();
    } else {
        alert("Please fill in all fields!");
    }
});

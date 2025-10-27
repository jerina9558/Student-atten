// Get the form element
const form = document.querySelector("form");

// Store attendance in an array
let attendanceList = [];

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get student name from input
    const nameInput = document.querySelector('input[name="name"]');
    const studentName = nameInput.value.trim();

    if (studentName === "") {
        alert("Please enter a student name.");
        return;
    }

    // Add student to attendance list
    attendanceList.push(studentName);

    // Show confirmation
    alert(`${studentName} marked as present!`);

    // Clear input
    nameInput.value = "";

    // Optional: Display current attendance in console
    console.log("Attendance List:", attendanceList);
});

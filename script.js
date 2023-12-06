document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
  
    // For demonstration purposes, you can log the values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
  
    // Here you can add logic to send the appointment details to a server/database
    // This example only logs the values in the console
    alert('Appointment booked successfully!');
    document.getElementById('appointmentForm').reset();
  });
  
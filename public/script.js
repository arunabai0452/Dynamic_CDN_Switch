function showMessage() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "You clicked the button!";
    messageElement.classList.add("show");

    // Hide message after 3 seconds
    setTimeout(() => {
        messageElement.classList.remove("show");
    }, 3000);
}

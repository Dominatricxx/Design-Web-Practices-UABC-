const nameInput = document.getElementById("inputName");
const emailInput = document.getElementById("inputEmail");
const phoneNumberInput = document.getElementById("inputPhoneNumber");
const addTaskBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskError = document.getElementById("taskError");

function isValid(task1, task2, task3) {
    taskError.textContent = "";

    if (task1.trim() === "") {
        taskError.textContent = "Hey! You didn't write your name.";
        taskError.style.display = "inline-block";
        return false;
    }

    if (!isNameValid(task1)) {
        return false;
    }

    if (task2.trim() === "") {
        taskError.textContent = "Hey! You didn't write your email.";
        taskError.style.display = "inline-block";
        return false;
    }

    if (!isEmailValid(task2)) {
        return false;
    }

    if (task3.trim() !== "") {
        if (!isPhoneNumberValid(task3)) {
            return false;
        }
    }

    return true;
}

function isNameValid(nameText) {
    if (nameText.length < 2) {
        taskError.textContent = "Hey! Your name is too short, you must type at least 2 letters.";
        taskError.style.display = "inline-block";
        return false;
    }
    return true;
}

function isEmailValid(emailText) {
    let hasAtSign = false;
    let dotCount = 0;

    for (let i = 0; i < emailText.length; i++) {
        let character = emailText[i];
        if (character === "@") hasAtSign = true;
        if (character === ".") dotCount++;
    }

    let endsWithMx = emailText.toLowerCase().endsWith("mx");

    if (!hasAtSign) {
        taskError.textContent = "Hey! You didn't write '@' in your email.";
        taskError.style.display = "inline-block";
        return false;
    }

    if (dotCount !== 3) {
        taskError.textContent = `Hey! Your email must have exactly 3 dots (you wrote ${dotCount}).`;
        taskError.style.display = "inline-block";
        return false;
    }

    if (!endsWithMx) {
        taskError.textContent = "Hey! Your email must end with 'mx'.";
        taskError.style.display = "inline-block";
        return false;
    }

    return true;
}

function isPhoneNumberValid(phoneText) {
    let hyphenCount = 0;
    let phoneSize = phoneText.length;

    for (let i = 0; i < phoneText.length; i++) {
        if (phoneText[i] === "-") {
            hyphenCount++;
        }
    }

    if (hyphenCount !== 2) {
        taskError.textContent = `Hey! Your phone number must have exactly 2 hyphens (you wrote ${hyphenCount}).`;
        taskError.style.display = "inline-block";
        return false;
    }

    if (phoneSize !== 12) {
        taskError.textContent = `Hey! Your phone must have exactly a length of 12 (your phone size is ${phoneSize}).`;
        taskError.style.display = "inline-block";
        return false;
    }

    return true;
}

function register() {
    let taskName = nameInput.value;
    let taskEmail = emailInput.value;
    let taskPhone = phoneNumberInput.value;

    if (isValid(taskName, taskEmail, taskPhone)) {
        let li = document.createElement("li");
        li.innerHTML = `Name: ${taskName} | Email: ${taskEmail} | Phone Number: ${taskPhone || "N/A"}`;
        taskList.appendChild(li);

        taskError.style.display = "none";
        taskError.textContent = "";

        nameInput.value = "";
        emailInput.value = "";
        phoneNumberInput.value = "";
    }
}

function init() {
    addTaskBtn.addEventListener('click', register);
}

window.onload = init;
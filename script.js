function addEducation() {
    var educationContainer = document.getElementById("educationContainer");
    var newEducationInput = document.createElement("input");
    newEducationInput.type = "text";
    newEducationInput.className = "education";
    newEducationInput.placeholder = "Degree, Institution";
    educationContainer.appendChild(newEducationInput);
}
function addExperience() {
    var experienceContainer = document.getElementById("experienceContainer");
    var newExperienceInput = document.createElement("input");
    newExperienceInput.type = "text";
    newExperienceInput.className = "experience";
    newExperienceInput.placeholder = "Job Title, Company";
    experienceContainer.appendChild(newExperienceInput);
}
function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("linkedin").value;
    var educationInputs = document.getElementsByClassName("education");
    var experienceInputs = document.getElementsByClassName("experience");
    var skills = document.getElementById("skills").value.split(',').map(function (skill) { return skill.trim(); });
    var educationList = '';
    for (var i = 0; i < educationInputs.length; i++) {
        var educationInput = educationInputs[i]; // Cast to HTMLInputElement
        if (educationInput.value) {
            educationList += "<p contenteditable=\"true\" class=\"editable\">".concat(educationInput.value, "</p>");
        }
    }
    var experienceList = '';
    for (var i = 0; i < experienceInputs.length; i++) {
        var experienceInput = experienceInputs[i]; // Cast to HTMLInputElement
        if (experienceInput.value) {
            experienceList += "<p contenteditable=\"true\" class=\"editable\">".concat(experienceInput.value, "</p>");
        }
    }
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "\n        <h2 contenteditable=\"true\" class=\"editable\">".concat(name, "</h2>\n        <p><strong>Email:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(phone, "</span></p>\n        <p><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\" contenteditable=\"true\" class=\"editable\">").concat(linkedin, "</a></p>\n        <h3>Education</h3>\n        ").concat(educationList, "\n        <h3>Work Experience</h3>\n        ").concat(experienceList, "\n        <h3>Skills</h3>\n        <p contenteditable=\"true\" class=\"editable\">").concat(skills.join(', '), "</p>\n    ");
}

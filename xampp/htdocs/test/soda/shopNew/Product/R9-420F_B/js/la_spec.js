
// Get all labels inside .spec
document.querySelectorAll('.spec label[for]').forEach(label => {
label.addEventListener('mouseenter', function() {
const radioId = label.getAttribute('for');
const radio = document.getElementById(radioId);
if (radio) radio.checked = true;
updateLabelBackground();
});
});

// Change label background to blue if its radio is checked
function updateLabelBackground() {
document.querySelectorAll('.spec label[for]').forEach(label => {
const radioId = label.getAttribute('for');
const radio = document.getElementById(radioId);
if (radio && radio.checked) {
label.style.background = '#181818';
label.style.color = '#fff';
} else {
label.style.background = '';
label.style.color = '';
}
});
}

// Update on page load and when radio changes
document.querySelectorAll('.spec input[type="radio"]').forEach(radio => {
radio.addEventListener('change', updateLabelBackground);
});
updateLabelBackground();
document.querySelectorAll('.spec label[for]').forEach(label => {
label.addEventListener('mouseenter', function() {
const radioId = label.getAttribute('for');
const radio = document.getElementById(radioId);
if (radio) radio.checked = true;
});
});
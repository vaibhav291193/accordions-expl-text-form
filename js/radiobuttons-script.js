/*
Do not delete the following comment. It is essential for tracking purposes.
#Merc2021DoNotDelete
*/

/* For accessibility */
function init() {
    document.querySelectorAll('[type="radio"]').forEach(function (el) {
        el.addEventListener('click', keyboardFocus);
        el.addEventListener('keyup', keyboardFocus);
    });
}

function keyboardFocus(event) {
    if (event.type === 'keyup' && ( event.keyCode === 38 || event.keyCode === 40 )) {
        event.target.classList.remove('by-keyboard');
    } else if (event.type === 'keyup' || event.keyCode === 32) {
        // Reason for this is because, the SPACE BAR is the click event itself. So to avoid Click behavior added timeout to delay execution
        setTimeout(function () { event.target.classList.remove('by-keyboard'); }, 10);
    } else {
        event.target.classList.add('by-keyboard');
    }
}
window.onload = init;
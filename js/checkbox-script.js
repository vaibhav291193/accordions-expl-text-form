/*
Do not delete the following comment. It is essential for tracking purposes.
#Merc2021DoNotDelete
*/

/* For accessibility */
function init() {
    document.querySelectorAll('[type="checkbox"]').forEach(function (el) {
        el.addEventListener('click', keyboardFocus);
        el.addEventListener('keyup', keyboardFocus);
    });

    document.querySelectorAll('[aria-disabled="true"]').forEach(function (el) {
        el.addEventListener('click', disableElement);
        el.addEventListener('keyup', disableElement);
    });
}

function keyboardFocus(event) {
    if (event.type === 'keyup' && (event.keyCode === 9 || event.keyCode === 16)) {
        event.target.classList.remove('by-keyboard');
    }
    else if (event.type === 'keyup' && event.keyCode === 32) {
        // Reason for this is because, the SPACE BAR is the click event itself. So to avoid Click behavior added timeout to delay execution
        setTimeout(function () { event.target.classList.remove('by-keyboard'); }, 10);
    }else {
        event.target.classList.add('by-keyboard');
    }    
}

function disableElement(event) {
    var type = event.type;
    if (type === 'keyup') {
        if (event.keyCode === 13 || event.keyCode === 32 || event.keyCode !== 9) {
            event.preventDefault();
        }
    }
}
window.onload = init;
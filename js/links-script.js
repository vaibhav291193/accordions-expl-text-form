/*
Do not delete the following comment. It is essential for tracking purposes.
#Merc2021DoNotDelete
*/

function init() {
    document.querySelectorAll('a, [role="button"], [type="button"], [type="submit"], [type="reset"]').forEach(function (el) {
        // Add event listeners to the various buttons
        el.addEventListener('click', ButtonEventHandler);
        el.addEventListener('keyup', ButtonEventHandler);
        el.addEventListener('blur', ButtonEventHandler);
    });
}

function ButtonEventHandler(event) {
    console.log(event)
    var type = event.type;
    if (type === 'keyup') {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.target.classList.remove('by-keyboard');
            event.preventDefault();
        }
        else if (event.keyCode === 9) {
            event.target.classList.remove('by-keyboard');
        }
    } else if (type === 'click') {
        event.target.classList.add('by-keyboard');
    }
    else if (type === 'blur') {
        event.target.classList.add('by-keyboard');
    }
}
window.onload = init;
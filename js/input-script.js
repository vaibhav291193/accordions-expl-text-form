/*
Do not delete the following comment. It is essential for tracking purposes.
#Merc2021DoNotDelete
*/

function maxCharacterLength(textarea) {
    const maxchar = textarea.target.getAttribute('maxLength');

    const maxCharacter = document.getElementById(`${textarea.target.id}-maxCharacter`);
    maxCharacter.innerHTML = `${maxchar} characters left`;
    const characterUsed = textarea.target.value.length;

    let remainderPercentage = Math.round(((maxchar - characterUsed) / maxchar) * 100);
    let remainingLength = maxchar - characterUsed;
    maxCharacter.innerHTML = `${remainingLength} characters left`;

    if (maxchar <= 20) {
        if (remainingLength <= 0) {
            maxCharacter.setAttribute('aria-live', 'polite');
            maxCharacter.innerHTML = `Maximum characters reached`;
        } else {
            maxCharacter.removeAttribute('aria-live');
        }
    } else if (maxchar > 20 && maxchar <= 100) {
        if (remainingLength == 10) {
            maxCharacter.setAttribute('aria-live', 'polite');
            maxCharacter.innerHTML = `${remainingLength} characters left`;
        } else if (remainingLength <= 0) {
            maxCharacter.setAttribute('aria-live', 'polite');
            maxCharacter.innerHTML = `Maximum characters reached`;
        } else {
            maxCharacter.removeAttribute('aria-live');
        }
    } else {
        if (remainderPercentage == 75 || remainderPercentage == 50 || remainderPercentage == 25 || remainderPercentage == 10 || (remainderPercentage < 10 && remainingLength == 5)) {
            maxCharacter.setAttribute('aria-live', 'polite');
            maxCharacter.innerHTML = `${remainingLength} characters left`;
        } else if (remainderPercentage <= 0) {
            maxCharacter.setAttribute('aria-live', 'polite');
            maxCharacter.innerHTML = `Maximum characters reached`;
        } else {
            maxCharacter.removeAttribute('aria-live');
        }
    }
}
document.querySelectorAll('textarea').forEach((el) => {
    el.addEventListener('keyup', maxCharacterLength);
});
function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach((button) => button.addEventListener('click', toggle))
    function toggle(event) {
        const btn = event.currentTarget
        const parent = btn.parentElement;
        const children = Array.from(parent.children);
        const unlocked = children[4];
        const additionalInfo = children[9];
        if (unlocked.checked) {
            if (btn.textContent === 'Show more') {
                additionalInfo.style.display = 'block';
                btn.textContent = 'Hide it'
            } else {
                additionalInfo.style.display = 'none';
                btn.textContent = 'Show more'
            }
        }
    }
}
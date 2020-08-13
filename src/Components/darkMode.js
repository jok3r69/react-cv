const toggle = document.getElementById('toggle');
const body = document.body;
function darkmode() {
    toggle.addEventListener('input', (e) => {
        const isChecked = e.target.checked;
        
        if(isChecked) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    });
    
}
export default darkmode;
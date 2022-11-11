const psw_one = document.querySelector("#psw");
const psw_two = document.querySelector("#psw_two");
const btnCheck = document.querySelector("button");
const pwordDivs = document.querySelectorAll(".pword");

function pwordCheck(psw_one, psw_two) {
    return psw_one.value === psw_two.value;
}

psw_one.addEventListener('input', () => {
    // console.log(psw_one.value);
    if (psw_one.value.length > 0) {
        psw_two.removeAttribute('disabled');
    } else {
        psw_two.setAttribute('disabled', '');
    }
});

btnCheck.addEventListener('click', (e) => {
    if (!pwordCheck(psw_one, psw_two)) {
        e.preventDefault();
        pwordDivs.forEach((pwordDiv) => {
            // console.log(pwordDiv);
            if (!pwordDiv.classList.contains('error')) {
                pwordDiv.classList.add('error');
                let warning = document.createElement('div');
                warning.innerText = '*Password Mismatch*';
                pwordDiv.appendChild(warning);
            }
        });
    }
});
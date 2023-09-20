const upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowLetters = 'abcdefghijklmnopqrstuvwxyz';
const digits = '0123456789';
const speclChar = '!@#$%^&*()_-+=[]{}|;:,.<>?';

function genPasswrd() {
    const pswrdLength = Number.parseInt(document.getElementById('inpLength').value);
    const uprChckd = document.getElementById('upCase').checked;
    const lwerChckd = document.getElementById('lowCase').checked;
    const digtChckd = document.getElementById('digIt').checked;
    const spclCharChckd = document.getElementById('spclChar').checked;
    if (isNaN(pswrdLength))
        document.getElementById('notify').innerText = 'Enter valid input length';
    else if (paswrdFormat(uprChckd, lwerChckd, digtChckd, spclCharChckd) === '')
        document.getElementById('notify').innerText = 'Choose at least one ';
    else {
        const format = paswrdFormat(uprChckd, lwerChckd, digtChckd, spclCharChckd);
        let passWrd = ``;
        for(let i=0; i<=pswrdLength; i++) {
            const index = Math.floor(Math.random() * format.length);
            passWrd += format.charAt(index);
        }
        document.getElementById('dispPasswrd').value = passWrd;
    }
    document.getElementById('inpLength').value = '';
    document.getElementById('upCase').checked = false
    document.getElementById('lowCase').checked = false;
    document.getElementById('digIt').checked = false;
    document.getElementById('spclChar').checked = false;
}

function paswrdFormat(upr, lwr, dgt, spCh) {
    let format = '';
    if (upr)
        format += upLetters;
    if (lwr)
        format += lowLetters;
    if (dgt)
        format += digits;
    if (spCh)
        format += speclChar;
    return format;
}


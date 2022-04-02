const form = document.querySelector('form');

form.onsubmit = () => {
    let fullName = document.querySelector('input[type=text]');
    let phoneNumber = document.querySelector('input[type=number]');
    let birthDate = document.querySelector('input[type=date]');
    let gender = document.querySelector('input[type=radio]:checked');
    let languages = document.querySelectorAll('input[type=checkbox]:checked');
    let places = document.querySelector('select');

    for (let i = 0; i < languages.length; i++){
        console.log(languages[i].value);
    }
    return

    const userData = {
        nameData: [fullName.value],
        numberData: [phoneNumber.value],
        birthData: [birthDate.value],
        genderData: [gender.value],
        languageData: [languages.value],
        directionData: [places.value]
    }
    localStorage.setItem('user', JSON.stringify(userData));

}





let cntryStateInfo = {
    Pakistan: {
        Punjab: { Lahore: [], Sheikhpura: [], Sialkot: [] },
        Sindh: { Lahore: [], Sheikhpura: [], Sialkot: [] },
        Peshawar: { Lahore: [], Sheikhpura: [], Sialkot: [] },
        Balochistan: { Lahore: [], Sheikhpura: [], Sialkot: [] }
    },
    "Afghanistan": {
        Herat: { Herat: [], ZindaJan: [], Kushk: [] },
        Jowzjan: { Herat: [], ZindaJan: [], Kushk: [] },
        Kabul: { Herat: [], ZindaJan: [], Kushk: [] },
        Kandhar: { Herat: [], ZindaJan: [], Kushk: [] }
    }
}


const selectCountry = document.getElementById('country');
selectState = document.getElementById('state'),
    selectCity = document.getElementById('city'),
    select = document.querySelectorAll('select')

selectState.disabled = true
selectCity.disabled = true



select.forEach(select => {
    if (select.disabled == true) {
        select.style.cursor = 'auto';

    }
})

for (let country in cntryStateInfo) {
    console.log(country);
    selectCountry.options[selectCountry.options.length] = new Option(country, country)


    selectCountry.onchange = (e) => {
        selectState.disabled = false
        selectCity.disabled = true

        selectState.length = 1
        selectCity.length = 1

        for (let state in cntryStateInfo[e.target.value]) {
            console.log(state);
            selectState.options[selectState.options.length] = new Option(state, state)
        }
    }

    selectState.onchange = (e) => {
        selectCity.disabled = false

        selectCity.length = 1

        for (let city in cntryStateInfo[selectCountry.value][e.target.value]) {
            console.log(city);
            selectCity.options[selectCity.options.length] = new Option(city, city)
        }
    }


}


let getResidents = document.querySelector('#rez')

let clickButton = (evt) => {

    console.log('clicked')

axios.get('https://swapi.dev/api/planets/2/')

.then(response => {

    console.log(response.data);

    let {residents} = response.data

    console.log(residents);

   })

}
document.addEventListener('click', clickButton)
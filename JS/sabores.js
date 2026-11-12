fetch('https://api-colombia.com/api/v1/TypicalDish')
    .then (response=>response.json())
    .then (json=>console.log(json))
    .catch((error)=>console.log(error));

mostrarPlatos()
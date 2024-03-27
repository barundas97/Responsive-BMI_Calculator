const form = document.querySelector("#form");

form.addEventListener("submit",(e)=>{
     e.preventDefault();

     const result = document.querySelector("#results");
     const height = parseInt(document.querySelector("#height").value);
     const weight = parseInt(document.querySelector("#weight").value);

     if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please give correct Height Value";
     } 
     else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give correct Weight Value";
     } 
     else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
           result.innerHTML =`${bmi}`
        if (bmi < 18.6) {
            result.innerHTML = `${bmi} Under Weight`;
            }else if(bmi === 18.6 || bmi === 24.9 ){
            result.innerHTML = `${bmi} Normal Weight`;
            } else if(bmi > 24.9){
            result.innerHTML = `${bmi} Over weight`;
            }
     }
})
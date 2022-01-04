



      function BMI() {
         
        var GenderType = document.getElementsByName('gender');
        var gender = ''
              
        for(i = 0; i < GenderType.length; i++) {
            if(GenderType[i].checked)
            gender = GenderType[i].value;
        }
        
        var h = document.getElementById("h").value;
        var w = document.getElementById("w").value;
        // var Man = document.getElementById("rbMale").value;
        // var Vrouw = document.getElementById("rbFemale").value;
        var bmi = w / (((h / 100) * h) / 100);
        var bmio = bmi.toFixed(1);




        if (!h && !w) {
          document.getElementById("result").innerHTML =
            "Jouw BMI is nog onbekend";
        } else {
            
            if(gender === 'man'){
                document.getElementById("result").innerHTML =
                "Jouw BMI is " + bmio + ", ";
                if (bmio < 20) {
                document.getElementById("result").innerHTML +=
                    "je hebt ondergewicht. Dat is niet goed voor je gezondheid. Neem contact op met je huisarts om de mogelijke oorzaak vast te stellen.";
                }
                else if (bmio > 20 && bmio <= 25) {
                document.getElementById("result").innerHTML +=
                    "je bent gezond. Mooi zo! Blijf gezond eten en voldoende bewegen om dat zo te houden.";
                }
                else if ((bmio >= 25, 1 && bmio <= 29, 9)) {
                document.getElementById("result").innerHTML += "je hebt ondergewicht. Dat is niet goed voor je gezondheid. Neem contact op met je huisarts om de mogelijke oorzaak vast te stellen.";

                }
                else if (bmio >= 30 && bmio <= 40) {
                document.getElementById("result").innerHTML +=
                    "je hebt zwaar overgewicht. We raden je aan om bij de huisarts je bloeddruk, cholesterol en bloedsuiker te laten meten. Dit bepaalt mede hoe belangrijk afvallen voor jouw gezondheid is. Op basis daarvan geeft je huisarts een advies of verwijst je door voor hulp.";
                }
                else if (bmio > 40) {
                document.getElementById("result").innerHTML +=
                    "je hebt ernstig overgewicht. Het is beter voor je gezondheid om af te vallen. We raden je sterk aan om bij de huisarts je bloeddruk, cholesterol en bloedsuiker te laten meten. Dit bepaalt mede hoe belangrijk afvallen voor jouw gezondheid is. Op basis daarvan verwijst de huisarts je door voor hulp.";
                }
            }else {
                document.getElementById("result").innerHTML =
                "Jouw BMI is " + bmio + ", ";
                if (bmio <= 18.6) {
                document.getElementById("result").innerHTML +=
                    "je hebt ondergewicht. Dat is niet goed voor je gezondheid. Neem contact op met je huisarts om de mogelijke oorzaak vast te stellen.";
                }
                else if (bmio > 18.7 && bmio <= 23.8) {
                document.getElementById("result").innerHTML +=
                    "je bent gezond. Mooi zo! Blijf gezond eten en voldoende bewegen om dat zo te houden.";
                }
                else if (bmio > 23.9 && bmio <= 28.5) {
                document.getElementById("result").innerHTML +=
                    "je hebt overgewicht. We raden je aan om bij de huisarts je bloeddruk, cholesterol en bloedsuiker te laten meten. Dit bepaalt mede hoe belangrijk afvallen voor jouw gezondheid is. Op basis daarvan geeft je huisarts een advies of verwijst je door voor hulp.";
                }
                else if (bmio > 28.6 && bmio <= 40) {
                document.getElementById("result").innerHTML +=
                    "je hebt zwaar overgewicht. We raden je aan om bij de huisarts je bloeddruk, cholesterol en bloedsuiker te laten meten. Dit bepaalt mede hoe belangrijk afvallen voor jouw gezondheid is. Op basis daarvan geeft je huisarts een advies of verwijst je door voor hulp.";
                }
                else if (bmio > 40) {
                document.getElementById("result").innerHTML +=
                    "je hebt extreme obesitas. Het is beter voor je gezondheid om af te vallen. We raden je sterk aan om bij de huisarts je bloeddruk, cholesterol en bloedsuiker te laten meten. Dit bepaalt mede hoe belangrijk afvallen voor jouw gezondheid is. Op basis daarvan verwijst de huisarts je door voor hulp.";
                }
            }
        }
       
      }
    
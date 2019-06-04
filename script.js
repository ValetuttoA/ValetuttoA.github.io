        var submit = document.querySelector(".submit");
        var out1 = document.querySelector(".out1");
        var out2 = document.querySelector(".out2");
        var out3 = document.querySelector(".out3");
        var out4 = document.querySelector(".out4");
        var out5 = document.querySelector(".out5");
        var counter = 0;
        
        function reply(){
            // question1
            var radios1 = document.getElementsByName("question1");
            for(var i = 0; i < radios1.length; i++){
                if(radios1[i].checked){
                    if(radios1[i].value == "15"){
                        out1.innerHTML = "Correct";
                        counter++;
                    }
                    else{
                        out1.innerHTML = "Wrong";
                    }
                    break;
                }
            }
            //question2
            var radios2 = document.getElementsByName("question2");
            for(var i = 0; i < radios2.length; i++){
                if(radios2[i].checked){
                    if(radios2[i].value == "exposer"){
                        out2.innerHTML = "Correct";
                        counter++;
                    }
                    else{
                        out2.innerHTML = "Wrong";
                    }
                    break;
                }
            }
            //question3
            var radios3 = document.getElementsByName("question3");
            for(var i = 0; i < radios3.length; i++){
                if(radios3[i].checked){
                    if(radios3[i].value == "kindle"){
                        out3.innerHTML = "Correct";
                        counter++;
                    }
                    else{
                        out3.innerHTML = "Wrong";
                    }
                    break;
                }
            }
            //question4
            var radios4 = document.getElementsByName("question4");
            for(var i = 0; i < radios4.length; i++){
                if(radios4[i].checked){
                    if(radios4[i].value == "comfort"){
                        out4.innerHTML = "Correct";
                        counter++;
                    }
                    else{
                        out4.innerHTML = "Wrong";
                    }
                    break;
                }
            }
            out5.innerHTML = "You got " + counter + " correct out of 4.";
        }
        submit.addEventListener("click", reply);

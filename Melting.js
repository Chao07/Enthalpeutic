var buttonClicked = function() {
    console.log('Button has been clicked!')
    
    console.log(food)
    $("h2").text('This is the answer !!!!')
    calculate()
}

var calculate = function(temp_f) {
    var farToCel = function(temp_f){
        var temp_C = (temp_f - 32) * (5/9)
        return temp_C
    }
    var food = $("#food").val()
    var temp = (temp_f - 32) * (5/9)
        if (food == 'ice cream'){
            var mass = 568 * 5.9147065 * (10 **-5) //kg
            //Q = MCAT
            var heat = (mass * 1.76 * 100 * 18) +(210.14 * mass) 
            //J __ Ice cream melts at 0, most freezers at -18
            var pow = (5.6703*Math.pow(10 , -8)) * (0.0126677 ) * Math.pow(((temp + 275.15), 4) - Math.pow((273.15) , 4))
            var time = Math.round(Math.pow(((heat/pow)/60),2))
            console.log("Your ice cream will start melting in ", time, " minutes")
            //pow in watts
        }
    else if (food == 'chocolate'){
        if (temp_f <=84){
            console.log("Your chocolate won't melt!")
        }
        else{
            var mass =  0.001881984 * 1325 //kg __ density = 1325 kg/m3
            var heat = (mass * 1.589 * (farToCel(85)-farToCel(60))) + (mass * 311.2) //Specific heat: 1.589 KJ/KgC
            var pow =(5.6703*(Math.pow(10 , -8))) * (.0099) * Math.abs(Math.pow((273.15+temp) , 4)) - Math.pow(273.15+(farToCel(85)) , 4)
            var time = Math.round(((heat/pow)/60 * 100) / 100)
            console.log("Your chocolate bar will start melting in ", time, " minutes")
            
        }
    }
        
    else if (food == 'ice'){
        var mass = (Math.pow((2.5/100), 3) * 917)
        var heat = ((mass * 2.10) * 18) + (mass * 333.55)
        var pow = ((5.6703*Math.pow(10 , -8)) * Math.pow(3.75*10 , -3) * (Math.pow((temp + 275.15) , 4) - Math.pow((273.15) , 4)))
        var time = Math.round(((heat/pow)),2)
        $("h2").text("Your ice cubes will start melting in " + time + " seconds" )
    }
    else{
        $("h2").text("Please enter one of the specified foods")
    }
    //food = str(input("Do you have 'ice cream', 'chocolate', or 'ice'? "))
    //temp_f = float(input("What's the temperature of the room in farenheit? "))
}
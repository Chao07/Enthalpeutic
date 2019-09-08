var buttonClicked = function() {
    console.log('Button has been clicked!')
    var food = $("#food").val()
    console.log(food)
    $("h2").text('This is the answer !!!!')
    calculate()
}

var calculate = function() {
    var mass_ice = 4

    var vol = 500
    var prop_ice = .5
    var insul = .5

    var height_in = (vol/100)
    var mass_water = vol * (1 - prop_ice) * vol
    var heat_water = (mass_water) * 4.184 * (68.4) 
    var heat_ice = ((mass_ice * 2.05) * 18) + (mass_ice * 333.55) 
    var mass_melted_ice = (vol*prop_ice)
    var heat_melted_ice = mass_melted_ice * 4.184 * (70) 

    var farToCel = function(temp_f){
        var temp_C = (temp_f - 32) * (5/9)
        return temp_C
    }

    var surface_area = (3.14159 * 2) * (2 * 3.14159 * height_in * 0.0254)

    var tot_heat = (heat_ice + heat_melted_ice + heat_water)*(1/(1-insul))
    var tot_heat_kj = tot_heat/1000
    var power = ((5.6703*(10**-8)) * .1 * (surface_area) * Math.abs((Math.pow((273.15+ farToCel(70))) , 4) - Math.pow((273.15),4)/5))
    var time = Math.round(((tot_heat_kj/power)/60),3)
    $("h2").text("Your water will be room temperature in " + time + " minutes")
}
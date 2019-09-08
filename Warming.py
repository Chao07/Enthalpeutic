vol = float(input("How big is the container in mL? "))
prop_ice = float(input("Proportionally, how filled with ice is the container? [0 to 1] "))
insul = float(input("Proportionally, how good at insulation is the container? [0 to 1] "))
while(prop_ice < 0 and prop_ice > 1):
    prop_ice = float(input("Please pick a value for the proportion of ice between 0 and 1! "))
while(insul < 0 and prop_ice > 1):
    insul = float(input("Please pick a value for the how good the insulation is between 0 and 1! "))

height_in = (vol/100)
mass_water = vol * (1 - prop_ice) * vol #grams
mass_ice = prop_ice * .92 #grams
heat_water = (mass_water) * 4.184 * (68.4) #J
heat_ice = ((mass_ice * 2.05) * 18) + (mass_ice * 333.55) #J
mass_melted_ice = (vol*prop_ice) #g
heat_melted_ice = mass_melted_ice * 4.184 * (70) 

print(mass_water, mass_ice, mass_melted_ice, heat_water, heat_ice, heat_melted_ice)

def farToCel(temp_f):
    temp_C = (temp_f - 32) * (5/9)
    return temp_C

surface_area = (3.14159 * 2) * (2 * 3.14159 * height_in * 0.0254)

tot_heat = (heat_ice + heat_melted_ice + heat_water)*(1/(1-insul))
tot_heat_kj = tot_heat/1000
power = ((5.6703*(10**-8)) * .1 * (surface_area) * abs((273.15+ farToCel(70))**4 - (273.15)**4))/5
time = round(((tot_heat_kj/power)/60),3)
print(tot_heat_kj, power, surface_area)
print("Your water will be room temperature in " , time, " minutes")


# find the temperature of the water and ice at equilibruim (28?)
# find how much time it will take to get to 70 fahrenheit

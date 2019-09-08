def farToCel(temp_f):
temp_C = (temp_f - 32) * (5/9)
return temp_C

temp = (temp_f - 32) * (5/9)
if (food.lower() == 'ice cream'):
    mass = 568 * 5.9147065 * (10 **-5) #kg
    #Q = MCAT
    heat = (mass * 1.76 * 100 * 18) +(210.14 * mass) 
    #J __ Ice cream melts at 0, most freezers at -18
    power = (5.6703*(10**-8)) * (0.0126677 ) * ((temp + 275.15)**4 - (273.15)**4)
    time = round(((heat/power)/60),2)
    print("Your ice cream will start melting in ", time, " minutes")
    #power in watts

elif (food.lower() == 'chocolate'):
    if temp_f <=84:
        print("Your chocolate won't melt")
    else:
        mass =  0.001881984 * 1325 #kg __ density = 1325 kg/m3
        heat = (mass * 1.589 * (farToCel(85)-farToCel(60)) ) + (mass * 311.2) #Specific heat: 1.589 KJ/KgC
        power =((5.6703*(10**-8)) * (.0099) * abs((273.15+temp)**4 - (273.15+(farToCel(85)))**4))
        time = round(((heat/power)/60),2)
        print(heat, " ", power, " ", temp)
        print("Your chocolate bar will start melting in ", time, " minutes")

elif (food.lower() == 'ice'):
    mass = (((2.5/100) ** 3) * 917)
    heat = ((mass * 2.10) * 18) + (mass * 333.55)
    power = ((5.6703*(10**-8)) * (3.75*10**-3) * ((temp + 275.15)**4 - (273.15)**4))
    time = round(((heat/power)/60),2)
    print("Your ice cubes will start melting in ", time, " minutes" )
else:
    print("Please enter one of the specified foods")
food = str(input("Do you have 'ice cream', 'chocolate', or 'ice'? "))
temp_f = float(input("What's the temperature of the room in farenheit? "))





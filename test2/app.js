
var total_gf = 0
var total_rc = 0
var total_hp = 0
var total_sr = 0
var total_name = 0

function findhouse(name)
{
    
for(j = 1 ; j < 2 ; j++)
{
    var random_number = Math.floor(Math.random()*100)

    if(random_number < 25 & total_gf < 13){
    var house_of_name = "Gryffindor"
    total_gf += 1
    }
    else if (24 < random_number & random_number < 50 & total_rc < 13){
    var house_of_name = "Ravenclaw"
    total_rc += 1
    }
    else if (49 < random_number & random_number < 75 & total_hp < 13){
    var house_of_name = "Hufflepuff"
    total_hp += 1
    }
    else if (74 < random_number & random_number < 100 & total_sr < 13){
    var house_of_name = "Slytherin"
    total_sr += 1
    }
    else {
    j -= 1    
    }
}
total_name += 1
document.getElementById("out").innerHTML = name+" is in " + house_of_name
document.getElementById("gd").innerHTML = "total name of Gryffindor = "+total_gf
document.getElementById("rc").innerHTML = "total name of Ravenclaw = "+total_rc
document.getElementById("hp").innerHTML = "total name of Hufflepuff = "+total_hp
document.getElementById("sr").innerHTML = "total name of Slytherin = "+total_sr
document.getElementById("total").innerHTML = "total name = "+total_name
}
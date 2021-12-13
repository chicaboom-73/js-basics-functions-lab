// Code your solution in this file!
function distanceFromHqInBlocks(number){
    if (number>=42){
        return number-42;
    }
    return 42-number;
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(number){
    if (number>=42){
        return (number-42)*264;
    }
    return (42-number)*264;
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(str, fin){
    if (fin>=str){
        return (fin-str)*264;
    }
    return (str-fin)*264;
}

distanceTravelledInFeet(34, 28);

function calculatesFarePrice(str, fin){
    if (distanceTravelledInFeet(str,fin)<400){
        return 0;
    }

    else if(distanceTravelledInFeet(str,fin)>400 && distanceTravelledInFeet(str,fin)<=2000){
        return (distanceTravelledInFeet(str,fin)-400)*.02;
    }
    else if (distanceTravelledInFeet(str,fin)>2000&& distanceTravelledInFeet(str,fin)<2500){
        return 25;
    }
    return "cannot travel that far";
    
}
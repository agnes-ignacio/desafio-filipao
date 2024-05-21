let playerName = "Aurora"
let playerExp = 4000
let emblem

if(playerExp <= 1000){
    emblem = "Ferro"
} else if(playerExp > 1000 && playerExp <= 2000){
    emblem = "Bronze"
} else if(playerExp > 2000 && playerExp <= 5000){
    emblem = "Prata"
} else if(playerExp > 5000 && playerExp <= 7000){
    emblem = "Ouro"
} else if(playerExp > 7000 && playerExp <= 8000){
    emblem = "Platina"
} else if(playerExp > 8000 && playerExp <= 9000){
    emblem = "Ascendente"
} else if(playerExp > 9000 && playerExp <= 10000){
    emblem = "Imortal"
} else if(playerExp > 10000){
    emblem = "Radiante"
} 

console.log("O herói de nome " + playerName + " está no nível " + emblem + ".")
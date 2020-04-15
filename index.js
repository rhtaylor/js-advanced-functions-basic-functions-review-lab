// Your code here


function saturdayFun(activity = "roller-skate"){ 
    return `This Saturday, I want to ${activity}!`
} 
 
 

let mondayWork = function(work ="go to the office"){
    return `This Monday, I will ${work}.`
} 


function wrapAdjective(flair = "*"){
   return (function(param = "special"){ 
        return `You are ${flair}${param}${flair}!`
    })
} 

const Calculator = { 
    divide(a,b){
        return a/b
    }, 
    add(a,b){
        return a + b 
    }, 
    subtract(a,b){ 
        return a - b
    }, 
    multiply(a,b){
        return a * b
    }
} 

function actionApplyer(num, funcArray){ 
    let answer = num 
    for (let i = 0; i < funcArray.length; i++){
        
        answer = funcArray[i](answer)

    } 
    return answer 
}
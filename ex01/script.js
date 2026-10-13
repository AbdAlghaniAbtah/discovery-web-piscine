function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) 
    {
        return "Invalid input";
    }
    
    if (score >= 90) 
    {
        return "A";
    }
    else if (score >= 80) 
    {
        return "B";
    } 
    else if (score >= 70)
    {
        return "C";
    } 
    else if (score >= 60) 
    {
        return "D";
    } 
    else 
    {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    let suitable_age = 18;
    return age >= suitable_age && hasTicket === true;
}


console.log("Testing calculateGrade");
console.log("Score 100:", calculateGrade(100));
console.log("Score 90:", calculateGrade(90));
console.log("Score 89:", calculateGrade(89));
console.log("Score 0:", calculateGrade(0));
console.log("Invalid score (-5):", calculateGrade(-5));

console.log("Testing checkAccess");
console.log("Age 20, Ticket true:", checkAccess(20, true));
console.log("Age 16, Ticket true:", checkAccess(16, true)); 
console.log("Age 25, Ticket false:", checkAccess(25, false));
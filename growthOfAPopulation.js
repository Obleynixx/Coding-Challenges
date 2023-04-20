/*
In a small town the population is p0 = 1000 at the beginning of a year.
 The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater or equal to p = 1200 inhabitants?*/

function nbYear(p0, percent, aug, p) {
    //we set variables wich we will update
    let popNew = p0;
    let years = 0;
    //we do a while until it meets the conditions
    while (Math.floor(popNew) < p) {
        popNew = Math.floor(popNew);
        popNew = popNew + popNew * (percent / 100) + aug;
        //we add a year for each time the while is ran
        years++;
    }
    //we return the years it took to meet the condition
    return years;
}
console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
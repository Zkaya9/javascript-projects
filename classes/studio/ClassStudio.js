//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

   addScore(score) {
    this.scores.push(score);
    }
    

    average(){
        let sumOfScores = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sumOfScores += this.scores[i];
        }
        let averageScore = Math.round(sumOfScores / this.scores.length * 10)/10;
        return averageScore;
    }

    status() {
        let thisAverage = this.average();
        if (thisAverage >= 90) {
            return `${this.name} earned an average test score of ${thisAverage}% and has a status of Accepted.`;
        } else if (thisAverage >= 80 && thisAverage < 90) {
            return `${this.name} earned an average test score of ${thisAverage}% and has a status of Reserve.`;
        } else if (thisAverage >= 70 && thisAverage < 80) {
            return `${this.name} earned an average test score of ${thisAverage}% and has a status of Probationary.`;
        } else {
            return `${this.name} has a status of Rejected.`;
        }
}
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88,85,90] );
let merryMaltese  = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75,78,62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

console.log(merryMaltese.average());
console.log(gladGator.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
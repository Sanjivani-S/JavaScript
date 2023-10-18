class PersonalRecord
{
    constructor(firstName,lastName,age,email)
    {
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age;
        this.email = email;

       // console.log("Inside Constructor.\n First name = ", this.firstName, "\n Last name = ", this.lastName, "\n Age = ", this.age, "\n Email = ", this.email);
    }

   toString()
   {
    // Maria Petterson (age: 22, email: mp@gmail.com
    var str;
    str = "\n" + this.firstName + " " + this.lastName + " (age: " + this.age + ", email: " + this.email + ")" ;
    return str;
   } 
}

const pr1 = new PersonalRecord("Steffi", "Graph", 40, "Steffi@gmail.com");
// console.log(pr1.toString());

//var pr_arr= new PersonalRecord ([], [], [], []);

const pr2= new PersonalRecord ("Lexicon","",null , "");
const pr3= new PersonalRecord ("Stefan","Larsson",25 , "");
const pr4= new PersonalRecord ("Peter","Jansson", 24, "ptr@live.com");
const pr5= new PersonalRecord ("Maria","Petterson",22 , "mp@gmail.com");

let people = [];
people.push (pr2); people.push (pr3); people.push (pr4); people.push (pr5);

for (i=0;i<4;i++) console.log(people[i]);
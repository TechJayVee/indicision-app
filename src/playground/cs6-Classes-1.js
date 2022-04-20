class Person  {
 constructor(name = "Anonymous", age=0){
 this.name=name;
 this.age=age;
 }
 getGreetings (){
    return `Hi I am ${this.name}`;
    }
    getDescription (){
        return `Hi I am ${this.name} my age is ${this.age} years old`;
        }
}

class Students extends Person{
    constructor(name , age, major){
        super(name, age);
        this.major=major;
        }
    hasMajor (){
            return !!this.major;
            } 
     getDescription (){
             let description =super.getDescription();

             if(this.hasMajor()){
             return description += ` their major is ${this.major}`;
            }
            return description;
    }  
}

class homeLocation extends Person{
    constructor(name , age, homeLocation){
        super(name, age);
        this.homeLocation=homeLocation;

        }

     getDescription (){
             let description =super.getDescription();

             if(this.homeLocation){
             return description += ` im visiting ${this.homeLocation}`;
            }
            return description;
    }  
}

const me= new homeLocation('Jayvee Ramos', 24, 'Philippines') ;
console.log(me.getDescription());

const other= new homeLocation() ;
console.log(other.getDescription());



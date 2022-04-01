export class mentors{
    public id:number;
    public firstname:string;
    public lastname:string;
    public email:string;
    public password:string;
    public age:string;
    public city:string;

    constructor(id:number,city:string,age:string,email:string,password:string,firstname:string,lastname:string){
        this.id = id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.password=password;
        this.age=age;
        this.city=city;

    }
}
export interface filterdata{
    name:string,
    email:string,
    age:number,
    gender:string
  }
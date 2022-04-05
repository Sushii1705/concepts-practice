export class orders {
  public id: number;
  public firstname: string;
  public lastname: string;
  public email: string;
  public catagory: string;
  public size: string;

  constructor(
    id: number,
    city: string,
    email: string,
    firstname: string,
    lastname: string,
    catagory: string,
    size: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.catagory = catagory;
    this.size = size;
  }
}
export interface size {
  id: number;
  name: string;
}

export interface filterdata {
  firstname: string;
  lastname: string;
  email: string;
  catagory: string;
  size: string;
}

export interface filedata {
  filename: string;
  size: number;
  type: string;
  content: string;
  id: number;
}

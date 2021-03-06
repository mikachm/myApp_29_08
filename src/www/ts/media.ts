namespace MediaEntities {
    export class Publisher {
        id:number;
        name:string;
    }

    export interface Author {
        id:number;
        firstName:string;
        lastName:string;
    }

    export interface IMedia  {
        id:number;
        title:string;
        price:number;
        publisher:Publisher;
        authors:Array<Author>;
    }

    export abstract class Media implements IMedia {
        private _id: number;        
        private _title: string;
        private _price: number;
        private _publisher: Publisher;
        private _authors: Array<Author> = new Array<Author>();

        public constructor(id:number, title:string, price:number=-1) {
            this._id = id;
            this._title = title;
            this._price = price;
        }

        //public constructor(private id:number, private title:string, private price:number) {}
        public abstract getNetPrice():number;

        get id():number {return this._id;}
        set id(id:number) {this._id = id;}

        get title():string {return this._title;}
        set title(title:string) {this._title = title;}

        get price():number {return this._price;}
        set price(price:number) {this._price = price;}

        get publisher():Publisher {return this._publisher;}
        set publisher(publisher:Publisher) {this._publisher = publisher;}

        get authors():Array<Author> {return this._authors;}
        set authors(authors:Array<Author>) {this._authors = authors;}
    }

    export class Book extends Media {
        private _nbPage:number;

        get nbPage():number {return this._nbPage;}
        set nbPage(nbPage:number) {this._nbPage = nbPage;}

        public getNetPrice(): number {
            return this.price * 1.05;
        }
    }

    export class Cd extends Media {
        nbTrack:number;

        public getNetPrice(): number {
            return this.price * 1.2;
        }

    }

    export class Cart {

        medias:Array<Media> = new Array<Media>();

        add(m:Media):void {
            this.medias.push(m);
        }

        getTotalNetPrice():number {
            let total:number = 0;
            for(let m of this.medias) {
                total += m.getNetPrice();
            }
            return total;
        }
    }
}
import me = MediaEntities;
let publisher:me.Publisher = new me.Publisher();
publisher.id=1;
publisher.name="ENI";
let author:me.Author ={id:1, firstName:"Harry", lastName:"Potter"}

let book1:me.Book = new me.Book(1,"Narnia",50);
let book2:me.Book = new me.Book(2,"Les fourmis",50);
let book3:me.Book = new me.Book(3,"Harry potter",50);
let cd1:me.Cd = new me.Cd(4,"Aretha Franklin",50);

let cart:me.Cart = new me.Cart()
cart.add(book1);
cart.add(book1);
cart.add(book1);
cart.add(cd1);


console.log(book1.title+" "+book1.price);
console.log(book2.title+" "+book2.price);
console.log(book3.title+" "+book3.price);
console.log(cd1.title+" "+cd1.price);
console.log("Total: "+cart.getTotalNetPrice());


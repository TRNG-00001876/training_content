interface Square{
    side:number;
    color?:string;
    getarea():void;
}

let sq:Square={
    side:10,
    color:'Green',
    getarea() {
        console.log(this.side*this.side);
    },
}

sq.getarea()
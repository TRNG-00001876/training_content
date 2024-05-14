const studMarks:Record<string,number>={
    'Alan':99,
    'Nikesh':100
};

console.log(studMarks);

interface square{
    side:number;
    color?:string;
    area:number
}
const s2:Required<square>={
    side:10,
    area:100,
    color:'black'

}
const s3:Partial<square>={};

const s:Omit<square,'side'>={
    color:'red',
    area:100

}
const s1:Pick<square,'color'>={
    color:'red'
}
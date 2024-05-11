
import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'capitalize'
})
export class CapitalizePipe implements PipeTransform{
    title='Revature_Randstad Java Cohort';
    transform(value:string):string{
        if(!value) return value;
        return value.slice(0,4)+value.charAt(4).toUpperCase()+value.slice(5);
    }
}

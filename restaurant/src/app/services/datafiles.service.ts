import { Injectable } from '@angular/core';

interface datafiles{
    resname: string;
    uid: string;
    employee: string ;
    noOftables: number;
    noOfEmployees: number;
    date: Date
}

@Injectable()

export class DatafilesService 
{
    private datafiles: datafiles;

    constructor(){

    }
    setDatafiles(datafiles: datafiles)
    {
        this.datafiles = datafiles
    }
    getUID()
    {
        return this.datafiles.uid
    }

}
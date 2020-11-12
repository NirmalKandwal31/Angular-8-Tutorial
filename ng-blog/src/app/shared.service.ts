import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    blogTitle = "My Blog App";
    baseUrl="http://localhost:4200/"
    constructor() { }

}

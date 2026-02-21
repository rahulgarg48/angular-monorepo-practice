import { Injectable } from "@angular/core";
import {User} from 'shared-models';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // getUser(){
    //     return 'Rahul'
    // }

    // getRole() {
    //     return 'Admin'
    // }

    getUser() : User{
        return {
            id:1,
            name: 'Rahul',
            role : 'Admin'
        }
    }
}
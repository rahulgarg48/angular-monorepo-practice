import { Injectable } from "@angular/core";
import {User} from '../models/user.model';

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
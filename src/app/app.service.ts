
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ServerFeature, User, Feature } from 'app/app.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FF4JService {

    constructor(private http: Http) {}

    public getAllFeatures() : Observable<Array<User>> {
        return this.http.get("/api/ff4j/store/features").map(this.extractData);
    }

    private extractData(response: Response): Array<User> {
        let body: Array<ServerFeature> = response.json();
        let self = this;

        let rslt = new Array<User>();
        if (body) {
            body.forEach( (serverFeature: ServerFeature) => {
                serverFeature.permissions.forEach( (permission: string) => {
                    let user = self.findUser(permission, rslt);
                    if (!user) {
                        user = new User(permission);
                        rslt.push(user);
                    }
                    user.features.push(new Feature(serverFeature.uid, serverFeature.enable));
                });
            });
        }

        rslt.sort( (first: User, second: User) => {
            return first.id.localeCompare(second.id);
        })

        return rslt;
    }

    private findUser(userId: string, userList: Array<User>) {
        return userList.find( (user: User) => { 
            return (userId==user.id);
        });
    }

}


export class ServerFeature {
    uid: string;
    enable: boolean;
    description: string;
    group: string;
    permissions: Array<string>;
}

export class Feature {
    constructor(public uid: string, public enable: boolean) {}
}

export class User {
    features: Array<Feature>;

    constructor(public id: string) {
        this.features = new Array<Feature>();
    }
}

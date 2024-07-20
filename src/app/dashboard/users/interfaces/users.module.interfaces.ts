export interface ResponseGetAllUsers {
    results: User[];
    total:   number;
}

export interface User {
    id:           number;
    email:        string;
    password:     string;
    fullName:     string;
    document:     string;
    country:      string;
    phoneNumber:  string;
    phoneNumber2?: string;
    sponsor:      string;
    state:        State;
    isActive:     boolean;
    roles:        string[];
    createdAt:    Date;
    updatedAt:    Date;
}

export interface ResponseGetAllStates {
    results: State[];
    total:   number;
}

export interface State {
    id:        number;
    name:      string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}


export interface OnEditData {
    userId:   number;
    stateId:  number;
}
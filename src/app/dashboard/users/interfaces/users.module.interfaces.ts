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
    state:        string;
    isActive:     boolean;
    roles:        string[];
    createdAt:    Date;
    updatedAt:    Date;
}

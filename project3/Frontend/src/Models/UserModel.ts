import { RegisterOptions } from 'react-hook-form';
import { ValidationError } from './../../../Backend/src/4-models/client-errors';
// import Joi from "Joi";
import RoleModel from "./RoleModel";

class UserModel{
    public userId: number;
    public firstName: string; 
    public lastName: string;
    public email: string;
    public password: string;
    public role: RoleModel;

    
    public constructor(user: UserModel) {
        this.userId = user.userId;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    }

    public static firstNameValidation: RegisterOptions = {
        required: { value: true, message: "Missing first name"},
        minLength: { value: 2, message: "First name must be minimum 2 chars"},
        maxLength: { value: 30, message: "First name can't exceeds 30 chars"}
    };

    
    public static lastNameValidation: RegisterOptions = {
        required: { value: true, message: "Missing last name"},
        minLength: { value: 2, message: "Last name must be minimum 2 chars"},
        maxLength: { value: 30, message: "Last name can't exceeds 30 chars"}
    };

    
    public static passwordValidation: RegisterOptions = {
        required: { value: true, message: "Missing password"},
        minLength: { value: 4, message: "Password must be minimum 4 chars"},
        maxLength: { value: 30, message: "Password can't exceeds 30 chars"}
    };

}
export default UserModel;
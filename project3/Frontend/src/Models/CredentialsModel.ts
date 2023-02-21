import { RegisterOptions } from "react-hook-form";

class CredentialsModel {
    
    public email: string; // username AND NOT userName !!!!!!
    public password: string;

    public static emailValidation: RegisterOptions = {
        required: { value: true, message: "Missing email"},
        minLength: { value: 6, message: "email must be minimum 6 chars"},
        maxLength: { value: 100, message: "email can't exceeds 100 chars"}
    };

    public static passwordValidation: RegisterOptions = {
        required: { value: true, message: "Missing password"},
        minLength: { value: 4, message: "Password must be minimum 4 chars"},
        maxLength: { value: 30, message: "Password can't exceeds 30 chars"}
    };

}

export default CredentialsModel;

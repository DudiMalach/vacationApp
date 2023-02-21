import { UploadedFile } from "express-fileupload";
import { RegisterOptions } from "react-hook-form";

class VacationModel{

    
    public vacationId: number;
    public destination: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public price: number;
    public imageName: string;
    public image: UploadedFile;
    public followerCount: number;
    public isFollowing:boolean;


    public static destinationValidation: RegisterOptions = {
        required: {value: true, message: "Missing destination"},
        min: {value: 2, message: "destination must be at least 2 chars"},
        max:{value: 20, message: "destination cant be above 20 chars"},
    }

    
    public static descriptionValidation: RegisterOptions = {
        required: {value: true, message: "Missing description"},
        min: {value: 20, message: "description must be at least 20 chars"},
        max:{value: 1000, message: "description cant be above 1000 chars"},
    }

    
    public static priceValidation: RegisterOptions = {
        required: { value: true, message: "Missing price"},
        min: { value: 0, message: "Price can't be negative"},
        max: { value: 2000, message: "Price can't exceeds 2000"}
    };

    public static imageValidation: RegisterOptions = {
        required: { value: true, message: "Missing image"}
    };




}

export default VacationModel;
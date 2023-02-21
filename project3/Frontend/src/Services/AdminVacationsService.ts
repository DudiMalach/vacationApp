
import axios from "axios";
import VacationModel from "../Models/VacationModel";
import {
  VacationsAction,
  VacationsActionType,
  vacationsStore,
} from "../Redux/VacationsState";
import appConfig from "../Utils/AppConfig";

class AdminVacationsService {
  public async getAllVacations(): Promise<VacationModel[]> {
    // Take vacations from global state:
    let vacations = vacationsStore.getState().vacations;

    // if we don't have vacations:
    if (vacations.length === 0) {
      // fetch vacations from backend:
      const response = await axios.get<VacationModel[]>(
        appConfig.adminVacationsUrl
      );
      vacations = response.data;

      // Send all vacations into redux global state (which will call the reducer):
      const action: VacationsAction = {
        type: VacationsActionType.FetchVacations,
        payload: vacations,
      };
      vacationsStore.dispatch(action);
    }
    return vacations;
  }

  public async getOneVacation(id: number): Promise<VacationModel>{

    let vacations = vacationsStore.getState().vacations;

    let vacation = vacations.find(v => v.vacationId === id);

    if(!vacation) {

        const response = await axios.get<VacationModel>(appConfig.adminVacationsUrl + id)
        vacation = response.data;
    }

    return vacation;
    
  }

  public async addVacation(vacations: VacationModel): Promise<void>{
    const headers = {"Content-Type": "multipart/form-data"};
    const response = await axios.post<VacationModel>(appConfig.adminVacationsUrl,vacations,{headers});
    const addedVacation = response.data;

    vacationsStore.dispatch({
        type: VacationsActionType.AddVacation,
        payload: addedVacation,
    });
  }

  
  public async updateVacation(vacation: VacationModel): Promise<void> {
    const headers = { "Content-Type": "multipart/form-data" }; // Tell axios that we're sending text and file to backend:
    const response = await axios.put<VacationModel>(
      appConfig.adminVacationsUrl + vacation.vacationId,
      vacation,
      { headers }
    );
    const updatedVacation = response.data;

    // Send update vacation into redux global state (which will call the reducer):
    vacationsStore.dispatch({
      type: VacationsActionType.UpdateVacation,
      payload: updatedVacation,
    });
  }

  public async deleteVacation(id: number): Promise<void> {
    await axios.delete(appConfig.adminVacationsUrl + id);

    // Send delete id into redux global state (which will call the reducer):
    vacationsStore.dispatch({
      type: VacationsActionType.DeleteVacation,
      payload: id,
    });
  }

}

const adminVacationsService = new AdminVacationsService()

export default adminVacationsService;

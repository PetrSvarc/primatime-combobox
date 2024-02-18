import axios from "axios";
import { IUniversity} from "../models/universities.ts";
import { UNIVERSITIES_API } from "../constants/restEndpoinds.ts";

export const getUniversities = async (filterBy : string) => {
    const response = await axios.get<IUniversity[]>(UNIVERSITIES_API, {
        params: {
            name: filterBy,
        }
    });
    return response.data;
}
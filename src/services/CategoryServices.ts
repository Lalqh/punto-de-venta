import { fectGet } from "./ApiServices";

export const getCategorires = async () => {
    const response = await fectGet("categories");
    if(response.success == false){
        return [];
    }

    return response
}
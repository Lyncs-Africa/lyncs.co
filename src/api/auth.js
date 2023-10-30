import axios from "axios";
import { useMutation, useQuery } from "react-query";

export const useLoginMutation = () => {
    const api =
        "https://sellbackend.creditclan.com/schoolcredit/public/index.php/api/school/login";
    const postData = async ({email, password}) => {
        const response = axios.post(api, {
            email,
            password
        });
        return response;
    };
    const { mutate, isLoading, isError } = useMutation(postData, {});
    return {
        mutate,
        isLoading,
        isError,
    };
};

import {useMutation, useQuery} from "react-query";
import http from "../lib/http.js";

export const useCreateCompanyMutation = () => {
    const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
        return http.post(
            "https://api.lyncs.africa/company/register",
            payload
        );
    });
    return {mutate, mutateAsync, isLoading};
};
export const useApiSearchMutation = () => {
    const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
        return http.post(
            "https://api.lyncs.africa/product/search?count=10",
            payload
        );
    });
    return {mutate, mutateAsync, isLoading};
};
export const useLoginMutation = () => {
    const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
        return http.post(
            "https://api.lyncs.africa/company/login",
            payload
        );
    });
    return {mutate, mutateAsync, isLoading};
};
export const useGetUserQuery = ({onSuccess, onError}) => {
    const {data, isLoading, refetch, isFetching} = useQuery('profile', async () => {
        const token = localStorage.getItem('token');
        return http.post('https://api.lyncs.africa/token', {token});
    }, {
        onSuccess, onError, enabled: false,
    });

    return {data, isLoading, refetch, isFetching};
};

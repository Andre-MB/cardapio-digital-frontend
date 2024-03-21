import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async(): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}

// O hook é o resposável por pegar os dados do backend e retornar pro front
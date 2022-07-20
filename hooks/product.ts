import productApi from "@/api/product";
import useSWR from "swr";
export const useProduct = () => {
    const url = "/products";
    const { data, error, mutate } = useSWR(url)
    const createdPro = async (product: any) => {
        const { data: item } = await productApi.created(product);
        mutate([...data, item])
    };
    const remove = async(id:any) =>{
        await productApi.remove(id);
        const newProductList = data.filter((item:any) => item.id !==id)
        mutate(newProductList);
    }
    return {
        createdPro,
        remove,
        data,
        error
    }
}
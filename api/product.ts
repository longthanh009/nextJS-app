import instance from "./instance";
const productApi = {
    list() {
        return instance.get("/products")
    },
    created(product: any) {
        return instance.post("/products", product)
    },
    remove(id :any){
        return instance.delete(`/products/${id}`)
    }
}
export default productApi;
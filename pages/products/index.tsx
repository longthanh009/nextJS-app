import { GetServerSidePropsContext, GetStaticProps } from 'next'
import React from 'react'
import LayoutPageWeb from '../../components/Layout'
import { useProduct } from '../../hooks/product'

type Props = {
    products: any[]
}

const Product = () => {
    const { data: products, error,createdPro,remove } = useProduct();
    if (!products) return <div>Loading...</div>
    if (error) return <div>Fail to load</div>
    return (
        <div>
            <button onClick={()=> createdPro({name: "Product C"})}>Add</button>
            <div>
                {products && products.map((item:any) => <div key={item.id}>{item.name}
                <button onClick={() => remove(item.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    )
}
Product.Layout = LayoutPageWeb
export default Product
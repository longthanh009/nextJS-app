import { GetServerSidePropsContext, GetStaticProps } from 'next'
import React from 'react'

type Props = {
    products: any[]
}

const Product = ({ products }: Props) => {
    return (
        <div>
            {products && products.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    )
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetServerSidePropsContext) => {
    const data = await (await fetch('http://localhost:3001/products')).json();
    if(data)
        return {
        props: {
            products: data
        }
    }
    return {
        notFound : true
    }
}
export default Product
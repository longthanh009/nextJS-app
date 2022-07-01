import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react'

type Props = {
    product: any
}

const DetailPro = ({ product }: Props) => {
    if (product)
        return (
            <div><h1>Detail Product :  {product.name}</h1></div>
        )
}
// export const getStaticPaths: GetStaticPaths<any> = async () => {
//     const data = await (await fetch('http://localhost:3001/products')).json()
//     const paths = data.map((item:any) => ({ params: { id: item.id.toString() } }))
//     return {
//         paths,
//         fallback: false
//     }
// }
// export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
//     const data = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json();
//     if (data) {
//         return {
//             props: {
//                 product: data
//             },
//             revalidate :1
//         }
//     }
//     return {
//         notFound: true
//     }
// }

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
    const data = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json();
    return {
        props: {
            product: data
        }
    }
}
export default DetailPro
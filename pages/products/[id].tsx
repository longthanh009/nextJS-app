import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const DetailPro = (props: Props) => {
    const router = useRouter();
    const {id} = router.query
    return (
        <div><h1>
            DetailPro {id}</h1></div>
    )
}

export default DetailPro
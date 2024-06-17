import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'
import './card.scss'
const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (

        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '100px' }}
            style={{ width: 200, position: 'relative', overflowX: 'hidden' }}
            bodyStyle={{ padding: '10px' }}
            // cover1={<img src="https://cdn.tgdd.vn/2023/12/campaign/Label-Desk-270x106-1.png"/>}
            cover={<img alt="example" src={image} style={{ marginTop: '20px' }} />}
            onClick={() => handleDetailsProduct(id)}

        >
            <hr />
            <StyleNameProduct style={{ fontSize: '15px', fontWeight: '600' }}>{name}</StyleNameProduct>
            <div style={{ position: 'absolute', bottom: '20px' }}>
                <WrapperReportText>
                    <span style={{ marginRight: '4px' }}>
                        <span>{rating} </span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    </span>
                    <WrapperStyleTextSell className='text'> | Selled {selled || 0}+</WrapperStyleTextSell>
                </WrapperReportText>
                <WrapperPriceText>
                    <span style={{ marginRight: '8px' }}>{convertPrice(price)}</span>
                    <WrapperDiscountText>
                        -{discount}%
                    </WrapperDiscountText>
                </WrapperPriceText>
            </div>

        </WrapperCardStyle>
    )
}

export default CardComponent
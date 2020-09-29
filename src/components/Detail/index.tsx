import React from 'react'
import { Number, Row, Column, Month, Icon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faReceipt, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Title from '../Title';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

interface IDetail{
    title:string,
    value:number
}

function Detail({title, value}:IDetail){
    const month:any = useSelector<any>(state => state.auth.month)
    const loading:any = useSelector<any>(state => state.dashboard.loading)

    return(
        <Row>
            { loading ? 
                <Skeleton/>
            : 
            <>   
                <Column>
                    <Title>{title}</Title>
                    <Number>R$ {value}</Number>
                    <Month>{month}</Month>
                </Column>
                <Icon>
                    <FontAwesomeIcon 
                        style={{height:100,width:100}} 
                        icon={title === 'Entrada' ? faHandHoldingUsd : title === 'Saída' ? faReceipt : faDollarSign}
                    />
                </Icon>
            </>
            }
        </Row>
    )
}

export default Detail;
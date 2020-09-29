import React, { useEffect } from 'react';
import { Wrapper } from './styles';
import Card from '../../components/Card';
import Detail from '../../components/Detail';
import Seletor from '../../components/Seletor';
import Chart from '../../components/Charts';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/dashboard/actions';


function Main(){

    const dispatch = useDispatch();
    const user:any = useSelector<any>(state => state.auth.user)
    const month:any = useSelector<any>(state => state.auth.month)
    const dash:any = useSelector<any>(state => state.dashboard.dash)

    // useEffect(()=>{
    //     dispatch(setData({userId:user.id, month})) 
    // },[])

    useEffect(()=>{
        dispatch(setData({userId:user.id, month})) 
    },[month])
    
    return(
        <Wrapper>
            <Card id="c1" color={'default'}>
                <Detail title="Entrada" value={dash.totalWin} />
            </Card>
            <Card id="c2" color={'default'}>
                <Detail title="Saída" value={dash.totalLoss} />
            </Card>
            <Card id="c3" color={dash.diff>0 ? 'good' : 'bad'}>
                <Detail title="Saldo" value={dash.diff} />
            </Card>
            <Card id="se">
                <Seletor />
            </Card>
            <Card id="ch">
                <Chart data={dash} />
            </Card>
        </Wrapper>
    )
}

export default Main;
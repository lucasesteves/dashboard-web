import api from './api';
import moment from 'moment';
import { findMonth } from '../months';

export const mainComposer = (selectedMonth:string) => {
    const year:string = moment().format('YYYY')
    let month:string
    if(selectedMonth.length===0){
        const currentMonth = moment().format('MM')
        month = findMonth(currentMonth);
    }else{
        month = selectedMonth
    }
    let data:object = {}

    // api.post('/dashboard',{ month, year }).then(response=>{
    //     if(response){
    //         data = response
    //     }
    // }).catch(err=>console.log(err))

    return {gain:1000, loss:200, value:800};
}

export const winComposer = (selectedMonth:string) => {
    const year:string = moment().format('YYYY')
    let month:string
    if(selectedMonth.length===0){
        const currentMonth = moment().format('MM')
        month = findMonth(currentMonth);
    }else{
        month = selectedMonth
    }
    let data:object = {}

    // api.post('/dashboard',{ month, year }).then(response=>{
    //     if(response){
    //         data = response
    //     }
    // }).catch(err=>console.log(err))

    return {gain:1000};
}

export const listWinComposer = (selectedMonth:string) => {
    const year:string = moment().format('YYYY')
    let month:string
    if(selectedMonth.length===0){
        const currentMonth = moment().format('MM')
        month = findMonth(currentMonth);
    }else{
        month = selectedMonth
    }
    let data:object = {}
    let list:[] = []
    // api.post('/dashboard',{ month, year }).then(response=>{
    //     if(response){
    //         data = response
    //     }
    // }).catch(err=>console.log(err))

    return list;
}

export const loseComposer = (selectedMonth:string) => {
    const year:string = moment().format('YYYY')
    let month:string
    if(selectedMonth.length===0){
        const currentMonth = moment().format('MM')
        month = findMonth(currentMonth);
    }else{
        month = selectedMonth
    }
    let data:object = {}

    // api.post('/dashboard',{ month, year }).then(response=>{
    //     if(response){
    //         data = response
    //     }
    // }).catch(err=>console.log(err))

    return {gain:1000, loss:200, value:800};
}
import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer ( 
    {
        cartItems : [] ,subTotal : 0, tax : 0, shipping : 0, total : 0 , len :0,
    } 
    ,
    {
        addToCart : (state , action) => {
            const item = action.payload;
            const isItemExist = state.cartItems.find( (i) => i.id=== item.id );

            if(!isItemExist){
                state.cartItems.push(item);
            }
            else {
                state.cartItems.forEach( (i)=> {
                    if( i.id === item.id ){
                        i.quantity += 1;
                    }
                } )
            }
        },


        decrement : (state,action) => {
            const item = action.payload;
            const ditem = state.cartItems.find( (i) => i.id=== item.id );

            if(ditem.quantity > 1){
                state.cartItems.forEach ( (i) => {
                    if( i.id === ditem.id ){
                        i.quantity -= 1;
                    }
                })
            }
        },


        deleteFromCart : (state,action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter( (i) => i.id !== item.id)
        },

        calculatePrice : (state) => {
            let sum =0;
            state.cartItems.forEach( (i) => (sum += i.price * i.quantity) );
            state.subTotal = sum;
            state.shipping = sum > 12000 ? 0 :40;
            state.tax = +(state.subTotal * 0.12).toFixed();
            state.total = state.subTotal + state.tax + state.shipping;
        },

        carditem : (state)=>{
            let val=0;
            state.cartItems.forEach( (i) => (val += i.quantity) );
            state.len = val;
        }
    } 
    )
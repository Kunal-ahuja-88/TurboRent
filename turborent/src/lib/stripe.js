"use server"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const PaymentMethod = async(body)=>{
    const transformedItem=[
        {
            price_data:{
                currency:"inr",
                product_data:{
                    name:body.title
                },
                unit_amount:body.price*100,
            },
            quantity:1,
        },
    ];

    const session=await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:transformedItem,
        mode:"payment",
        success_url:`${process.env.NEXT_PUBLIC_FRONTEND_URL}/success`,
        cancel_url:`${process.env.NEXT_PUBLIC_FRONTEND_URL}/cancel`
    });
     return session.url
};
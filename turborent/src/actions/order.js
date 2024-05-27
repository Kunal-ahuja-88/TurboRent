"use server"

import connect from "@/lib/database";
import { sendEmail } from "@/lib/sendEmail";
import Order from "@/models/Order"

export const orderedMail = async(id) => {
    try {
        await connect();
        const getOrder=await Order.findById(id);
        await sendEmail({order:getOrder,
            email:getOrder.email,
            subject:"Welcome to TurboRent",
            message:`You have confiremd your booking`,
        });

        await sendEmail({order:getOrder,
            email:"sharmaprajwal840@gmail.com",
            subject:"Welcome to TurboRent",
            message:`You have confiremd your booking`,
        })

        return getOrder
    } catch (error) {
        throw new Error("order not found")
    }
}
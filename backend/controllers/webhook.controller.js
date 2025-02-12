import User from "../models/user.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error("Webhook secret is required");
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;

    try {
        evt = wh.verify(payload, headers);
    } catch (error) {
        return res.status(400).json({ message: "Webhook verification failed" });
    }

    if (evt.type === "user.created") {
        try {
            const newUser = new User({
                clerkUserId: evt.data.id,
                username: evt.data.username || evt.data.email_addresses[0].email_address,
                email: evt.data.email_addresses[0].email_address,
                img: evt.data.profile_image_url, 
            });

            await newUser.save();
            // console.log(newUser);
            
        } catch (error) {
            return res.status(500).json({ message: "Error saving user", error });
        }
    }

    return res.status(200).json({ message: "Webhook received" });
};

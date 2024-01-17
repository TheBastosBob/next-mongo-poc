'use server'


import dbConnect from "@/mongodb/connect";
import Name from "@/mongodb/models/name";

export async function setNameInDb(formData: FormData) {

    const name = formData.get('name');
    await dbConnect();
    const nameSchema = new Name({ name });
    await nameSchema.save();
}


import dbConnect from "@/mongodb/connect";
import Name from "@/mongodb/models/name";

export async function getNamesFromDb() {
    await dbConnect();
    const names = await Name.find({});
    return names;
}

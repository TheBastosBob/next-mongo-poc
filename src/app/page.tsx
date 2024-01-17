import Image from 'next/image'
import { setNameInDb} from "@/action";
import {getNamesFromDb} from "@/mongo";

export default async function Home() {

    const names = await getNamesFromDb()


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action={setNameInDb}>
                <input className={"border"} type="text" name={"name"} placeholder={"Name"}/>
                <button className={"border"}>Set in DB</button>
            </form>
            <div className={"flex flex-col"}>
                {names.map((name, index) => {
                    return <div key={index}>{name.name}</div>
                })}
            </div>
        </main>
    )
}

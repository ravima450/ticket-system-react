import { useEffect, useState } from "react"
import TicTable from "../../../components/tableComp"
import { userList } from "../../../model/userList"
export default function UserIndex(){
    const [userList, setUserList] = useState<userList[]>([])

    useEffect(()=>{
        fetch("http://localhost:3000/user").then(async (res:any)=>{
            let reponse = await res.json()
            setUserList(reponse)
        }).catch(err=> console.log(err))
    },[])


    return <>
    <div>
    {
        userList.length && userList.map((res:any)=>(
            <li key={res.id}>{res.userName}</li>
        ))
    }
    <TicTable tableData={userList} />
    </div>
    </>
}
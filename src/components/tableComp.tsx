import { useEffect, useState } from "react"
import { userList } from "../model/userList"



export default function TicTable({tableData}:any){
    const [tableHeader, setHeaders] = useState<string[]>([])
    
    useEffect(()=>{
        if(tableData.length){
            setHeaders(Object.keys(tableData[0]))    
            console.log(tableHeader)
        }
    },[tableData])
return<>
<table> 
    <thead>
    <tr>
        {tableHeader.map(headers=> (
            headers != 'id' &&  <th key={headers}>{headers}</th>
        ))}
    </tr>
    </thead>
    <tbody>
    {tableData.map((resp:userList)=>(
        <tr key={resp.id}>
            <td>{resp.userName}</td>
            <td>{resp.email}</td>
            <td>{resp.userType}</td>
            <td>{resp.access}</td>
            <td>{resp.role}</td>
        </tr>
        
        
    ))}
    </tbody>
    
</table>
</>
}
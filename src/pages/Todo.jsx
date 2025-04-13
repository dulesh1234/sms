import React, { useState } from 'react'




const Todo = () => {
    const initial = {name:"",password:"",email:""}

    const [user, setUser] = useState(initial)
    const [data,setData] = useState([])
    const [edit,setEdit] = useState(null)
    const handleChange = (e) => {

        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(user.name.length === 0 || user.email.length === 0 || user.password.length === 0 ){
            alert("fill all the field")
        }else{

            if(edit !== null){

                const updatedData = data
                updatedData[edit] = user
                setData(updatedData)
                setEdit(null)

            }else{

                setData([...data,user])
            }
        }

        
        setUser(initial)
    }

    const handleDelete = (idx)=>{
        alert(idx)

        setData(data?.filter((item,index) => index !== idx))
        setUser(initial)
        setEdit(null)
    }


    const handleUpdate = (idx,item) =>{
       
        setEdit(idx)
        setUser(item)
    }
  return (
    <div>
       <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="">enter a name </label>
        <input type="text" placeholder='enter a name' name='name' value={user.name} onChange={(e)=>handleChange(e)}/>
        <label htmlFor="">email:-</label>
        <input type="text" placeholder='enter a email' name='email' value={user.email} onChange={(e)=>handleChange(e)}/>
        <label htmlFor="">password:-</label>
        <input type="text" placeholder='enter a password' name='password' value={user.password} onChange={(e)=>handleChange(e)}/>
        <input type="submit" value={edit !== null ? "Update" : "Submit"} />
       </form>
       
       <div>
        <table>
            <thead>
                <tr >
                    <th>sno.</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>delete</th>
                    <th>update</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item,idx)=>{
                    return <tr>
                    <td>{idx+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td><button onClick={()=>handleDelete(idx)}>Delete</button></td>
                    <td><button onClick={()=>handleUpdate(idx,item)}>update</button></td>
                </tr>
                })}
            </tbody>
        </table>
       </div>
    
    </div>
  )
}

export default Todo
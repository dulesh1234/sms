import React, {  useState } from 'react'


const FormToDo = () => {

    console.log(theme)
     
    const initial = {name:"",email:"",password:""}
    const [user, setUser] = useState(initial)
    const [data, setData] = useState([])
    const [editItem, setEditItem] = useState(null)

    const handleChange = (e) => {
        console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(editItem != null){
         const update = data 
          update[editItem] = user 
            
        }
        else{
            setData([...data, user])

        }
        setUser(initial)
        setEditItem(null)
    }
    console.log(data)
    function handleDelete(index){
        setData(data.filter((_, idx)=>index!==idx))
    }
    function handleUpdate(item,index){
    console.log(item,index)
    setEditItem(index)
    console.log(editItem,"this is edit index")
    setUser(item)
    }

  return (
    <div>
        <div>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="">Enter a name :- </label>
                <input type="text" placeholder='enter a name' name='name' value={user.name} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="">Enter a email :- </label>
                <input type="text" placeholder='enter a email' name='email' value={user.email} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="">Enter a password :- </label>
                <input type="text" placeholder='enter a password' name='password' value={user.password} onChange={handleChange}/>
                <br />
                <br />
                <input type="submit" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>sno.</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item,index)=>{
                        return <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td><button onClick={()=>handleDelete(index)} >Delete</button></td>
                        <td><button onClick={function(){
                            handleUpdate(item,index)
                        }}>Update</button></td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default FormToDo
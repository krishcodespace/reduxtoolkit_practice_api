import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData, getSingleData } from '../app/features/userSlice';
import Card from './Card';

function User() {
 const users =  useSelector((state)=> state.userSlice.user);
 console.log('users', users);
   
 const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(fetchUserData())
  dispatch(getSingleData(12))
 },[dispatch])

  return (
    <div>

        {/* <div className="userlist bg-black text-white">
            {
                users?.length >= 0 && users?.map((user,id)=>{
                    return(

                    <div key={id} className="user">
                        <p>{user?.name}</p>
                        <p>{user?.email}</p>
                    </div>
                    )
                })
            }
        </div> */}
        <Card  users={users}/>
    </div>
  )
}

export default User
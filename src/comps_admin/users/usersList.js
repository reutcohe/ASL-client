import React,{ useState , useEffect }  from 'react'
import { API_URL, doApiGet } from '../../services/apiService';
import CheckAdminComp from '../checkAdminComps'
import UserItem from './userItem';

export default function UsersList() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = API_URL+"/users/usersList";
    try{
      let resp = await doApiGet(url);
      console.log(resp.data);
      setAr(resp.data);
    }
    catch(err){
      console.log(err);
      alert("there problem ,try again later")
    }

  }


  return (
    <div className='container'>
      <CheckAdminComp />
      <h1>List of users in systems</h1>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>NickName</th>
            <th>Active</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
             console.log(item.fullName.firstName )
            return(
              <UserItem key={item._id} doApi={doApi} index={i} item={item}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

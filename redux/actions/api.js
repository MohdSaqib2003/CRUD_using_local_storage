import { 
    fetchUserRequest, 
    fetchUserSuccess, 
    fetchUserError,

    addUserRequest,
    addUserSuccess,
    addUserError,

    deleteUserRequest,
    deleteUserSuccess,
    deleteUserError,

    editUserRequest,
    editUserSuccess,
    editUserError

} from "./action";


export function fetchUsers(){
    // fetchUserRequest();

    const getLocal = JSON.parse(localStorage.getItem('users'));
    if(getLocal.constructor === Array){
       return fetchUserSuccess(getLocal);
    }else{
       return fetchUserError("Error occured");
    }
}


export function addUser(obj){
    // addUserRequest();
    let getLocal = JSON.parse(localStorage.getItem('users'));
    if(getLocal){
        getLocal = [...getLocal, obj];
    }else{
        getLocal = [obj];
    }
    localStorage.setItem('users',JSON.stringify(getLocal));
    return addUserSuccess();
    //  return addUserError("Error occured");
    
}



export function deleteUser(id){
    // deleteUserRequest();
    const getLocal = JSON.parse(localStorage.getItem('users'));
    console.log("G L :",getLocal);
    if(getLocal.constructor === Array){
       const tempLocal = getLocal?.filter((user)=>{
        return user?.id !== id
       })
       localStorage.setItem('users',JSON.stringify(tempLocal));
       return deleteUserSuccess(getLocal);
    }else{
       return deleteUserError("Error occured");
    }    
}


export function editUser(obj){
    // editUserRequest();
    console.log('Edit obj : ', obj);
    const getLocal = JSON.parse(localStorage.getItem('users'));
    console.log("G L :",getLocal);
    if(getLocal.constructor === Array){
       const tempLocal = getLocal?.map((user)=>{
        if(user?.id === obj?.id){
           return obj;
        }else{
           user;
        }
       })
       console.log("TEMP : ", tempLocal);
       localStorage.setItem('users',JSON.stringify(tempLocal));
       return editUserSuccess(getLocal);
    }else{
       return editUserError("Error occured");
    }    
}
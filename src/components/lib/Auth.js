let authenticated = false;
let developer = null;

const isLogged =()=> authenticated;

const getUser =()=> developer;

const login =(developer)=>
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      authenticated = true;
      developer = {
        email:developer.email
      };

      resolve();
    },200);
  });

const logout = () =>{
  authenticated=false;
  developer=null;
  return Promise.resolve();
}

export default{
  isLogged,
  getUser,
  login,
  logout
};

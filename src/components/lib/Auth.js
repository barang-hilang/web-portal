let authenticated = false;
let developer = null;

const isLogged =()=> authenticated;

const getUser =()=> developer;

const login =()=>
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      authenticated = true;
      resolve();
    },200);
  });

const logout = () =>{
  authenticated=false;
  return Promise.resolve();
}

export const requireAuth = (nextState, replace, next) => {
  if (authenticated) {
    next();
  } else {
    replace('/login');
    next();
  }
};

export default{
  isLogged,
  getUser,
  login,
  logout
};

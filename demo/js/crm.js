
const crm = {
    setUserId(obj){
        window.localStorage.setItem("user_id",obj);
    },
    setRoles(obj){
        window.localStorage.setItem("user_roles_id",obj);
    },
    setModules(obj){
        window.localStorage.setItem("user_module_id",obj);
    },
    setToken(obj){
        window.localStorage.setItem("token",obj);
    },
    getToken(){
        return window.localStorage.getItem("token");
    },
    getModules(){
        return window.localStorage.getItem("user_module_id");
    }
}
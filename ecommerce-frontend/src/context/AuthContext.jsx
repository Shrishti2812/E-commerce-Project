import { createContext, useEffect, useState } from "react";
import api from "../api/axios"
import { useRoutes } from "react-router-dom";
export const AuthContext=createContext();
export function AuthProvider({children}){
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
   
    useEffect(()=>{
        const checkAuth=async()=>{
            const token=localStorage.getItem("token");
            if(!token){
                setLoading(false);
                return;
            }
            try{
                const response=await api.get('/user/me');
                setUser(response.data);

            }catch(error){
                localStorage.removeItem("token");
                setUser(null);
            }finally{
                setLoading(false);
            }
        }
        checkAuth();
    },[]);
    return(
        <AuthContext.Provider value={{user,loading}}>{children}</AuthContext.Provider>
    )
}
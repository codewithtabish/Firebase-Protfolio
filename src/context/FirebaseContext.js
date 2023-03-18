import { createContext,useState,useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import {  query, where } from "firebase/firestore";
const FirebaseContext=createContext()

export const FirebaseProvider=({children})=>{
    const [projects, setprojects] = useState([{}])
    const [blogs, setblogs] = useState([{}])
    const [singleBlogs, setsingleBlogs] = useState(null)
    const [singleProject, setsingleProject] = useState(null)
    const [changeType, setchangeType] = useState('all')
    const [changeTypeBlog, setchangeTypeBlog] = useState('all')
    const getSingleBlog=async(collectionName,id)=>{
        const docRef=doc(db,collectionName,id)
        const singleDetail=await getDoc(docRef)
        setsingleProject(singleDetail.data())
        // singleProject(singleDetail.data())
        // setsingleBlog(singleDetail.data())
    }
    const getSingleBlogTwo=async(collectionName,id)=>{
        const docRef=doc(db,collectionName,id)
        const singleDetail=await getDoc(docRef)
        setsingleBlogs(singleDetail.data())
        // setsingleProject(singleDetail.data())
        // singleProject(singleDetail.data())
        // setsingleBlog(singleDetail.data())
    }
    

    useEffect(() => {
        const q = query(collection(db, "projects"), where("type", "==", changeType));
        const p = query(collection(db, "blogs"), where("type", "==", changeTypeBlog));
        let array=[]
        let arrayBlog=[]
        let idArray=[]
        const getData=async()=>{
          if(changeType!="all"){
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
       
              array.push({id:doc.id,...doc.data()})
        
              setprojects(array)
        
            })

          }else{

            const querySnapshot = await getDocs(collection(db,"projects"));
            querySnapshot.forEach((doc) => {
       
              array.push({id:doc.id,...doc.data()})
        
              setprojects(array)
        
            })

          }
        
      
        }
        const getBlogs=async()=>{

          if(changeTypeBlog!="all"){
            const querySnapshot = await getDocs(p);
            querySnapshot.forEach((doc) => {
       
              arrayBlog.push({id:doc.id,...doc.data()})
              setblogs(arrayBlog)
        
              // setprojects(array)
        
            })
          }
          else{
            const querySnapshot = await getDocs(collection(db,"blogs"));
            querySnapshot.forEach((doc) => {
       
              arrayBlog.push({id:doc.id,...doc.data()})
              setblogs(arrayBlog)
        
              // setprojects(array)
        
            })

          }
       
      
        }
        getData()
        getBlogs()
        // getDocs()
      
      }, [changeType,setchangeType,changeTypeBlog])

    return (
        <FirebaseContext.Provider value={{projects,setprojects,singleProject,
            getSingleBlog,setchangeType,blogs,setblogs,
            getSingleBlogTwo,changeTypeBlog,setchangeTypeBlog,
            singleBlogs
        }}>
            {children}

        </FirebaseContext.Provider>
    )
}
export const UseFirebaseContext=()=>{
    return useContext(FirebaseContext)
}
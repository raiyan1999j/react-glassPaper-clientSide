import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import fireAuth from "../Config/FireApp";
import { storage } from "../Config/FireApp";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const InfoProvider = createContext(null);

export default function ContextProvider({children}){
    const [themeMode,setTheme] = useState(true);
    const [userData,setUser] = useState();
    const [loading,setLoading] = useState(true);
    const [routePage,setRoutePage] = useState(false);

    const changeTheme=(value)=>{
        setTheme(value);

        console.log(themeMode);
    }

    const registerUser=async (value)=>{
        const imageRef = ref(storage,`image/${value.mail}`);

        await createUserWithEmailAndPassword(fireAuth,value.mail,value.pass)
        .then(async (userInfo)=>{
            await uploadBytes(imageRef,value.photo);

            await getDownloadURL(ref(storage,`image/${value.mail}`))
            .then(async(imageUrl)=>{
                await updateProfile(userInfo.user,{
                    displayName: value.name,
                    photoURL: imageUrl
                })
            })
            setLoading(true);
            setUser(userInfo.user);
            setRoutePage(true);
            console.log(userInfo.user)
        }).catch(()=>{
            alert('account already in used');
            setRoutePage(false)
        })
    }

    const loginUser=async (value)=>{
        await signInWithEmailAndPassword(fireAuth,value.mail,value.pass)
        .then((userInfo)=>{
            setUser(userInfo.user);
            setRoutePage(true)
            setLoading(true)
        }).catch(()=>{
            alert('email or password not match')
            setRoutePage(false)
        })
        
    }

    const loginGoogle=async ()=>{
        const provider = new GoogleAuthProvider();

        await signInWithPopup(fireAuth,provider)
        .then(async (userInfo)=>{
            const imageRef = ref(storage,`image/${userInfo.user.email}`);
            setLoading(true);
            
            await fetch(userInfo?.user?.photoURL)
            .then(response=>response.blob())
            .then(imgData=>uploadBytes(imageRef,imgData))
            .then(()=>{getDownloadURL(storage,`image/${userInfo.user.email}`)})
            .then(async(imgUrl)=>{
                await updateProfile(userInfo.user,{
                    displayName:userInfo.user.displayName,
                    photoURL:imgUrl
                })
            })
            setRoutePage(true);
            setUser(userInfo.user);
        })
    }

    const loginGithub=async ()=>{
        const provider = new GithubAuthProvider();

        await signInWithPopup(fireAuth,provider)
        .then(async (userInfo)=>{
            setUser(userInfo.user);
            setLoading(true);
            setRoutePage(true)
        })
    }
    const logoutUser=()=>{
        signOut(fireAuth)
        .then(()=>{
            setUser(null)
            setRoutePage(false)
        })
        setLoading(true)
    }
    useEffect(()=>{
        const unMount =()=>{
            onAuthStateChanged(fireAuth,(userInfo)=>{
                setUser(userInfo)
                setLoading(false)
                console.log(userInfo)
            })
        }

        return ()=>{
            unMount()
        }
    },[userData?.displayName,userData?.photoURL])
    const infoBundle={changeTheme,themeMode,registerUser,userData,loading,loginUser,logoutUser,routePage,loginGoogle,loginGithub}
    return(
        <>
            <InfoProvider.Provider value={infoBundle}>
                {children}
            </InfoProvider.Provider>
        </>
    )
}
import { createContext, useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import fireAuth from "../Config/FireApp";
import { storage } from "../Config/FireApp";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const InfoProvider = createContext(null);

export default function ContextProvider({children}){
    const [themeMode,setTheme] = useState(true);

    const changeTheme=(value)=>{
        setTheme(value);

        console.log(themeMode);
    }

    const registerUser=(value)=>{
        const imageRef = ref(storage,`image/${value.mail}`);

        createUserWithEmailAndPassword(fireAuth,value.mail,value.pass)
        .then(async (userInfo)=>{
            await uploadBytes(imageRef,value.photo);

            await getDownloadURL(ref(storage,`image/${value.mail}`))
            .then(async(imageUrl)=>{
                updateProfile(userInfo.user,{
                    displayName: value.name,
                    photoURL: imageUrl
                })
            })

            console.log(userInfo.user)
        })
    }
    const infoBundle={changeTheme,themeMode,registerUser}
    return(
        <>
            <InfoProvider.Provider value={infoBundle}>
                {children}
            </InfoProvider.Provider>
        </>
    )
}
'use client'
import {useSession, signIn,  signOut} from 'next-auth/react'


const SignIn = () => {
const {data:session} = useSession()

    
if (session && session.user) {
  return(

<div className='flex gap-4 ml-auto'>
<p className='text-sky-600'>{session.user.name}</p>

<button className='text-red-600' onClick={() => {
  
  signOut()
}}>Sign Out</button>

</div>

  )



}

return(

<button   onClick={() => {
  
signIn()

}}  style={{textTransform:'capitalize'}}  className='text-red-600' >Sign In</button>


)






}

export default SignIn;

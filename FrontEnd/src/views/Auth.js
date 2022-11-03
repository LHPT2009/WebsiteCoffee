import React from 'react'
import SignUp from '../components/Auth/SignUp'

const google = window.google

const Auth = () => {
  // return (
  //   <div>
  //     <header>
  //     </header>
  //     <main>
  //       <div className="items-center bg-[#ffffff] flex justify-center text-center text-[18px] text-[700]">
  //         <div id="signInDiv"></div>
  //         {Object.keys(user).length !== 0 && (
  //           <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
  //         )}
  //         {user && (
  //           <div>
  //             <img src={user.picture} alt=""></img>
  //             <h4>{user.name}</h4>
  //           </div>
  //         )}
  //       </div>
  //       <div className="justify-center items-center text-[#1d1c1d] flex text-[15px] leading-[22px] my-6">
  //         <div className="border border-[#dddddd] border-style: solid text-[#1d1c1d] text-[15px] leading-[22px] w-[165px]"></div>
  //         <p className="text-[#1d1c1d] text-[15px] leading-[22px] mx-[20px] my-0">
  //           Hoặc
  //         </p>
  //         <div className="border border-[#dddddd] border-style: solid text-[#1d1c1d] text-[15px] leading-[22px] w-[165px]"></div>
  //       </div>
  //       {/* Code */}
  //       <SignUp />
  //     </main>
  //     <footer></footer>
  //   </div>
  // )
}

export default Auth

//Advanced: use login with google auth
// const [user, setUser] = useState({})

//   function handleCallbackResponse(response) {
//     console.log('Encoded JWT ID Token: ' + response.credential)
//     var userObject = jwt_decode(response.credential)
//     console.log(userObject)
//     setUser(userObject)
//     document.getElementById('signInDiv').hidden = true
//   }

//   function handleSignOut(event) {
//     setUser({}) //Obj rong do luu trong state thi dung cai nay duoc
//     document.getElementById('signInDiv').hidden = false
//   }

//   useEffect(() => {
//     // global google
//     google.accounts.id.initialize({
//       client_id:
//         '989548599284-4sgbc6lgo1sug19q3oou61sq4bip3knf.apps.googleusercontent.com',
//       callback: handleCallbackResponse,
//     })

//     google.accounts.id.renderButton(document.getElementById('signInDiv'), {
//       theme: 'outline',
//       size: 'large',
//       width: 400,
//       height: 44,
//       longtitle: true,
//       login_hint: 'false',
//     })

//     google.accounts.id.prompt() //Goi y nhung tai khoan dang nhap gan day
//   }, [])

import { useContext, useEffect,  useState } from 'react';
import athentication from '../../assets/others/authentication.png'
import athentication1 from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { login } = useContext(AuthContext)
    const [firebaseErr, setFirebaseErr] = useState("")
    const [desable, setDesable] = useState(true)
   


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const from = location?.state?.from?.pathname || "/"
    const handleFrom = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                    title: 'user login successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  navigate(from, {replace:true})
            })
            .catch((error) => {

                const errorMessage = error.message;
                setFirebaseErr(errorMessage)
            });

    }



    const handleCaothaRef = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDesable(false)
        } else {
            setDesable(true)
        }

    }
    return (
        <div className='min-h-screen w-full' style={{ backgroundImage: `url("${athentication}")` }}>
            <div className='flex  items-center w-full py-20'>
                <div>
                    <img src={athentication1} alt="" />
                </div>



                <form onSubmit={handleFrom}
                    className="w-1/2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text-alt">Email</span>
                        </label>
                        <input
                            type="text"
                            name='email'
                            placeholder="Type here"
                            className="input input-bordered w-full " />
                    </div>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text-alt">Password</span>
                        </label>
                        <input type="password"
                            placeholder="*********"
                            name='password'
                            className="input input-bordered w-full " />
                    </div>



                    <div className="form-control w-full ">
                        <label className="label">

                            <LoadCanvasTemplate />

                        </label>
                        <input onBlur={handleCaothaRef}
                            type="text"
                           
                            placeholder="type the text about"
                            className="input input-bordered w-full " name='captcha' />


                    </div>

                    <p className='text-red-600'>{firebaseErr}</p>

                    <div className="form-control w-full my-4">
                        <input type="submit"
                            disabled={desable}
                            value="sighin In"
                            className="bg-[#D1A054] text-white input input-bordered w-full " />
                    </div>

                    <div className='text-center'>
                        <p className='text-[#D1A054]'>New here creae new account  <span className='font-bold'> <Link to="/sighinUp">SighinUp</Link></span></p>
                        <p>Or sighin in with</p>
                    </div>



                </form>
            </div>
        </div>
    );
};

export default Login;
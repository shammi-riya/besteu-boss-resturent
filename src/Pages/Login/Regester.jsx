import { useContext, useState } from 'react';
import athentication from '../../assets/others/authentication.png'
import athentication1 from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/Authprovider';
import { useNavigate } from 'react-router-dom';

const Regester = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const [firebaseErr,setFirebaseErr]= useState("")
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {

        createUser(data.email,data.password)
        .then((userCredential) => {
          
            const user = userCredential.user;
            console.log(user);
            navigate("/login")

           
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            setFirebaseErr(errorMessage)
        
          });

        console.log(data);
    }



    return (
        <div className='min-h-screen w-full' style={{ backgroundImage: `url("${athentication}")` }}>

            <div className='flex  items-center px-5 w-full py-20'>



                <form onSubmit={handleSubmit(onSubmit)}
                    className="w-1/2">
                    <h1 className='text-3xl font-bold text-center'>SighnUp</h1>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text-alt">Name</span>
                        </label>
                        <input type="text"
                        {...register("Name")}
                            placeholder="Your Name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text-alt">Email</span>
                        </label>
                        <input
                            type="text"
                            name='email'
                            {...register("email", { required: true })}

                            placeholder="Type here"
                            className="input input-bordered w-full " />
                    </div>
                    <p className='text-red-600'>{errors.email && <span>This field is required</span>}</p>




                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                   

<p className='text-red-700'>{firebaseErr}</p>

                    <div className="form-control w-full my-4">
                        <input type="submit"

                            value="sighin Up"
                            className="bg-[#D1A054] text-white input input-bordered w-full " />
                    </div>

                    <div className='text-center'>
                        <p className='text-[#D1A054]'>New here creae new account</p>
                        <p>Or sighin in with</p>
                    </div>



                </form>

                <div>
                    <img src={athentication1} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Regester;
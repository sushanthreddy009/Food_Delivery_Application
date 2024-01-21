import React,{useState, useEffect} from 'react';
import { useAlert } from 'react-alert';
import { useDispatch,useSelector } from 'react-redux';
import { resetPassword, clearErrors} from '../../actions/userActions';
import { useParams, useNavigate } from 'react-router-dom';

const NewPassword = () => {

    const [password, setPassword] = useState("");
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const alert = useAlert();
    const dispatch = useDispatch();

    const {error,success} = useSelector(
        (state) => state.forgotPassword
    );

    const {token} = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(success){
            alert.success("Password updated successfully");
            navigate("/users/login");
        }
    }, [dispatch, alert, error, success,navigate]);

    const submitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.set("password", password);
        formData.set("passwordConfirm", passwordConfirm);

        dispatch(resetPassword(token, formData));
    };
    return (
        <>
          <div className='row wrapper'>
            <div className='col-10 col-lg-5'>
                <form className='shadow-lg' onSubmit={submitHandler}>
                    <h1 className='mb-3'>New Password</h1>
                    <div className='form-group'>
                        <label htmlFor='password_field'>Password</label>
                        <input
                        type="password"
                        id ="password_field"
                        className='form-Control'
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='confirm_password_field'>Confirm Password</label>
                        <input
                        type="password"
                        id ="confirm_password_field"
                        className='form-Control'
                        value = {passwordConfirm}
                        onChange={(e) => setpasswordConfirm(e.target.value)}
                        />
                    </div>
                    <button
                    id = "new_password_button"
                    type = "submit"
                    className='btn btn-block py-3'
                    >
                        Set Password</button>
                </form>
            </div>
          </div>
        </>
      )
    }

export default NewPassword

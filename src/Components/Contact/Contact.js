import React,{useState} from "react";
import './Contact.css'; 

const Contact = () => {
    /*const HandleSubmit = (e) =>{
        e.PreventDefault();
        setLoading(true)
        console.log("Email sent");
        setLoading(false);
        alert("Message Sent")
    }*/
    return (
        <div className="EducationBlock">
                            <div className="EducationTitle">CONTACT</div>
                            <div className="EducationContent"><spam className='SpamColor'>Lets</spam> Connect</div>
                            <form className="ContactHome">
                                <input type="text" name="FormName" placeholder="Name" className="InputFieldText"/>
                                <input type="email" name="FormName" placeholder="Email" className="InputFieldText"/>
                                <textarea rows={15} name="Message" placeholder="Enter Message" className="InputFieldMessage"/>
                                <input type="submit" className="SubmitContact"/>
                            </form>
                        </div>
    )
}

export default Contact
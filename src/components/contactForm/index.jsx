import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForms';
import "./contactForm.scss"
import Button from '../button';

const ContactForm = () => {
    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: {
            fullName: {
                pattern: {
                    value: /^[a-zA-ZğüşöçİĞÜŞÖÇ]{0,60}/,
                    message: "Only letters are allowed.",
                },
                required: {
                    value: true,
                    message: 'This field is required',
                  },
            },
            email: {
                pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "This is not a valid email format",
                },
            },
            detail: {
                pattern: {
                    value: /^[a-zA-Z0-9ğüşöçİĞÜŞÖÇ]{0,1000}/,
                    message: "Message must not exceed 1000 characters.",
                },
                required: {
                    value: true,
                    message: 'This field is required',
                  },
            },

        },
        onSubmit: () => { //add to local storage.

        },
    });

    // useEffect(()=>{
    //     document.getElementById("add-btn").disabled = !isFormFilled();
    // },[data])

    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input
                    style={errors.fullName && { borderColor: "#FF0000" }}
                    placeholder="Name"
                    value={data.fullName}
                    onChange={handleChange('fullName')}
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="input-wrapper">
                <input
                    style={errors.email && { borderColor: "#FF0000" }}
                    placeholder="Email Address"
                    value={data.email}
                    onChange={handleChange('email')}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-wrapper">
                <input
                    style={errors.subject && { borderColor: "#FF0000" }}
                    placeholder="Subject"
                    value={data.subject}
                    onChange={handleChange('subject')}
                />
            </div>
            <div className="textarea-wrapper">
                <textarea
                    style={errors.detail && { borderColor: "#FF0000" }}
                    value={data.detail}
                    onChange={handleChange('detail')}
                />
                {errors.detail && <p className="error">{errors.detail}</p>}
            </div>


            <div className="submit-wrapper">
                <Button id="add-btn" type="submit" style={{ width: "141px" }}>SEND MESSAGE</Button>
            </div>
        </form>
    );
};

export default ContactForm
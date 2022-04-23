import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForms';
import "./contactForm.scss"
import Button from '../button';

const ContactForm = () => {
    const SITE_KEY = "6LfZyZIfAAAAADSAPt3DuM9KtlMC3OFJ6af7ddGZ";

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    const handleOnClick = e => {
        setLoading(true);
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
                submitData(token);
            });
        });
    }
    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: {
            name: {
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
        onSubmit: handleOnClick,
    });

    useEffect(() => {
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);

            if (!isScriptExist) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }

            if (isScriptExist && callback) callback();
        }

        // load the script by passing the URL
        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
            console.log("Script loaded!");
        });
    }, []);

    

    const submitData = token => {
        // call a backend API to verify reCAPTCHA response
        console.log(token);
        setLoading(false);
        setResponse("succes");
    }

    return (
        <Fragment>
            {!response ? (
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            style={errors.name && { borderColor: "#FF0000" }}
                            placeholder="Name"
                            value={data.name}
                            onChange={handleChange('name')}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
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
                        <Button id="add-btn" type="submit" style={{ width: "141px" }}>{loading ? "SENDING..." : "SEND MESSAGE"}</Button>
                    </div>
                </form>
            ) :
                (<Button id="add-btn" style={{ width: "141px" }} onClick={() => setResponse("")}>Continue</Button>
                )}
        </Fragment>

    );
};

export default ContactForm
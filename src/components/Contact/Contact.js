import './Contact.scss'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

function Contact () {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ( userInfo ) => {
        console.log(userInfo)
    }

    console.log(errors)

    const messages = {
        req: "Este campo es obligatorio",
        name: "El formato introducido no es el correcto",
        lastname: "el formato introducido no es el correcto",
        phone: "Debes introducir un numero correcto",
        email: "debes introducir una dirección correcta",
        text: "Debes ingresar tu mensaje"
    }

    const patterns = {
        name:  /^[A-Za-z]+$/i,
        lastname:  /^[A-Za-z]+$/i,
        phone: /^[0-9]+$/i,
        email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        text: /^[A-Za-z]+$/i
    }

    const captcha = useRef(null);

    const onChange = () => {
       if(captcha.current.getValue()){
        console.log('El usuario no es robot')
       }
    }
    
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_my43ujx', 'template_58ax7vq', event.target, 'b3_uwSg05Cil-XvqJ')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }



    return (
        <div className='contact-section'>
            <div className='container-section justify-content-center'>
                
                <div className='container-content w-100'>
                    <p className='row w-100 fs-2 mt-5 fw-bold text-center text-primary'>Si te interesa contactarme, te invito a llenar este formulario y me contactare contigo tan pronto como me sea posible.</p>
                    <form data-aos="flip-right" data-aos-delay="500" data-aos-duration="2000" className='row w-75 gap-3 container justify-content-center my-5 py-5' action="" onSubmit={handleSubmit(sendEmail)}>
                        <label className='w-50 fw-semibold' htmlFor="name">Nombre</label>
                        <input 
                                className={`${errors.name && "error"} w-50`}
                                type="text"
                                name="name" 
                                placeholder='Nombre'
                                {...register("name", {
                                    required: messages.req,
                                    pattern: {
                                        value: patterns.name,
                                        message: messages.name
                                    }
                                })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                        <label className='w-50 fw-semibold' htmlFor="lastname">Apellidos</label>
                        <input 
                                className={`${errors.lastname && "error"} w-50`}
                                type="text"
                                name="name"
                                placeholder='Apellido'
                                {...register("lastname", {
                                    required: messages.req,
                                    pattern: {
                                        value: patterns.lastname,
                                        message: messages.name
                                    }
                                })}
                        />
                        {errors.lastname && <p>{errors.lastname.message}</p>}

                        <label className='w-50 fw-semibold' htmlFor="phone">Celular</label>
                        <input 
                                className={`${errors.phone && "error"} w-50`}
                                type="tel" 
                                name="phone" 
                                placeholder='Numero de Whatsapp'
                                {...register("phone", {
                                    required: messages.req,
                                    minLength: {
                                        value: 10,
                                        message: messages.phone
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: messages.phone
                                    },
                                    pattern: {
                                        value: patterns.phone,
                                        message: messages.phone
                                    }
                                })}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}

                        <label className='w-50 fw-semibold' htmlFor="email" >Correo Eletrónico</label>
                        <input 
                                className={`${errors.email && "error"} w-50`}
                                type="email" 
                                name="email" 
                                placeholder='Correo Electónico'
                                {...register("email", {
                                    required: messages.req,
                                    pattern: {
                                        value: patterns.email,
                                        message: messages.email
                                    }
                                })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}

                        <label className='w-50 fw-semibold' htmlFor="text">Mensaje</label>
                        <textarea 
                            className={`${errors.text && "error"} w-50`} 
                            name="text" 
                            id="" 
                            cols="30" 
                            rows="10" 
                            placeholder='Deja Aqui Tu Mensaje...'
                            {...register("text", {
                                required: messages.req,
                                pattern: {
                                    value: patterns.text,
                                    message: messages.text
                                }
                            })}
                        ></textarea>
                        {errors.email && <p>{errors.email.message}</p>}
                        
                        <div className='w-50 recaptcha'>
                            <ReCAPTCHA 
                                ref={captcha}
                                sitekey='6LdLv0MpAAAAAE08KL0XfRnrIVDdIBKk0CvAwdXN'
                                onChange={onChange}
                            />
                        </div>
                        <div className='form-button-container w-50 d-flex justify-content-center'>
                            <button className='form-button btn btn-primary text-light' type="submit">Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
                <div className='form-success'>
                    <h2>Mensaje Enviado</h2>
                </div>
            </div>
        </div>
    )
}

export default Contact;
import './Contact.scss'
import emailjs from '@emailjs/browser';

function Contact () {
    
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_my43ujx', 'template_58ax7vq', event.target, 'b3_uwSg05Cil-XvqJ')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }



    return (
        <div className='contact-section'>
            <div className='container justify-content-center'>
                <div className='container-content w-100'>
                    <p className='row w-100 fs-2 mt-5 fw-bold text-center text-primary'>Si te interesa contactarme, te invito a llenar este formulario y me contactare contigo tan pronto como me sea posible.</p>
                    <form className='row w-75 gap-3 container justify-content-center my-5 py-5' action="" onSubmit={sendEmail}>
                        <label className='w-50 fw-semibold' htmlFor="">Nombre</label>
                        <input className='w-50 ' type="text" name="name" placeholder='Nombre'/>
                        <label className='w-50 fw-semibold' htmlFor="">Apellidos</label>
                        <input className='w-50' type="text" name="name" placeholder='Apellido'/>
                        <label className='w-50 fw-semibold' htmlFor="">Celular</label>
                        <input className='w-50' type="number" name="phone" placeholder='Numero de Whatsapp'/>
                        <label className='w-50 fw-semibold' htmlFor="" >Correo Eletrónico</label>
                        <input className='w-50' type="email" name="email" placeholder='Correo Electónico'/>
                        <label className='w-50 fw-semibold' htmlFor="">Mensaje</label>
                        <textarea className='w-50' name="message" id="" cols="30" rows="10" placeholder='Deja Aqui Tu Mensaje...'></textarea>
                        <div className='form-button-container w-50 d-flex justify-content-center'><button className='form-button btn btn-primary text-light' type="submit">Enviar Mensaje</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
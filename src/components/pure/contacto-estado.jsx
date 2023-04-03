import React from 'react';
import { Contacto } from '../Models/contacto.class'
import ContactoComponent from './contacto';


const ContactoEstadoComponent = () => {

    const defaultContacto = new Contacto('Alejandro', 'Gonzalez', 'alegonza94@gmail.com', false)

    return (
        <div>
            <div>Este Contacto:</div>
            <ContactoComponent contacto = {defaultContacto}></ContactoComponent>
        </div>
    );
};

export default ContactoEstadoComponent;

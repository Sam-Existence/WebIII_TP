import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next';

export const Langages = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const changerLangue = async () => await i18n.changeLanguage('fr');
        changerLangue();
    }    
    , [i18n]);

    return  (
        <Form.Group>
            <Form.Control as="select" className="mb-3"
                onChange={(event) => i18n.changeLanguage(event.target.value)} >
                <option value="fr">Français</option>
                <option value="en">English</option>
            </Form.Control>
        </Form.Group>                
    );
}
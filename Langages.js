import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next';

function Langages() {
    const { i18n } = useTranslation();

    useEffect(() => i18n.changeLanguage('fr'), [i18n]);

    function changerLangue(langue) {
        i18n.changeLanguage(langue);
    }

    return  (
        <Row className="mt-3">
            <Col>
                <Form.Group>
                    <Form.Control as="select" className="mb-3"
                        onChange={(event) => changerLangue(event.target.value)} >
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                    </Form.Control>
                </Form.Group>                
            </Col>
        </Row>
    );
}

export default Langages;
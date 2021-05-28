//import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import URL_API from '../../service/service-api'
import { withRouter} from 'react-router-dom';

const fetchURL = URL_API + '/api/funcionarios';
const getItems = () => fetch(fetchURL).then(res => res.json());

function MontaDropDownLogin() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data))
    }, []);

    return (
        <div className="form-group">
            <select className="form-control" id="nomefun" required="required">
            <option value="">Selecione o funcionário</option>
                {
                    items.map(item => {
                        return(
                            <option value="" >{item.fun_nome}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}
export default withRouter(MontaDropDownLogin);

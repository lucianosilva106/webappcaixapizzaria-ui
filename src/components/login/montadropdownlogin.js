import React, { useEffect, useState } from 'react';
import DropDownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import URL_API from '../../service/service-api'

function MontaDropDownLogin()
{
    const [result, getdata]=useState([]);
    useEffect(()=>{
        fetch(URL_API + '/api/funcionarios',{
            method:'GET',
            headers:{
                'content-type':'aplication/json',
            }
        })
        .then(resp=>getdata(resp))
    },[])
    return(
        <div>
            <DropDownButton id="dropdown-basic-button" title="Funcionario">
                {
                    result.map(Items=>{
                        return(
                            <Dropdown.Item eventkey={Items.fun_nome}>{Items.fun_nome}</Dropdown.Item>
                        );
                    })
                }
            </DropDownButton>
        </div>
    )
}
export default MontaDropDownLogin;

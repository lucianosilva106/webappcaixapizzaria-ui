import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class AddAberturaCaixa extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: 0,
            datahoraabertura: '',
            idfuncionario: 0,
            valorfundocaixa: 0,
            datahorafechamento: '2021-05-14T10:45:00',
            valorfinalcaixa: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(evento) {
        const data = JSON.stringify(this.state)
//        alert('Um formulario foi enviado:' + data);
        evento.preventDefault();

        fetch('https://localhost:44331/api/caixacontroles', {
           method: 'POST',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
            body: data
        }).then(function(response) {
            toast.success('Caixa aberto sucesso!')
            return response.json();
        }).catch(function(erro) {
            toast.error('Erro ao abrir caixa')
        })
    }

    render() {
        return(
            <div class="container">

                <ToastContainer />
                <div class="card-form mx-auto shadow -lg p-5 mb-5 mt-5 bg-white rounded animate_animated animate_zoomIn">
                    <h2>
                        <span className="col-12 font-weight-bold">Abertura de Caixa</span>
                    </h2>
                    <br />
                    <Form onSubmit={this.handleSubmit}>
                        <div className="col-12">
                            <FormGroup>
                                <Label>Data/Hora Abertura:</Label>
                                <Input
                                    required="required"
                                    name="datahoraabertura"
                                    type="datetime-local"
                                    onChange={e => this.setState({ datahoraabertura: e.target.value })}
                                />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Label>Funcionário:</Label>
                                <div className="form-group">
                                    <select className="form-control" name="idfuncionario" required="required"
                                        onChange={e => this.setState({ idfuncionario: e.target.value })}>
                                        <option value="">Selecione</option>
                                        <option value="1">Luciano Ferreira da Silva</option>
                                        <option value="2">Josiane</option>
                                        <option value="3">Matheus Alecsander</option>
                                    </select>
                                </div>
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Label>Valor Inicial:</Label>
                                <Input
                                    required="required"
                                    name="valorfundocaixa"
                                    type="float"
                                    onChange={e => this.setState({ valorfundocaixa: e.target.value })}
                                />
                            </FormGroup>

                            <br />
                            <Button className="offset-md-8 col-md-4 btn-lg btn-dark btn-block" type="submit" value="Enviar">Confirmar</Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
import { Alert } from 'bootstrap';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class AddCaixaRecebe extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: 0,
            idcaixacontrole: 1,
            datahora: '',
            tipolancamento: 'E',
            valor: 0,
            idformapagamento: 0,
            observacao: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(evento) {
        const data = JSON.stringify(this.state)
//        alert('Um formulário foi enviado:' + data);
        evento.preventDefault();

        const novoObjeto = {
            id: data.id,
            idcaixacontrole: data.idcaixacontrole,
            datahora: data.datahora,
            tipolancamento: data.tipolancamento,
            valor: data.valor,
            idformapagamento: data.idformapagamento,
            observacao: data.observacao
        }
        console.log(novoObjeto.value)
        
        alert('Um formulário foi enviado:' + novoObjeto);

        fetch('https://localhost:44331/api/caixalancamentoes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: novoObjeto
        }).then(function (response) {
            toast.success('Comanda recebida e encerrada!')
            return response.json();
        }).catch(function (erro) {
            toast.error('Erro ao encerrar comanda')
        })

        const response2 = await fetch('https://localhost:44331/api/caixalancamentoes');
        const datalan = await response2.json();
//        alert('lancamentos efetuados:' + datalan);
        this.setState({ caixalancamentos: datalan, loading: true });

    }

//    async calculo_troco(vltroco){
//        var vlt = document.getElementById('valor');
//        var vlr = document.getElementById('valorecebido');
//
//        vltroco = vlr - vlt;

//        Alert(vlr-vlt)
//        document.getElementById('troco').value = vltroco;
//    }

    render() {
        return (
            <div class="container">
                <ToastContainer />
                <div class="card-form mx-auto shadow -lg p-5 mb-5 bg-white rounded animate_animated animate_zoomIn">
                    <h2>
                        <span className="font-weight-bold">Recebimento de Comanda</span>
                    </h2>
                    <br />

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>No. da Comanda:</Label>
                            <Input type="int" />
                        </FormGroup>
                        <br />
                        <FormGroup>
                        <Label>Data/Hora:</Label>
                        <Input
                            name="datahora"
                            type="datetime-local"
                            onChange={e => this.setState({ datahora: e.target.value })}
                        />
                        </FormGroup>
                        <br />
                        <FormGroup>
                        <Label>Valor da comanda:</Label>
                        <Input
                            name="valor"
                            type="float"
                            onChange={e => this.setState({ valor: e.target.value })}
                        />
                        </FormGroup>
                        <br />
                        <FormGroup>
                        <Label>Forma de Pagamento:</Label>
                        <div className="form-group">
                        <select className="form-control" name="idformapagamento"
                            onChange={e => this.setState({ idformapagamento: e.target.value })}>
                            <option value="">Selecione</option>
                            <option value="1">Dinheiro</option>
                            <option value="2">Débito</option>
                            <option value="3">Crédito</option>
                        </select>
                        <br />
                        <Label>Valor recebido:</Label>
                        <Input
                            name="valorrecebido"
                            type="float"
                        />
                        <Label>Troco:</Label>
                        <Input
                            name="troco"
                            type="float"
                        />
                        </div>
                        </FormGroup>
                        <br />
                        <Button className="col-md-12 btn-lg btn-dark btn-block" type="submit" value="Receber">Confimar</Button>
                    </Form>
                </div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead class="thead-dark">
                        <tr>
                          
                            <th scope="col">No. comanda</th>
                            <th scope="col">Data/Hora</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Forma Pagamento</th>
                            
                        </tr>

                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }
}
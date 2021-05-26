import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import URL_API from '../../service/service-api'
import { withRouter} from 'react-router-dom';

class FechamentoCaixa extends React.Component {
    constructor(props) {
        super();
        this.state = {
            datahorafechamento: '',
            valorfinalcaixa: 0,
            flagcaixafechado: 1
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(evento) {
        const data = JSON.stringify(this.state)
//        alert('Um formulario foi enviado:' + data);
        evento.preventDefault();

        fetch(URL_API + '/api/caixacontroles', {
           method: 'PUT',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
            body: data
        }).then(function(response) {
            toast.success('Caixa encerrado com sucesso!')
            return response.json();
        }).catch(function(erro) {
            toast.error('Erro ao fechar caixa')
        })
    }

    render() {
        return(
            <div class="container">

                <ToastContainer />
                <div class="card-form mx-auto shadow -lg p-5 mb-5 mt-5 bg-white rounded animate_animated animate_zoomIn">
                    <h2>
                        <span className="col-12 font-weight-bold">Fechamento de Caixa</span>
                    </h2>
                    <br />
                    <Form onSubmit={this.handleSubmit}>
                        <div className="col-12">
                            <FormGroup>
                                <Label>Data/Hora Fechamento:</Label>
                                <Input
                                    required="required"
                                    name="datahorafechamento"
                                    type="datetime-local"
                                    onChange={e => this.setState({ datahorafechamento: e.target.value })}
                                />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Label>Valor Final:</Label>
                                <Input
                                    required="required"
                                    name="valorfinalcaixa"
                                    type="float"
                                    onChange={e => this.setState({ valorfinalcaixa: e.target.value })}
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
export default withRouter(FechamentoCaixa)
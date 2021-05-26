import React from 'react';
import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import URL_API from '../../service/service-api'
import { withRouter} from 'react-router-dom';

export class Caixacontrole {
    construtor(){
        this.state = {
            datahorafechamento: 0,
            valorfinalcaixa: 0
        }
    }
}

class FechamentoCaixa extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: "", caixacontrole: new Caixacontrole(), loading: true };
        this.inicialize();
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSalve = this.handleSalve.bind(this);
    }

    async inicialize() {

        var id = this.props.match.params["id"]
    
        if (id > 0) {
            const response = await fetch(URL_API + 'api/caixacontroles/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", caixacontrole: data, loading: false });
        }
        else {
            this.state = { title: "Create", caixacontrole: new Caixacontrole(), loaging: false };
        }
    } 

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/caixa-controle")
    }

    handleSalve(event) {

        var id = this.props.match.params["id"]
        event.preventDefault();
        const data = new FormData(event.target);
        alert(this.props.match.params["id"]);
        alert(URL_API + '/api/caixacontroles/' + id);
        if (id > 0) {
            const response1 = fetch(URL_API + '/api/caixacontroles/' + id, { method: "PUT", body: data });
            this.props.history.push("/caixa-controle");
        }
        else {
            const response2 = fetch(URL_API + 'api/caixacontroles/' , { method: "POST", body: data });
            this.props.history.push("/caixa-controle");
        }
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
                    <Form onSubmit={this.handleSalve}>
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
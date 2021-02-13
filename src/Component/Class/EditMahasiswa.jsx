import React, { PureComponent } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Container, Col, Row, Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const url = 'http://localhost:3001/';

class EditMahasiswa extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_mahasiswa: '',
            npm: this.props.location.state.npm,
            nama: this.props.location.state.nama,
            jurusan: this.props.location.state.jurusan,
            reponse: '',
            display: 'none'
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        this.setState({
            id_mahasiswa: params.id
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editMahasiswaFunc = (idmhs) => {
        const data = qs.stringify({
            id: idmhs,
            npm: this.state.npm,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        });

        axios.put(url + `update/${idmhs}`, data)
            .then(json => {
                if (json.data.status === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    });
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    });
                }
            });
    }

    render() {
        return (
            <Container>
                <h2 className="my-3">Form Mahasiswa</h2>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form>
                    <FormGroup>
                        <Label for="npm">NPM</Label>
                        <Input type="text" name="npm" id="npm" value={this.state.npm} onChange={this.handleChange} maxLength="8" placeholder="Input NPM" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nama">Nama</Label>
                        <Input type="text" name="nama" id="nama" value={this.state.nama} onChange={this.handleChange} maxLength="64" placeholder="Input Nama" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="jurusan">Jurusan</Label>
                        <Input type="text" name="jurusan" id="jurusan" value={this.state.jurusan} onChange={this.handleChange} maxLength="64" placeholder="Input Jurusan" />
                    </FormGroup>
                    <Button type="button" onClick={() => this.editMahasiswaFunc(this.state.id_mahasiswa)}>Update</Button>
                </Form>
            </Container>
        );
    };
}

export default EditMahasiswa;
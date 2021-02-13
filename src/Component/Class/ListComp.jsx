import React, { PureComponent } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Table, Button, Container, NavLink, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const url = 'http://localhost:3001/';

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none'
        };
    }

    componentDidMount() {
        axios.get(url + 'mahasiswa').then(res => {
            this.setState({
                mahasiswa: res.data.values
            });
        });
    }

    deleteMahasiswa = (idmhs) => {
        const { mahasiswa } = this.state;
        const data = qs.stringify({
            id_mahasiswa: idmhs
        });

        axios.delete(url + `delete/${idmhs}`).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id_mahasiswa !== idmhs),
                    display: 'block'
                });
                this.props.history.push('/mahasiswa');
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
                <h2 className="my-3">Data Mahasiswa</h2>
                <Link to="/create">
                    <Button color="success mb-3">Tambah Data</Button>
                </Link>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center">NPM</th>
                            <th className="text-center">Nama</th>
                            <th className="text-center">Jurusan</th>
                            <th className="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mahasiswa.map(mahasiswa =>
                            <tr key={mahasiswa.id_mahasiswa}>
                                <td className="align-middle text-center">{mahasiswa.npm}</td>
                                <td className="align-middle">{mahasiswa.nama}</td>
                                <td className="align-middle">{mahasiswa.jurusan}</td>
                                <td className="align-middle text-center">
                                    <Link to={
                                        {
                                            pathname: `/edit/${mahasiswa.id_mahasiswa}`,
                                            state: {
                                                npm: mahasiswa.npm,
                                                nama: mahasiswa.nama,
                                                jurusan: mahasiswa.jurusan,
                                            }
                                        }
                                    }>
                                        <Button color="primary" className="m-1">Edit</Button>
                                    </Link>
                                    <Button color="danger" className="m-1"
                                        onClick={e =>
                                            window.confirm("Are you sure you wish to delete this item?") &&
                                            this.deleteMahasiswa(mahasiswa.id_mahasiswa)
                                        }
                                    >
                                        Delete
                                    </Button>
                                    {/* <Button color="danger" className="m-1" onClick={() => this.deleteMahasiswa(mahasiswa.id_mahasiswa)}>Delete</Button> */}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container >
        );
    };
}

export default ListComp;
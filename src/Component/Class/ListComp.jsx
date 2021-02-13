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

    render() {
        return (
            <Container>
                <h2 className="my-3">Data Mahasiswa</h2>
                <Link to="/create">
                    <Button color="success mb-3">Tambah Data</Button>
                </Link>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>NPM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mahasiswa.map(mahasiswa =>
                            <tr key={mahasiswa.id_mahasiswa}>
                                <td>{mahasiswa.npm}</td>
                                <td>{mahasiswa.nama}</td>
                                <td>{mahasiswa.jurusan}</td>
                                <td>
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
                                        <Button color="primary">Edit</Button>
                                    </Link>
                                    <Link to={
                                        {
                                            pathname: `/delete/${mahasiswa.id_mahasiswa}`
                                        }
                                    }>
                                        <Button color="danger">Delete</Button>
                                    </Link>
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
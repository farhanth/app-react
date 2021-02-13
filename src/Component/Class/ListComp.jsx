import React, { PureComponent } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Table, Button, Container, NavLink, Alert } from 'reactstrap';

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
                <Button color="success mb-3">Tambah Data</Button>
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
                                <td>Edit   |   Hapus</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        );
    };
}

export default ListComp;
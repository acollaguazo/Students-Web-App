import React, { Component } from 'react'
import axios from "axios"
import {backend} from '../App'

export default class ShowEstudiantes extends Component {
    render() {
        return (
            <div className="row mx-4">
                <div className="col-md-4">
    <div className="card card-body">
        <h4>Ingreso de nuevo estudiante</h4>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <input type="text" className="form-control my-1" value={this.state.idEstudiante} placeholder="Id" onChange={this.onChangeId}/>
                <input type="text" className="form-control my-1" value={this.state.nombreEstudiante} placeholder="Nombre" onChange={this.onChangeNombre}/>
                <input type="text" className="form-control my-1" value={this.state.apellidoEstudiante} placeholder="Apellido" onChange={this.onChangeApellido}/>
                <input type="text" className="form-control my-1" value={this.state.edadEstudiante} placeholder="Edad" onChange={this.onChangeEdad}/>
            </div>
            <button className="btn btn-primary my-3" type='submit'>Guardar</button>
        </form>
    </div>
</div>

            <div className="col-md-8">
            <h4>Consulta de estudiantes</h4>
                <ul className="list-group">
                    {
                        this.state.users.map(user => (
                            <li className="list-group-item list-group-item-action" key={user.id} id={user.id} onDoubleClick={this.ondelete}>
                                {user.nombre+" "+user.apellido+" "+user.edad}
                            </li>)
                )
            }
        </ul>
    </div>
</div>
        )
    }

    state = {
        users: [],
        idEstudiante:'',
        nombreEstudiante:'',
        apellidoEstudiante:'',
        edadEstudiante:'',
            }
    async getEstudiantes() {
    const res = await axios.get(backend.host + ':' + backend.port + '/estudiante');
    this.setState({users:res.data});
    }

    //async addEstudiantes() {
    //    const res = await axios.get(backend.host + ':' + backend.port + '/estudiante');
    //    this.setState({users:res.data});
    //    }

    async componentDidMount() {
    await this.getEstudiantes();
    console.log(this.state.users);
    }

    onChangeId = (e)=>{
        this.setState({
            idEstudiante: e.target.value
        })
    }
    
    onChangeNombre = (e)=>{
        this.setState({
            nombreEstudiante: e.target.value
        })
    }
    
    onChangeApellido = (e)=>{
        this.setState({
            apellidoEstudiante: e.target.value
        })
    }

    onChangeEdad = (e)=>{
        this.setState({
            edadEstudiante: e.target.value
        })
    }
    
    onSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(backend.host + ':' + backend.port + '/estudiante',{
                idEstudiante:this.state.idEstudiante,
                Name:this.state.nombreEstudiante,
                LastName:this.state.apellidoEstudiante,
                Age:this.state.edadEstudiante
            })
            console.log(res);
        } catch (error) {
            alert(error.response.data);
        }
        
        this.getEstudiantes();
        //this.addEstudiantes();
        this.setState({idEstudiante:''});
        this.setState({nombreEstudiante:''});
        this.setState({apellidoEstudiante:''});
        this.setState({edadEstudiante:''});
    }
    
    ondelete = async (e)=>{
        console.log(e.target.getAttribute('id'));
    }
    
}

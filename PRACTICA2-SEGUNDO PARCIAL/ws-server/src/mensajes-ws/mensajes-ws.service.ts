import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Corredor } from '../corredor/entities/corredor.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CorredorService } from 'src/corredor/corredor.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       corredor: Corredor
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Corredor)
     private readonly corredorRepository: Repository<Corredor>,
     private readonly corredorService: CorredorService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.corredorService.prueba());
        const corredor =await  this.corredorRepository.findOneBy({ nombre: name });
        if (!corredor) throw new Error('Corredor no encontrado');
        if (!corredor.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, corredor: corredor};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].corredor.nombre;
    }
}

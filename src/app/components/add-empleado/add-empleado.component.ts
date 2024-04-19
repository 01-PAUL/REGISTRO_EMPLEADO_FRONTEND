import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pais } from '../../models/pais.model';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';
import { PaisService } from '../../services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-empleado',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './add-empleado.component.html',
  styleUrl: './add-empleado.component.css'
})
export class AddEmpleadoComponent {

      lstPais : Pais[] = [];

      objEmpleado : Empleado  = {
          nombres : "",
          apellidos : "",
          fechaNacimiento : undefined,
          pais : {
              idPais : -1
          }
      }    

      constructor(private paisService : PaisService, 
                  private empleadoService:EmpleadoService){

            this.paisService.listaPais().subscribe(
                  x => this.lstPais = x
            );
      }

      inserta(){
        this.empleadoService.registraEmpleado(this.objEmpleado).subscribe(
            x =>  Swal.fire({icon: 'info',title: 'Resultado del Registro - Paul',text: x}) 
        );
}
}

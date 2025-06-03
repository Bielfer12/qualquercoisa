import { Component, inject, signal } from '@angular/core';
import {CardModule} from 'primeng/card';
import{FloatLabelModule} from 'primeng/floatlabel';
import{InputTextModule} from 'primeng/inputtext';
import{SelectModule} from 'primeng/select';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MessageService} from 'primeng/api'


@Component({
  selector: 'app-add',
  imports: [CardModule,FloatLabelModule,InputTextModule,SelectModule,ButtonModule,FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent {
  MessageService = inject(MessageService)
  types = signal(['Trabalho','Estudo','Hobie'])

  description = signal('')
  type = signal<any>(null)

  isInvalidButton(){
    return !this.description() || !this.type()
  }

  save() {
    const task = {
      type: this.type(),
      id: new Date().getDate(),
      createdAt: new Date()
    }

    console.log(task);

    this.description.set('')
    this.type.set(null)


    this.MessageService.add({
      severity: 'success',
      summary: 'Salvo',
      detail: 'Task salva com sucesso!!'
    })

  }

}

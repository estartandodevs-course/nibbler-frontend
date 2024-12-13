import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  visible: boolean = true;
  isConfirmed: boolean = false;
  load: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit() {
    // Inicializando a propriedade 'form' no ngOnInit
    this.form = this.fb.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      diagnostico: ['', Validators.required],
      desafios: this.fb.group({
        procrastinacao: [false],
        dificuldadeFoco: [false],
        sobrecarga: [false],
        organizacao: [false],
        autocuidado: [false],
      }),
      objetivos: this.fb.group({
        gerenciamentoTarefas: [false],
        monitoramentoEmocoes: [false],
        pomodoroFoco: [false],
        conquistas: [false],
        autocuidadoSaude: [false],
      }),
    });
  }

  // Método para saber se o formulário está válido
  isStepValid(stepName: string): boolean {
    return this.form?.get(stepName)?.valid || false;
  }

  viewpass() {
    this.visible = !this.visible;
  }

  onSubmit() {
    this.load = true;
    const dados = this.form.value;

    this.usuarioService.cadastrarUsuario(dados).subscribe(
      (response) => {
        console.log('Usuário cadastrado com sucesso!', response);
        this.isConfirmed = true;
        this.load = false;
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
        this.isConfirmed = true;

        this.load = false;
      },
    );
  }
}

// onSubmit() {
//   if (this.form.invalid) {
//     console.log('Formulário inválido');
//     return;
//   }

//   this.load = true; // Ativa o estado de carregamento
//   const dados = this.form.value;

//   this.usuarioService.cadastrarUsuario(dados).subscribe(
//     (response) => {
//       console.log('Usuário cadastrado com sucesso!', response);
//       this.isConfirmed = true; // Mostra o componente de sucesso
//       this.load = false; // Desativa o estado de carregamento
//     },
//     (error) => {
//       console.error('Erro ao cadastrar usuário', error);
//       this.load = false; // Desativa o estado de carregamento
//     },
//   );
// }
// }

import { Component, OnInit } from '@angular/core';
import { CalendarRestService } from '../../services/calendar-rest.service';
import { ReflectionService } from '../../services/reflection.service';
import { IEmotion } from '../../models/emotionInterface';
import { IPutReflection } from '../../models/reflectionInterface';
import { ActivatedRoute } from '@angular/router';
import { IReflexao } from '../../models/calendarInterface';

@Component({
  selector: 'app-register-edit',
  templateUrl: './register-edit.component.html',
  styleUrl: './register-edit.component.scss',
})
export class RegisterEditComponent implements OnInit {
  constructor(
    private emotionService: CalendarRestService,
    private reflectionService: ReflectionService,
    private route: ActivatedRoute,
  ) {}

  emotions: IEmotion[] = [];
  reflection = {
    emotion: '',
    reflectionText: '',
  };
  diaryData: IReflexao | null = null;
  userId = '3a770a96-302e-494e-773b-08dd1a60a9c9';
  idReflection: string | null = null;

  ngOnInit(): void {
    this.loadEmotions();
    this.loadReflection();
  }

  isOpen = false;

  toggleMenu(): void {
    const backdrop = document.querySelector('.backdrop');
    this.isOpen = !this.isOpen;

    if (backdrop) {
      backdrop.classList.toggle('openBackdrop');
    }
  }

  loadEmotions(): void {
    this.emotionService.getEmotions().subscribe({
      next: (response) => {
        if (response.sucess) {
          this.emotions = response.data;
        } else {
          console.warn('Nenhuma emoção encontrada.');
        }
      },
      error: (error) => console.error('Erro ao buscar emoções:', error),
    });
  }

  emotionTranslations: { [key: string]: string } = {
    happy: 'Feliz',
    good: 'Bem',
    neutral: 'Neutro',
    anxious: 'Ansioso',
    sad: 'Triste',
    horrible: 'Horrível',
  };

  loadReflection(): void {
    this.idReflection = this.route.snapshot.paramMap.get('id'); // Obtém o ID da URL
    if (!this.userId) {
      console.error('ID do usuário não encontrado na URL.');
      return;
    }

    this.reflectionService.getReflexao(this.idReflection).subscribe({
      next: (response) => {
        console.log(response);
        this.reflection.reflectionText = response.data.conteudo;
      },
      error: (error) => console.error('Erro ao buscar reflexão:', error),
    });
  }

  submitReflection(): void {
    if (!this.reflection.emotion || !this.reflection.reflectionText) {
      console.error('Todos os campos são obrigatórios.');
      return;
    }

    const payload: IPutReflection = {
      conteudo: this.reflection.reflectionText,
      emocaoId: this.reflection.emotion,
    };

    this.reflectionService.putReflexao(this.idReflection, payload).subscribe({
      next: (response) => {
        console.log('Reflexão registrada com sucesso!', response);
      },
      error: (error) => console.error('Erro ao registrar a reflexão:', error),
    });
  }
}

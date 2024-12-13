import { Component, OnInit } from '@angular/core';
import { CalendarRestService } from '../../services/calendar-rest.service';
import { ReflectionService } from '../../services/reflection.service';
import { IEmotion } from '../../models/emotionInterface';
import { IReflection } from '../../models/reflectionInterface';

@Component({
  selector: 'app-register-diary',
  templateUrl: './register-diary.component.html',
  styleUrls: ['./register-diary.component.scss'],
})
export class RegisterDiaryComponent implements OnInit {
  emotions: IEmotion[] = [];
  reflection = {
    emotion: '',
    reflectionText: '',
  };
  userId = '8d11e3c0-6c6c-4d56-e623-08dd1a327e31';

  constructor(
    private emotionService: CalendarRestService,
    private reflectionService: ReflectionService,
  ) {}

  ngOnInit(): void {
    this.loadEmotions();
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

  submitReflection(): void {
    if (!this.reflection.emotion || !this.reflection.reflectionText) {
      console.error('Todos os campos são obrigatórios.');
      return;
    }

    const payload: IReflection = {
      usuarioId: this.userId,
      conteudo: this.reflection.reflectionText,
      emocaoId: this.reflection.emotion,
    };

    this.reflectionService.addReflexao(payload).subscribe({
      next: (response) => {
        console.log('Reflexão registrada com sucesso!', response);
        this.reflection.emotion = '';
        this.reflection.reflectionText = '';
      },
      error: (error) => console.error('Erro ao registrar a reflexão:', error),
    });
  }
}

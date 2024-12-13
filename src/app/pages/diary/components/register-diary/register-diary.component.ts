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
  userId = '3a770a96-302e-494e-773b-08dd1a60a9c9';

  constructor(
    private emotionService: CalendarRestService,
    private reflectionService: ReflectionService,
  ) {}

  ngOnInit(): void {
    this.loadEmotions();
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
      },
      error: (error) => console.error('Erro ao registrar a reflexão:', error),
    });
  }
}

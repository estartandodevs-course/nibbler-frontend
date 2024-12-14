import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer-pomodoro',
  templateUrl: './timer-pomodoro.component.html',
  styleUrls: ['./timer-pomodoro.component.scss'],
})
export class TimerPomodoroComponent implements OnInit {
  modes = [
    { value: 'focus', label: 'Foco', icon: 'assets/imgPomodoro/brain.svg', altText: 'Brain', time: 25 },
    { value: 'break', label: 'Pausa curta', icon: 'assets/imgPomodoro/mug.svg', altText: 'Mug', time: 5 },
    { value: 'pause', label: 'Pausa longa', icon: 'assets/imgPomodoro/pause.svg', altText: 'Pause', time: 15 },
  ];

  activeMode: string = 'focus';
  isModalOpen: boolean = false;
  timerValue: number = 25 * 60;
  isRunning: boolean = false;
  interval!: ReturnType<typeof setInterval>;
  previousFocusTime: number = 25 * 60;
  audioPlayer: HTMLAudioElement | null = null;

  isNoteOpen: boolean = false;
  noteContent: string = '';
  showPopup: boolean = false;

  constructor(private router: Router) {}

  navigateToSelfCare(): void {
    this.router.navigate(['/pomodoro/self-care']);
    this.closePopup();
  }

  closePopup(): void {
    this.showPopup = false;
  }

  toggleNote(): void {
    this.isNoteOpen = !this.isNoteOpen;
  }

  closeNote(): void {
    this.isNoteOpen = false;
  }

  saveNote(): void {
    if (this.noteContent.trim()) {
      localStorage.setItem('userNote', this.noteContent);
      alert('Anotação salva com sucesso!');
      this.isNoteOpen = false;
    } else {
      alert('A anotação está vazia.');
    }
  }

  ngOnInit(): void {
    const savedTimerValue = localStorage.getItem('timerValue');
    const savedActiveMode = localStorage.getItem('activeMode');
    const savedIsRunning = localStorage.getItem('isRunning');
    const savedPreviousFocusTime = localStorage.getItem('previousFocusTime');
    const savedModes = localStorage.getItem('modes');

    if (savedTimerValue) this.timerValue = parseInt(savedTimerValue, 10);
    if (savedActiveMode) this.activeMode = savedActiveMode;
    if (savedIsRunning === 'true') this.startTimer();
    if (savedPreviousFocusTime) this.previousFocusTime = parseInt(savedPreviousFocusTime, 10);
    if (savedModes) this.modes = JSON.parse(savedModes);
  }

  setActiveMode(mode: string): void {
    this.stopSound();
    const selectedMode = this.modes.find((m) => m.value === mode);
    if (!selectedMode) return;

    if (mode === 'focus') {
      this.timerValue = this.previousFocusTime;
    } else {
      if (this.activeMode === 'focus') this.previousFocusTime = this.timerValue;
      this.timerValue = selectedMode.time * 60;
    }

    const container = document.querySelector('.pomodoro-container');
    if (container) {
      container.classList.remove(this.activeMode);
      container.classList.add(mode);
    }

    this.activeMode = mode;
    this.saveState();
    this.startTimer();
  }

  formatTime(): string {
    const minutes = Math.floor(this.timerValue / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (this.timerValue % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  toggleTimer(): void {
    if (this.isRunning) this.stopTimer();
    else this.startTimer();
  }

  startTimer(): void {
    if (this.interval) clearInterval(this.interval);

    this.isRunning = true;
    this.playSound('background');

    this.interval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
      } else {
        this.stopTimer();
        this.playSound('alarm');

        if (this.activeMode === 'focus') {
          this.showPopup = true;
        } else {
          alert(`${this.activeMode === 'focus' ? 'Tempo de foco' : 'Pausa'} acabou!`);
          this.setActiveMode('focus');
        }
      }
      this.saveState();
    }, 1000);
  }

  stopTimer(): void {
    this.isRunning = false;
    clearInterval(this.interval);
    this.stopSound();
    this.saveState();
  }

  resetTimer(): void {
    this.stopTimer();
    const selectedMode = this.modes.find((m) => m.value === this.activeMode);
    if (selectedMode) this.timerValue = selectedMode.time * 60;
    this.saveState();
  }

  openSettings(): void {
    this.isModalOpen = true;
  }

  closeSettings(): void {
    this.isModalOpen = false;
  }

  saveSettings(): void {
    const soundSelect = (document.getElementById('sound-select') as HTMLSelectElement).value;
    const alarmSelect = (document.getElementById('alarm-select') as HTMLSelectElement).value;
    const focusTime = +(document.getElementById('focus-time') as HTMLInputElement).value;
    const shortBreakTime = +(document.getElementById('short-break-time') as HTMLInputElement).value;
    const longBreakTime = +(document.getElementById('long-break-time') as HTMLInputElement).value;

    this.modes = this.modes.map((mode) => {
      if (mode.value === 'focus') mode.time = focusTime || mode.time;
      if (mode.value === 'break') mode.time = shortBreakTime || mode.time;
      if (mode.value === 'pause') mode.time = longBreakTime || mode.time;
      return mode;
    });

    localStorage.setItem('modes', JSON.stringify(this.modes));
    localStorage.setItem('selectedSound', soundSelect);
    localStorage.setItem('selectedAlarm', alarmSelect);

    if (this.activeMode === 'focus') this.timerValue = focusTime * 60;
    if (this.activeMode === 'break') this.timerValue = shortBreakTime * 60;
    if (this.activeMode === 'pause') this.timerValue = longBreakTime * 60;

    this.saveState();
    this.closeSettings();
  }

  playSound(type: 'background' | 'alarm'): void {
    this.stopSound();

    const soundFile = localStorage.getItem(type === 'background' ? 'selectedSound' : 'selectedAlarm');
    if (soundFile && soundFile !== 'none') {
      this.audioPlayer = new Audio(`assets/sounds/${soundFile}.mp3`);
      this.audioPlayer.loop = type === 'background';
      this.audioPlayer.play().catch((error) => console.error(`Error playing ${type} sound:`, error));
    }
  }

  stopSound(): void {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
      this.audioPlayer = null;
    }
  }

  private saveState(): void {
    localStorage.setItem('timerValue', this.timerValue.toString());
    localStorage.setItem('activeMode', this.activeMode);
    localStorage.setItem('isRunning', this.isRunning.toString());
    localStorage.setItem('previousFocusTime', this.previousFocusTime.toString());
  }
}

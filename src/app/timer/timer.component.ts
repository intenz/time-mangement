import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit, OnDestroy {
  @Input() initTitme: number;

  audio = new Audio('/assets/audio/timer.mp3');
  counter: number;
  stopTimerHandler: boolean;
  title: string;
  timer: ReturnType<typeof setInterval>;
  timerTitle: string;
  restTimer: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.router.snapshot.routeConfig.path;
    this.timerTitle = this.router.snapshot.routeConfig.path;
    this.audio.loop = true;
    this.counter = this.initTitme * 60;
    this.restTimer = this.initTitme / 4;
    this.stopTimerHandler = true;
  }

  startTimer() {
    if (this.stopTimerHandler) {
      this.timer = setInterval(() => {
        this.counter -= 1;
        this.stopTimerHandler = false;
        if (this.counter === 0) {
          clearInterval(this.timer);
          this.audio.play()
        }
      }, 1000);
    }
  }

  stopTimer() {
    this.audio.pause();
    clearInterval(this.timer);
    this.stopTimerHandler = true;
    if (this.counter === 0) {
      if (this.timerTitle !== 'Rest') {
        this.timerTitle = 'Rest';
        this.counter = this.restTimer * 60;
      } else {
        this.timerTitle = this.router.snapshot.routeConfig.path;
        this.counter = this.initTitme * 60;
      }
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}

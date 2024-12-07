import { NgModule, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() iconOnly: boolean = false;
  @Input() icon: string = '';
  @Input() size: string = 'large';
  @Input() destructive: boolean = false;
  @Input() onClick: () => void = () => {};
  @Input() texto: string = '';
}

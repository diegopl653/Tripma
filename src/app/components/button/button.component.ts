import { computed, NgModule, OnInit, Signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'small' | 'large' = 'large';
  @Input() disabled: boolean = false;
  @Input() iconOnly: boolean = false;
  @Input() icon: string = '';
  @Input() destructive: boolean = false;
  @Input() onClick: () => void = () => {};
  @Input() texto: string = '';

  buttonClasses = computed(() => ({
    button: true,
    'size-small': this.size === 'small',
    'size-large': this.size === 'large',
    'type-primary': this.type === 'primary' && !this.destructive,
    'type-primary-destructive': this.type === 'primary' && this.destructive,
    'type-secondary': this.type === 'secondary' && !this.destructive,
    'type-secondary-destructive': this.type === 'secondary' && this.destructive,
    'type-tertiary': this.type === 'tertiary' && !this.destructive,
    'type-tertiary-destructive': this.type === 'tertiary' && this.destructive,
    'icon-only': this.iconOnly,
  }));

  ngOnInit() {
    console.log('detalles del componente', this.buttonClasses());
  }
}

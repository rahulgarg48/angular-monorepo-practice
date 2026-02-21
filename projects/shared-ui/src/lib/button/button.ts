import { Component , Input} from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
    @Input() label = 'Default Button!'
}

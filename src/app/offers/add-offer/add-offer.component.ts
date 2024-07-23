import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-offer',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './add-offer.component.html',
  styleUrl: './add-offer.component.css',
})
export class AddOfferComponent {
  count: number = 1;
  zero: boolean = false;
  benefit: boolean = false;
  selectedRegion?: string = '';
  selectedOption?: string;

  addCount(event: Event) {
    event.preventDefault();
    if (this.count >= 9) {
      this.zero = true;
    }
    this.count += 1;
  }
  decreaseCount(event: Event) {
    if (this.count <= 9) {
      this.zero = false;
    }
    event.preventDefault();
    if (this.count > 1) {
      this.count -= 1;
    }
  }
  onSelectChange() {
    this.benefit = !this.benefit;
  }
}

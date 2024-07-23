import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offers-management',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './offers-management.component.html',
  styleUrl: './offers-management.component.css',
})
export class OffersManagementComponent {
  tempIndex: number | null = null;
  filter: boolean = true;
  show: boolean = false;
  offers = [
    {
      title: 'عنوان العرض هنا بالتفصيل',
      regNumber: '1010713454',
      endDate: '15-05-2024',
      entityName: 'تطبيقات السياحة والسفر',
    },
    {
      title: 'عنوان العرض هنا بالتفصيل',
      regNumber: '1010713454',
      endDate: '15-05-2024',
      entityName: 'تطبيقات السياحة والسفر',
    },
    {
      title: 'عنوان العرض هنا بالتفصيل',
      regNumber: '1010713454',
      endDate: '15-05-2024',
      entityName: 'تطبيقات السياحة والسفر',
    },
    {
      title: 'عنوان العرض هنا بالتفصيل',
      regNumber: '1010713454',
      endDate: '15-05-2024',
      entityName: 'تطبيقات السياحة والسفر',
    },
    {
      title: 'عنوان العرض هنا بالتفصيل',
      regNumber: '1010713454',
      endDate: '15-05-2024',
      entityName: 'تطبيقات السياحة والسفر',
    },
    {
      title: 'عنوان العرض هنا بالتفصيل',
      regNumber: '1010713454',
      endDate: '15-05-2024',
      entityName: 'تطبيقات السياحة والسفر',
    },
    {
      title: 'عنوان العرض هنا بالتفصيل',
      regNumber: '1010713454',
      endDate: '15-05-2024',
      entityName: 'تطبيقات السياحة والسفر',
    },
    {
      title: 'عنوان العرض هنا بالتفصيل',
      regNumber: '1010713454',
      endDate: '15-05-2024',
      entityName: 'تطبيقات السياحة والسفر',
    },
  ];
  // Method to hide the delete confirmation modal
  hideDeleteModal(): void {
    this.show = false;
    this.tempIndex = null;
  }
  // Method to show the delete confirmation modal
  showDeleteModal(index: number): void {
    this.show = true;
    this.tempIndex = index;
  }
  // Method to delete an offer
  deleteOffer(): void {
    if (this.tempIndex !== null) {
      this.offers.splice(this.tempIndex, 1);
      this.hideDeleteModal();
    }
  }
  // show filter
  showFilter(): void {
    this.filter = false;
  }
  // hide filter
  hideFilter(event: Event) {
    event.preventDefault();
    this.filter = true;
  }
}

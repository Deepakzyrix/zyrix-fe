import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit(): void {
    // Start the slideshows
    this.startSlideshow(1);
    this.startSlideshow(2);
    this.startSlideshow(3);
  }

  isMenuHidden: boolean = false;
  isFormVisible = false;
  isSuccessMessageVisible = false;
  isPopupVisible: boolean = false;
  popupCategory: string = '';



  openPopup(category: string, event: Event): void {
    event.preventDefault();  // Prevent scrolling to the top
    this.popupCategory = category;  // Set the category of the popup
    this.isPopupVisible = true;     // Show the popup
  }


  closePopup(): void {
    this.isPopupVisible = false;
  }

  toggleMenu(): void {
    this.isMenuHidden = !this.isMenuHidden;
  }

  onSubmission(): void {
    console.log("success");
		this.router.navigate(['/login']);
    console.log("navigated");
	}

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    const form = document.getElementById('contactForm');
    if (form) {
      form.classList.toggle('hidden', !this.isFormVisible);
    }
  }

  handleFormSubmit(event: Event) {
    event.preventDefault();

    // Hide form and show success message
    this.isFormVisible = false;
    this.isSuccessMessageVisible = true;

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
      form.classList.add('hidden');
    }
    if (successMessage) {
      successMessage.classList.remove('hidden');

      // Hide success message after 5 seconds
      setTimeout(() => {
        if (successMessage) {
          successMessage.classList.add('hidden');
        }
        this.isSuccessMessageVisible = false;
      }, 5000);
    }
  }

  product1Images: string[] = ['assets/images/pic1.png', 'assets/images/pic2.png', 'assets/images/pic3.jpg'];
  product2Images: string[] = ['assets/images/pic4.png', 'assets/images/pic5.png', 'assets/images/pic6.png'];
  product3Images: string[] = ['assets/images/pic7.png', 'assets/images/pic8.png', 'assets/images/pic9.png'];

  // Index trackers for each product
  currentIndex1: number = 0;
  currentIndex2: number = 0;
  currentIndex3: number = 0;


  startSlideshow(productNumber: number): void {
    setInterval(() => {
      switch (productNumber) {
        case 1:
          this.currentIndex1 = (this.currentIndex1 + 1) % this.product1Images.length;
          break;
        case 2:
          this.currentIndex2 = (this.currentIndex2 + 1) % this.product2Images.length;
          break;
        case 3:
          this.currentIndex3 = (this.currentIndex3 + 1) % this.product3Images.length;
          break;
        default:
          break;
      }
    }, 2000); // Change slide every 2 seconds
  }



}

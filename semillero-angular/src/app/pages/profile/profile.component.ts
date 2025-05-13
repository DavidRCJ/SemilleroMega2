import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTANTE

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule], // ✅ Agregado aquí
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fullName = '';
  userName = '';
  email = '';
  phoneNumber = '';
  about = '';
  profileImage: string | null = null;

  editMode = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const savedData = localStorage.getItem('userProfile');
    if (savedData) {
      const profile = JSON.parse(savedData);
      this.fullName = profile.fullName || '';
      this.userName = profile.userName || '';
      this.email = profile.email || '';
      this.phoneNumber = profile.phoneNumber || '';
      this.about = profile.about || '';
      this.editMode = false;
    }

    
    const savedImg = localStorage.getItem('profileImage');
    if (savedImg) {
      this.profileImage = savedImg;
    }
  }

  onGuardar(): void {
    const profile = {
      fullName: this.fullName.trim(),
      userName: this.userName.trim(),
      email: this.email.trim(),
      phoneNumber: this.phoneNumber.trim(),
      about: this.about.trim()
    };

    if (!this.validateFields(profile)) return;
  
    localStorage.setItem('userProfile', JSON.stringify(profile));
    this.editMode = false;
    alert('¡Perfil guardado!');
  }

  onEditar(): void {
    this.editMode = true;
  }

  onSalir(): void {
    localStorage.removeItem('userProfile');
    this.router.navigate(['/home']);
  }

  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result as string;
        localStorage.setItem('profileImage', this.profileImage);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Seleccioná una imagen válida.');
    }
  }

  private validateFields(data: any): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (!data.fullName || !data.userName || !data.email || !data.phoneNumber) {
      alert('Todos los campos deben estar completos.');
      return false;
    }

    if (!emailRegex.test(data.email)) {
      alert('Email inválido.');
      return false;
    }

    if (!phoneRegex.test(data.phoneNumber)) {
      alert('El número de teléfono debe contener solo dígitos.');
      return false;
    }

    return true;
  }
}

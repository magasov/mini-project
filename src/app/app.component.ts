import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgModel, FormsModule } from '@angular/forms';
import { BasketComponent } from "./basket/basket.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLinkActive, RouterLink, BasketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Заголовок для названия проекта';
  array = ["Maga", "Musa", "Chokopay"]
  style = 'color: blue'
  style2 = 'color: green'
  valueInp = ""
  userName = ""
  userAge = ""
  userAvatar = "https://avatars.mds.yandex.net/i?id=93932abfd430c7aab32a3d45806ea6e6d4d0523a-4944707-images-thumbs&n=13"
  error = ""


  users: any = [
    {
      id: 1,
      name: "Maga",
      age: 18,
      avatar: "https://novgorodskij-r49.gosweb.gosuslugi.ru/netcat_files/9/260/user_test.png"
    },
    {
      id: 2,
      name: "Musa",
      age: 17,
      avatar: "https://img5tv.cdnvideo.ru/webp/shared/files/201806/1_756995.jpg"
    },
    {
      id: 3,
      name: "Chokopay",
      age: 78,
      avatar: "https://avatars.mds.yandex.net/get-mpic/466729/img_id221798833633665766.jpeg/9hq"
    }
  ]

  addUser = ()=>{
    if(this.userName && this.userAge){
      let newUser = {
        id: Date.now,
        name: this.userName,
        age: this.userAge,
        avatar: this.userAvatar
      }
      this.users.push(newUser)
      this.userName = ""
      this.userAge = ""
      this.userAvatar = ""
    }else{
      this.error = "Нужно заполнить все поля"
    }

  }

  editDateUser = (id: number) =>{

    this.users.find((user: any) =>{
      if(user.id == id){
        user.name = this.userName
        user.age = this.userAge
        user.userEditKey = !user.userEditKey
        return user
      }
    })

  }

  removeUser = (id: number) => {

    this.users = this.users.filter((user: any) => user.id !== id)
  }


}

import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  actionMethod(event: any) {
    console.log(event.target.enabled)
    event.target.enabled = false;
    setTimeout(() => {
      event.target.enabled = true;
    }, 3000);
  }
}

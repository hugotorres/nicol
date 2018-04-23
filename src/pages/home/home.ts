import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  title = "Chat in whatsapp";
  phoneNumber = { countrycode: "57", number: "" };

  callNumber = function() {
    var link = document.createElement("a");
    link.href ="tel:"+this.phoneNumber.number;
    link.target = "_blank";
    link.click();
  };
  chatnumber = function() {
    var link = document.createElement("a");
    link.href =
      "https://api.whatsapp.com/send?phone=" +
      this.phoneNumber.countrycode +
      this.phoneNumber.number;
    link.target = "_blank";
    link.click();
  };

  constructor(public navCtrl: NavController) {}
}

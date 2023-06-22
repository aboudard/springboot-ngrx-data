import { NgModule } from "@angular/core";
import { CalculePipe } from "./calcule.pipe";

@NgModule({
  declarations: [CalculePipe],
  exports: [CalculePipe],
})
export class CalculeModule {}

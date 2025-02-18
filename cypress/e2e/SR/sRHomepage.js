import { heroComponent } from "./heroComponent"
export class sRHomepage {
    heroComponent() {
        return new heroComponent(cy.get(heroComponent.comp_sel))
    }
}
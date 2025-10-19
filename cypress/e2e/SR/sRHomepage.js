import { heroComponent } from "./heroComponent"
export class sRHomepage {
    heroComponent() {
        return heroComponent(cy.get(heroComponent.comp_sel))
    }
}
export class heroComponent {
    static comp_sel = '.showcase__hero'
    constructor(element) {
        this.element = element
    }
    // get cardTitle() {
    //     return this.element.find('.card__title')
    // }
    get cardTitle() {
        return this.element.find('.card__title').invoke('text').then(text => text.trim())
    }
}

export default new heroComponent()
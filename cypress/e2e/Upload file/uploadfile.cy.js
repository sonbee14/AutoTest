/// <reference types = "Cypress" />
import 'cypress-file-upload'
describe('Upload file', function () {
    it('Upload a file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('NJ_BubbleGum_39.jpg')
        cy.get('#file-submit').click()
    })
    it('Upload & rename a file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'NJ_BubbleGum_39.jpg', fileName: 'Hanni.jpg' })
        cy.get('#file-submit').click()
    })
    it('Drag & drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('NJ_BubbleGum_39.jpg', { subjectType: 'drag-n-drop' })
        //cy.get('#file-submit').click()
    })
    it('Upload multiple files', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['NJ_BubbleGum_39.jpg', 'NJ_HowSweet_34.jpg'])
        //cy.get('#file-submit').click()
    })
})
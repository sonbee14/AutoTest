/// <reference types = "Cypress" />

describe('api', function () {
    it('test API: Get', () => {
        cy.request({
            url: Cypress.env('url'),
            method: 'GET'
        }).then(response => {
            let { status, body } = response
            //destructuring assignment: lấy các thuộc tính body và status từ đối tượng response và gán chúng cho các biến riêng biệt cùng tên
            //cy.log(JSON.stringify(response.body))
            // expect(status).to.eq(200)
            // expect(body.length).to.eq(100)
            let randomIndex = Math.random() * body.length
            let roundRandomIndex = Math.floor(randomIndex)
            let random = body[roundRandomIndex]
            verify('id', random.id) 
        })
        let verify = (name, data) => {
            if (!data) {
                expect(true).to.eq(false, `${name} is empty`)
            } else {
                cy.log(`${name} have value`)
            }

        }
    })
    it('test API: Post', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        let header = {
            'Content-type': 'application/json; charset=UTF-8'
        }
        let requestBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        let requestPost = {
            url: url,
            method: 'POST',
            headers: header,
            body: requestBody
        }
        cy.request(requestPost).then(res => {
            cy.log(JSON.stringify(res.body))
            let { title, id, userId, body } = res.body
            expect(title).to.eq(requestBody.title, 'title is not correct')
            expect(id).to.eq(101, 'id is not correct')
            expect(userId).to.eq(requestBody.userId, 'userId is not correct')
            expect(body).to.eq(requestBody.body, 'body is not correct')
        })
    })
    it('cach su dung async', async () => {
        let response = await cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        })
        expect(response.status).to.eq(200)
        expect(response.body.length).to.eq(100)
    })

    it('CRUD', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        let header = {
            'Content-type': 'application/json; charset=UTF-8'
        }
        let requestPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        let requestUpdateBody = {
            title: 'Son Bee',
            body: 'bar',
            userId: 1
        }
        cy.request({
            method: 'POST',
            url: url,
            headers: header,
            body: requestPostBody
        }).then(res => {
            cy.request({
                method: 'GET',
                url: url + '/' + (Number(res.body.id) - 1).toString()
            }).then(res => {
                cy.log(JSON.stringify(res.body))
                cy.request({
                    method: 'PUT',
                    url: url + '/' + res.body.id,
                    body: requestUpdateBody
                }).then(res => {
                    cy.log(JSON.stringify(res.body))
                    cy.request({
                        method: 'DELETE',
                        url: url + '/' + res.body.id
                    })
                })
            })
        })
    })
})
export function getLookupColumnValue(lookupName, label) {
    const lookup = lookupName.find((lookup) => 
        lookup.label === label ||
        (lookup.label.startsWith('lookup.') && t(lookup.label)) === label)
    return lookup !== undefined ? lookup.value : ''
};

export const noticeStatus = [
    { value: '1', label: 'Receiving' },
    { value: '2', label: 'Accepting' },
    { value: '3', label: 'Accepted' },
    { value: '4', label: 'Notice Completed' },
    { value: '5', label: 'Notice Discarded' }
];

export const requestStatusColumn = [
    { value: '1', label: 'Unprocessed' },
    { value: '2', label: 'No Action Needed' },
    { value: '3', label: 'Pre-Request' },
    { value: '4', label: 'Requesting' },
    { value: '5', label: 'Request Completed' },
    { value: '6', label: 'Request Cancelled' },
    { value: '7', label: 'Request Not Required' },
    { value: '8', label: 'Notice Discarded' },
];

export const clientColumn = [
    { value: 'cl00001', label: '【TMNF】Tokio Marine NF' },
    { value: 'cl00002', label: '【TMNF】 Tokio Marine NF' },
    { value: 'cl00003', label: '【NFM】 Nisshin Fire' },
    { value: 'cl00004', label: '【DHT】 DAIHATSU' },
    { value: 'cl00005', label: '【BMW】BMW' },
    { value: 'cl00006', label: '【SBR】 SUBARU' },
    { value: 'cl00007', label: '【SBR】 SUBARU' },
    { value: 'cl00008', label: '【BYD】 BYD' },
    { value: 'cl00009', label: '【BYD】 BYD' },
    { value: 'cl00010', label: '【BYD】 BYD' },
    { value: 'cl00011', label: '【NFS】 Nissan Financial Services' },
    { value: 'cl00012', label: '【NFS】 Nissan Financial Services' },
    { value: 'cl00013', label: '【XXX】 XCompany' },
    { value: 'cl00014', label: '【SKH】 Sekisui House' },
    { value: 'cl00015', label: '【ATJ】 AUTHENTIC JAPAN' },
    { value: 'cl00016', label: '【GMO】 GMO Global Sign' },
    { value: 'cl00017', label: '【JVC】 JVC KENWOOD' },
    { value: 'cl00018', label: '【PAD】 Premier Aid' }
];

export const lineColumn = [
    { value: 'cl00001', label: 'DAP - Pioneer' },
    { value: 2, label: 'DAP - DENSO TEN' },
    { value: 3, label: 'Nisshin Notice' },
    { value: 4, label: 'DAIHATSU CONNECT' },
    { value: 'cl00005', label: 'eCall' },
    { value: 6, label: 'eCall' },
    { value: 7, label: 'bCall' },
    { value: 8, label: 'eCall' },
    { value: 9, label: 'bCall' },
    { value: 10, label: 'iCall' },
    { value: 11, label: 'Nissan Biz Connect' },
    { value: 12, label: 'Nissan Telemarketing' },
    { value: 13, label: 'Notice-Pdrive' },
    { value: 14, label: 'Emergent Injury' },
    { value: 15, label: 'Coco Heli' },
    { value: 16, label: 'GMO Notice' },
    { value: 17, label: 'JVC Notice' },
    { value: 18, label: 'Test' }
];
describe('1001', () => {
    it('1001', () => {
        cy.request({
            method: 'POST',
            url: 'https://dev.pamnas2.jp/wiki/api/login',
            body: {
                userId: 'son',
                password: 'Itadmin@0987654321'
            }
        })
            .then(response => {
                // Object.values(response.body).forEach(value => {
                //     cy.log(value)
                // })
                const jwtToken = response.body.jwtToken
                cy.request({
                    method: 'POST',
                    url: 'https://dev.pamnas2.jp/wiki/api/notice/searchAll',
                    headers: {
                        'Authorization': 'Bearer ' + jwtToken,
                    },
                    body:
                    {
                        "listClientSelection": [
                            "vehicle",
                            "home"
                        ],
                        "listClient": [
                            "cl00004",
                            "cl00009"
                        ],
                        "receivedPhone": "",
                        "receivedTime": "2024/09/24 00:00:00",
                        "receivedTimeTo": "2024/10/01 23:59:59",
                        "categoryOfAccident": "",
                        "requestStatus": "",
                        "checkStatus": "",
                        "receivedNo": "",
                        "receiver": "",
                        "requester": "",
                        "systemIntegration": "",
                        "evaluatedKeyClients": [],
                        "numberPlate": "",
                        "vehicleIssuingOffice": "",
                        "vehicleClassCode": "",
                        "vehicleChar": "",
                        "vehicleNumberFourDigit": "",
                        "accidentLocation": "",
                        "roadService": "",
                        "impactLevel": "",
                        "edgeId": "",
                        "buildingId": "",
                        "buildingAddress": "",
                        "subLine": ""
                    }
                }).then(response1 => {
                 
                            cy.visit('https://dev.pamnas2.jp/login')
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                return false;
                            });
                            cy.viewport(1280, 720)
                            cy.get('.ant-select-selection-item').click()
                            cy.get('[aria-selected="false"] > .ant-select-item-option-content > .img-flag').click()
                            cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > [style="display: flex;"] > .ant-input-affix-wrapper > .ant-input').type('son')
                            cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > [style="display: flex;"] > .ant-input-affix-wrapper > .ant-input').type('Itadmin@0987654321')
                            cy.get(':nth-child(1) > .ant-btn').click()
                            cy.wait(2000)
                            cy.get(':nth-child(2) > .tab-nav > div > a').click()
                            cy.get('.ant-form-item-required-mark-optional > .hyperlink').click()
                            cy.get('#rc-tabs-1-tab-make').click()
                            cy.get('#rc-tabs-1-panel-make > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #form_item_clientLineCd > :nth-child(1) > :nth-child(1) > .ant-row > :nth-child(1) > .ant-checkbox-wrapper > :nth-child(2)').click()
                            cy.get('#rc-tabs-1-tab-house').click()
                            cy.get('#rc-tabs-1-panel-house > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #form_item_clientLineCd > :nth-child(1) > .ant-col-6 > .ant-row > .ant-col > .ant-checkbox-wrapper > :nth-child(2)').click()
                            cy.get('.ant-modal-body > :nth-child(1) > .ant-form > .actions > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click()
                            cy.wait(1000)
                            cy.get('[type="submit"] > span').click()



                            

                    // expect(response1.body.results[0]).to.have.property('id', 'e8657b02-150e-49a0-b4a0-46d8f8f637e8')
                    // expect(response1.body.results[0]).to.have.property('accidentId', null)
                    //expect(response1.body.results[0].generalInfo).to.have.property('client', '')

                })


            })

































    })
})
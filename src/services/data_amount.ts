// the axios instance and types
import http from './api'

async function dataAmountCheck(id: string) {
    return await http({
        url: 'api/data_amount/check',
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        data: {
            unique_id: id
        }
    })
}

export { dataAmountCheck }

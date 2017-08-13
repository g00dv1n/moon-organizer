
class WayForPay {
    constructor (merchantAccount, merchantPassword) {

        if (typeof merchantAccount !== 'string' || !merchantAccount) {
            throw new Error('Merchant account must be string and not empty')
        }

        if (typeof merchantPassword !== 'string' || !merchantAccount) {
            throw new Error('Merchant password must be string and not empty')
        }

        /*
            Define class fiedls
        */
        this.PURCHASE_URL = 'https://secure.wayforpay.com/pay'
        this.API_URL = 'https://api.wayforpay.com/api'

        this.SIGNAUTRE_FIELDS = [
            'merchantAccount',
            'merchantDomainName',
            'merchantTransactionSecureType',
            'orderReference',
            'orderDate',
            'amount',
            'currency',
            'productName',
            'productCount',
            'productPrice'
        ]
        /*
            end define 
        */

        this._merchantAccount = merchantAccount
        this._merchantPassword = merchantPassword
    }

    buildForm(fiedls) {

    }

    _calculateSignature(fullFields) {
        const concatStr = this.SIGNAUTRE_FIELDS
            .map(field => fullFields[field])
            .join(';')

    }
    _getFullFields(fiedls) {
        return Object.assign({}, fiedls, {
            merchantAccount: this._merchantAccount,
            merchantTransactionSecureType: 'AUTO',
            transactionType: 'PURCHASE',
            authorizationType: 'SimpleSignature'
        })
    }
}
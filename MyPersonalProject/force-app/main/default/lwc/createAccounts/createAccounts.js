import { LightningElement, track } from 'lwc';
import createAccountRecord from '@salesforce/apex/checkCRUDForLWC.createAccountRecord';
export default class CreateAccounts extends LightningElement {
    @track accountName;
    @track createdAccountId;
    @track error;

    handleOnChange(event) {
        this.accountName = event.target.value;
    }
    handleCreateAccount() {
        createAccountRecord({ accName: this.accountName })
            .then(result => {
                if (result) {
                    this.createdAccountId = result.Id;
                    this.error = undefined;
                } else {
                    this.error = 'You dont have permission to create record';
                }
            })
            .catch(error => {
                this.error = error;
                this.createdAccountId = undefined;
            });
    }
}
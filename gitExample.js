import { LightningElement } from 'lwc';

export default class GitExample extends LightningElement {

    handleSave()
    {
        console.log('This is first line of handle method in child branch1');
        console.log('child method has been modified by me');

    }
  
}
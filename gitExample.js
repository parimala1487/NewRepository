import { LightningElement } from 'lwc';

export default class GitExample extends LightningElement {



    recordData;
   dataRecorded;
    handleSave()
    {
        console.log('This is first line of handle method in child branch1');
        console.log('Added code by child branch2',recordData);
        console.log('child method has been modified by me',this.dataRecorded);
    }
  
}
```javascript

//Component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


    constructor(private modalCtrl: NgxModalController) {}

    Open() {
        const modal = this.modalCtrl.showModal(AppComponent);

        //optional promise to retrive data from modal
        modal.onDismiss.then((data) => {
            //data returned from modal if any.
        })
    }
}

//MODAL (Any component)

@Component({
  selector: 'info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {

    //ViewController allows to close the modal (optional)
    //NavParams are to retive the data passed to the modal (optional)
    constructor(private ViewCtrl: ViewController, private Params: NavParams) {}

    Close(){

        //dismiss the modal with the ViewController
        this.ViewCtrl.dismiss();

        //pass data back to onDismiss callback
        //this.ViewCtrl.dismiss({ hello : "world"});
    }

}
```

## API
- NgxModalServiceModule
- NgxModalController
- NgxModalOptions
- NgxModalResponse
- ViewController
- NavParams



### NgxModalServiceModule
```javascript
import { NgxModalServiceModule } from 'ngx-modal-service';

@NgModule({
  imports: [
    NgxModalServiceModule
  ]
})
export class AppModule { }
```

### NgxModalController, NgxModalOptions

```javascript    
    let modal = this.modalCtrl.showModal(Component, Data, Options);

    modal.onDismiss.then((ReturnData) => {
      console.log(data);
    });
```

- Component: This can be any registered component.
- Data: Has to be any Object. (Optional)
- Options: Has to follow NgxModalOptions
```javascript    
    export interface NgxModalOptions {
        height?: number; // modals height defaults to 500 (px)
        maxHeight?: number; // modals max-height no default
        width?: number; // modals width defaults to 500 (px)
        index?: number; //z-index, auto increments per modal by deafault.
        backdrop?: boolean; //Backdrop present default true
        backdropDismiss?: boolean; //modal dismiss on backdrop click default true
        top?: number, //modal top postion default centers
        bottom?: number, //modal bottom postion default centers
        left?: number, //modal left postion default centers
        right?: number //modal right postion default centers
        borderColor?: string; //modals border-color default black
    }

```
- onDismiss: Event fired when ViewController dismiss is call on the targeted modal.
- ReturnData: can be of type NgxModalResponse (Optional)
```javascript    
    export interface NgxModalResponse {
        success: boolean; // set to false is closed by modal.
        data: any; // data returned from modal
    }
```

### ViewController, NavParams


Both of these are optional.

```javascript    
    constructor(private ViewCtrl: ViewController, private Params: NavParams) {}

    Close() {
    
        let Data: NgxModalResponse =  {
            success: true, // useful to see modal confirm or cancel is pressed.
            data: {hello:"world"}
        }

        this.ViewCtrl.dismiss(Data);

        //or if you have no data to pass back
        //this.ViewCtrl.dismiss();
    }

    Log(){
        
        this.Params // this Data from this.modalCtrl.showModal(Component, Data, Options);
    }
```


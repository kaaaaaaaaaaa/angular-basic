import { Component, OnInit   } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent implements OnInit  {

  scanSub: any;
  qrText: string;
  //
  qrData = null;
  createdCode = null;

  constructor(public platform: Platform, private qrScanner: QRScanner) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName('body')[0].style.opacity = '1';
      this.scanSub.unsubscribe();
    });
  }
  ngOnInit(): void {
  }

  startScanning() {
    // Optionally request the permission early
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          this.scanSub = document.getElementsByTagName(
            'body'
          )[0].style.opacity = '0';
          this.scanSub = this.qrScanner.scan().subscribe(
            (textFound: string) => {
              document.getElementsByTagName('body')[0].style.opacity = '1';
              this.qrScanner.hide();
              this.scanSub.unsubscribe();

              this.qrText = textFound;
            },
            (err) => {
              alert(JSON.stringify(err));
            }
          );
        } else if (status.denied) {
        } else {
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  //
  createCode() {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
  }
}

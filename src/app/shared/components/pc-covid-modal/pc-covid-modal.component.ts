import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc-covid-modal',
  template: `<!-- Modal - PC-Covid -->
  <div class="modal fade" id="pcCovidBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="pcCovidBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content ">
        <div class="modal-header">
          <h5 class="modal-title" id="pcCovidBackdropLabel">Tải app PC-Covid</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="android-tab-pc-covid" data-bs-toggle="tab"
                data-bs-target="#androidPcCovid" type="button" role="tab" aria-controls="androidPcCovid"
                aria-selected="true">Android</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="ios-tab-pc-covid" data-bs-toggle="tab" data-bs-target="#iosPcCovid"
                type="button" role="tab" aria-controls="iosPcCovid" aria-selected="false">IOS</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab-pc-covid" data-bs-toggle="tab" data-bs-target="#contactPcCovid"
                type="button" role="tab" aria-controls="contactPcCovid" aria-selected="false">Đường Dây Nóng Bộ Y
                Tế</button>
            </li>
          </ul>
          <div class="tab-content text-center" id="myTabContent">
            <div class="tab-pane fade show active" id="androidPcCovid" role="tabpanel"
              aria-labelledby="android-tab-pc-covid">
              <br>
              <ngx-qrcode-styling
                [template]="'sunflower'"
                [data]="'https://play.google.com/store/apps/details?id=com.mic.bluezone'"
                [width]="300"
                [height]="300"
                [margin]="0"
                [image]="'assets/images/pc-covid.png'"
                [frameOptions]="{style: 'style80', height: 300, width: 300, x: 50, y: 50}"
              ></ngx-qrcode-styling>
              <br>
              <p class="m-0 p-0">PC-Covid là Ứng dụng phòng, chống dịch Covid-19 Quốc gia.</p>
              <p class="m-0 p-0">Địa chỉ trang web giới thiệu: <a href="www.pccovid.gov.vn" target="_blank" class="text-primary">www.pccovid.gov.vn</a></p>
              <p class="m-0 p-0">Cơ quan chủ trì: Bộ Y tế, Bộ Công an, Bộ Thông tin và Truyền thông.</p>
            </div>

            <div class="tab-pane fade" id="iosPcCovid" role="tabpanel" aria-labelledby="ios-tab-pc-covid">
              <br>
              <ngx-qrcode-styling
                [template]="'sunflower'"
                [data]="'https://apps.apple.com/vn/app/bluezone/id1508062685'"
                [width]="300"
                [height]="300"
                [image]="'assets/images/pc-covid.png'"
                [frameOptions]="{style: 'style63', height: 300, width: 300, x: 50, y: 50}"
              ></ngx-qrcode-styling>
              <br>
              <p class="m-0 p-0">PC-Covid là Ứng dụng phòng, chống dịch Covid-19 Quốc gia.</p>
              <p class="m-0 p-0">Địa chỉ trang web giới thiệu: <a href="www.pccovid.gov.vn" target="_blank" class="text-primary">www.pccovid.gov.vn</a></p>
              <p class="m-0 p-0">Cơ quan chủ trì: Bộ Y tế, Bộ Công an, Bộ Thông tin và Truyền thông.</p>
            </div>

            <div class="tab-pane fade" id="contactPcCovid" role="tabpanel" aria-labelledby="contact-tab-pc-covid">
              <div class="text-start p-4">
                <h6 class="text-danger">ĐƯỜNG DÂY NÓNG BỘ Y TẾ</h6>
                <p>- Điện thoại: <b><a href="callto:19009095" class="text-dark">1900.9095</a></b></p>
                <p>- Email: <b><a href="mailto:duongdaynong@moh.gov.vn" class="text-dark">duongdaynong@moh.gov.vn</a></b></p>
                <h6 class="text-danger">THANH TRA BỘ</h6>
                <p>- Điện thoại: <b><a href="callto:0462732160" class="text-dark">04.62732160</a></b></p>
                <p class="mb-0">- Email: <b><a href="mailto:thanhtra@moh.gov.vn" class="text-dark">thanhtra@moh.gov.vn</a></b></p>
              </div>
              <p class="m-0 p-0">PC-Covid là Ứng dụng phòng, chống dịch Covid-19 Quốc gia.</p>
              <p class="m-0 p-0">Địa chỉ trang web giới thiệu: <a href="www.pccovid.gov.vn" target="_blank" class="text-primary">www.pccovid.gov.vn</a></p>
              <p class="m-0 p-0">Cơ quan chủ trì: Bộ Y tế, Bộ Công an, Bộ Thông tin và Truyền thông.</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  </div>`
})
export class PcCovidModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

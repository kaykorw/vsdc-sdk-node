export interface Customer {
  resultCd: string;
  resultMsg: string;
  resultDt: string;
  data: {
    custList: [
      {
        tin: string;
        taxprNm: string;
        taxprSttsCd: string;
        prvncNm: string;
        dstrtNm: string;
        sctrNm: string;
        locDesc: string;
      }
    ];
  };
}

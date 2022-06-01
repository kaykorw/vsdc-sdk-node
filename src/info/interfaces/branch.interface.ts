export interface Branch {
  resultCd: string;
  resultMsg: string;
  resultDt: string;
  data: {
    bhfList: [
      {
        tin: string;
        bhfId: string;
        bhfNm: string;
        bhfSttsCd: string;
        prvncNm: string;
        dstrtNm: string;
        sctrNm: string;
        locDesc: string;
        mgrNm: string;
        mgrTelNo: string;
        mgrEmail: string;
        hqYn: string;
      }
    ];
  };
}

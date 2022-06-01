export interface InitialInfo {
  resultCd: string;
  resultMsg: string;
  resultDt: string;
  data: {
    info: {
      tin: string;
      taxprNm: string;
      bsnsActv: string;
      bhfId: string;
      bhfNm: string;
      bhfOpenDt: string;
      prvncNm: string;
      dstrtNm: string;
      sctrNm: string;
      locDesc: string;
      hqYn: string;
      mgrNm: string;
      mgrTelNo: string;
      mgrEmail: string;
      sdcId: string;
      mrcNo: string;
      dvcId: string;
      intrlKey: string;
      signKey: string;
      cmcKey: string;
      lastPchsInvcNo: number;
      lastSaleRcptNo: number;
      lastInvcNo: number;
      lastSaleInvcNo: number;
      lastTrainInvcNo: number;
      lastProfrmInvcNo: number;
      lastCopyInvcNo: number;
    };
  };
}

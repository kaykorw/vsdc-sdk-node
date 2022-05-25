export interface Notice {
  resultCd: string;
  resultMsg: string;
  resultDt: string;
  data: {
    noticeList: [
      {
        noticeNo: number;
        title: string;
        cont: string;
        dtlUrl: string;
        regrNm: string;
        regDt: string;
      }
    ];
  };
}

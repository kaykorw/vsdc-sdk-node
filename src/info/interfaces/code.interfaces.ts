export interface Code {
  resultCd: string;
  resultMsg: string;
  resultDt: string;
  data: {
    clsList: [
      {
        cdCls: string;
        cdClsNm: string;
        cdClsDesc: null;
        useYn: string;
        userDfnNm1: string;
        userDfnNm2: null;
        userDfnNm3: null;
        dtlList: [
          {
            cd: string;
            cdNm: string;
            cdDesc: string;
            useYn: string;
            srtOrd: number;
            userDfnCd1: string;
            userDfnCd2: null;
            userDfnCd3: null;
          }
        ];
      }
    ];
  };
}

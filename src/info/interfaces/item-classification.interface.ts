export interface ItemClassification {
  resultCd: string;
  resultMsg: string;
  resultDt: string;
  data: {
    itemClsList: [
      {
        itemClsCd: string;
        itemClsNm: string;
        itemClsLvl: number;
        taxTyCd: string;
        mjrTgYn: string;
        useYn: string;
      }
    ];
  };
}

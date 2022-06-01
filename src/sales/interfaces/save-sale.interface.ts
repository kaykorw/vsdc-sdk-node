export interface SaveSale {
  tin: string;
  bhfId: string;
  invcNo: number;
  orgInvcNo: number;
  custTin?: string;
  custNm?: string;
  salesTyCd: string;
  rcptTyCd: string;
  pmtTyCd?: string;
  salesSttsCd: string;
  cfmDt: string;
  salesDt: string;
  stockRlsDt?: string;
  cnclReqDt?: string;
  cnclDt?: string;
  rfdDt?: string;
  rfdRsnCd?: string;
  totItemCnt: number;
  taxblAmtA: number;
  taxblAmtB: number;
  taxblAmtC: number;
  taxblAmtD: number;
  taxRtA: number;
  taxRtB: number;
  taxRtC: number;
  taxRtD: number;
  taxAmtA: number;
  taxAmtB: number;
  taxAmtC: number;
  taxAmtD: number;
  totTaxblAmt: number;
  totTaxAmt: number;
  totAmt: number;
  prchrAcptcYn: string;
  remark?: string;
  regrId: string;
  regrNm: string;
  modrId: string;
  modrNm: string;
  receipt: {
    custTin?: string;
    custMblNo?: string;
    rptNo: number;
    trdeNm?: string;
    adrs?: string;
    topMsg?: string;
    btmMsg?: string;
    prchrAcptcYn: string;
  };
  itemList: [
    {
      itemSeq: number;
      itemClsCd?: string;
      itemCd: string;
      itemNm: string;
      bcd?: string;
      pkgUnitCd: string;
      pkg: number;
      qtyUnitCd: string;
      qty: number;
      prc: number;
      splyAmt: number;
      dcRt: number;
      dcAmt: number;
      isrccCd?: string;
      isrccNm?: string;
      isrcRt?: number;
      isrcAmt?: number;
      taxTyCd: string;
      taxblAmt: number;
      taxAmt: number;
      totAmt: number;
    }
  ];
}

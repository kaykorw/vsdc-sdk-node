export interface SaveStock {
  tin: string;
  bhfId: string;
  sarNo: number;
  orgSarNo: number;
  regTyCd: string;
  custTin?: string;
  custNm?: string;
  custBhfId?: string;
  sarTyCd: string;
  ocrnDt: string;
  totItemCnt: number;
  totTaxblAmt: number;
  totTaxAmt: number;
  totAmt: number;
  remark?: string;
  regrId: string;
  regrNm: string;
  modrNm: string;
  modrId: string;
  itemList: [
    {
      itemSeq: number;
      itemCd?: string;
      itemClsCd: string;
      itemNm: string;
      bcd?: string;
      pkgUnitCd: string;
      pkg: number;
      qtyUnitCd: string;
      qty: number;
      itemExprDt?: string;
      prc: number;
      splyAmt: number;
      totDcAmt: number;
      taxblAmt: number;
      taxTyCd: string;
      taxAmt: number;
      totAmt: number;
    }
  ];
}

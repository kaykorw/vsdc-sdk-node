export interface SaveItem {
  tin: string;
  bhfId: string;
  itemCd: string;
  itemClsCd: string;
  itemTyCd: string;
  itemNm: string;
  itemStdNm: string;
  orgnNatCd: string;
  pkgUnitCd: string;
  qtyUnitCd: string;
  taxTyCd: string;
  btchNo?: string;
  bcd?: string;
  dftPrc: number;
  grpPrcL1?: number;
  grpPrcL2?: number;
  grpPrcL3?: number;
  grpPrcL4?: number;
  grpPrcL5?: number;
  addInfo?: string;
  sftyQty?: number;
  isrcAplcbYn: string;
  useYn: string;
  regrNm: string;
  regrId: string;
  modrNm: string;
  modrId: string;
}
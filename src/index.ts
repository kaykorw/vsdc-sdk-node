export class Vsdc {
  a: number;
  b: number;

  constructor(a?: number, b?: number) {
    this.a = a ?? 0;
    this.b = b ?? 0;
  }

  ping() {
    return 'ping!';
  }
}

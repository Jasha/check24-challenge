export class BankModel {
  constructor(public id: string,
              public bank: string,
              public flags: Array<string>,
              public monthlyRate: number,
              public interestMin: number,
              public interestMax: number,
              public totalLoanAmount: number) {
  }
}

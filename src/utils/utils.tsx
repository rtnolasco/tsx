export default interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

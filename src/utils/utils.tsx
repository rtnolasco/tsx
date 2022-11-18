export default interface IState {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

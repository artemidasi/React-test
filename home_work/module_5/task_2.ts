type TWithData = {
  howIDoIt: string;
  simeArray: [string, number];
}
interface IMyHometask {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: TWithData[];
}

const MyHometask: IMyHometask = {

  howIDoIt: "I Do It Wel",

  simeArray: ["string one", "string two", 42],

  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}


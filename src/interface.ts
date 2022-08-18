export interface IPeople{
  Gender:string;
  HeightCm:number;
  WeightKg:number;
}

export interface IPeopleBmi extends IPeople{
  BmiCategory:string;
  HealthRisk:string;
}
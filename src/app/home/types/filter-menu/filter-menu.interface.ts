export interface Filters {
  productTypes: {
    wholeChilies: boolean;
    groundSpices: boolean;
    scorchingSauces: boolean;
    sadisticBlends: boolean;
    infernalExtracts: boolean;
  };
  agonyLevels: {
    warmingUp: boolean;
    seriousHeat: boolean;
    ringOfFire: boolean;
    legalWeapon: boolean;
  };
}
export interface ActiveFilters {
  products: string[];
  agony: string[];
}

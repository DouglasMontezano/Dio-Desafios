
let poreco_comb = 4.8;
let gas_med_km = 14;
let dist_tot = 180;

let valor_tot = (dist_tot / gas_med_km) * poreco_comb;

console.log("R$ " + valor_tot.toFixed(2));
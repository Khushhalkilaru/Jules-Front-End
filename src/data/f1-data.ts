export interface PowerUnitSpec {
  component: string;
  description: string;
  stats: Record<string, string>;
}

export interface Team {
  id: string;
  name: string;
  car: string;
  drivers: string[];
  color: string;
  secondaryColor: string;
  image: string; // Placeholder for now
}

export const POWER_UNIT_SPECS: PowerUnitSpec[] = [
  {
    component: "Internal Combustion Engine (ICE)",
    description: "The heart of the power unit, a 1.6-litre V6 turbocharged engine.",
    stats: {
      "Displacement": "1.6 Litres",
      "Cylinders": "Six",
      "Bank Angle": "90 Degrees",
      "Valves": "24",
      "Max RPM": "15,000",
      "Fuel Flow": "100 kg/hr",
      "Injection": "500 bar Direct"
    }
  },
  {
    component: "MGU-K (Motor Generator Unit - Kinetic)",
    description: "Recovers energy from the rear axle during braking and provides an extra boost during acceleration.",
    stats: {
      "Max Power": "120 kW (163 cv)",
      "Max RPM": "50,000",
      "Energy Recovery": "2 MJ / lap",
      "Energy Deployment": "4 MJ / lap"
    }
  },
  {
    component: "MGU-H (Motor Generator Unit - Heat)",
    description: "Connected to the turbocharger, it converts heat energy from exhaust gases into electrical energy.",
    stats: {
      "Max RPM": "125,000",
      "Energy Recovery": "Unlimited",
      "Role": "Anti-lag & Energy Harvesting"
    }
  },
  {
    component: "Energy Store (Battery)",
    description: "A sophisticated lithium-ion battery pack that stores electrical energy for the MGU-K.",
    stats: {
      "Weight": "Min 20 kg",
      "Capacity": "4 MJ per lap",
      "Technology": "Lithium-Ion"
    }
  }
];

export const TEAMS: Team[] = [
  {
    id: "red-bull",
    name: "Red Bull Racing",
    car: "RB20",
    drivers: ["Max Verstappen", "Sergio Perez"],
    color: "#0600EF",
    secondaryColor: "#FFEC00",
    image: "https://images.unsplash.com/photo-1629739683367-73d7222485e5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari",
    car: "SF-24",
    drivers: ["Charles Leclerc", "Carlos Sainz"],
    color: "#E80020",
    secondaryColor: "#FFFFFF",
    image: "https://images.unsplash.com/photo-1594735294582-8df7538ec10d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG Petronas",
    car: "W15",
    drivers: ["Lewis Hamilton", "George Russell"],
    color: "#27F4D2",
    secondaryColor: "#000000",
    image: "https://images.unsplash.com/photo-1552072805-2a9039d00e57?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mclaren",
    name: "McLaren Formula 1 Team",
    car: "MCL38",
    drivers: ["Lando Norris", "Oscar Piastri"],
    color: "#FF8000",
    secondaryColor: "#5DBBFE",
    image: "https://images.unsplash.com/photo-1614202241590-95503889396f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const GENERAL_SPECS = {
  weight: "798 kg (Minimum including driver)",
  width: "2,000 mm",
  height: "950 mm",
  wheelbase: "Max 3,600 mm",
  tyres: "18-inch Pirelli",
  gearbox: "8-speed seamless shift",
  chassis: "Carbon-fibre honeycomb composite"
};

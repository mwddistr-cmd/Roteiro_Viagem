export type RouteCategory = 'bate-e-volta' | 'bate-e-fica' | 'tour';

export type StopType = 'descanso' | 'foto' | 'turismo' | 'gasolina' | 'almoco' | 'hotel';

export interface RouteStop {
  id: string;
  type: StopType;
  title: string;
  subtitle: string;
  kmFromStart: number;
  legKm: number; // distance from previous stop (strict <= 150 km)
  legDurationMinutes: number; // time from previous stop (strict <= 120 min)
  estimatedTimeArrival: string; // e.g. "09:30"
  description: string;
  motocycleTip: string; // special tip for riders (e.g., parking, surface, fuel type, gear)
  googleMapsPlaceQuery: string; // search query or address for Google Maps waypoint
  coordinates?: { lat: number; lng: number };
  amenities?: string[]; // e.g. ["Calibrador de Pneus", "Café", "Banheiro limpo", "Wi-Fi"]
}

export interface DayItinerary {
  dayNumber: number;
  dayTitle: string;
  startLocation: string;
  endLocation: string;
  totalDayKm: number;
  totalDayDuration: string;
  summary: string;
  hotelSuggestion?: {
    name: string;
    description: string;
    hasSecureMotoParking: boolean;
    location: string;
    priceRange: string;
  };
  stops: RouteStop[];
  googleMapsDayUrl: string;
}

export interface RouteRisk {
  id: string;
  title: string;
  level: 'alerta' | 'atencao' | 'critico';
  threat: string;
  mitigation: string;
  recommendedGear?: string;
}

export interface MotorcycleRoute {
  id: string;
  name: string;
  category: RouteCategory;
  categoryLabel: string;
  daysCount: number;
  totalKm: number;
  totalDurationHours: string;
  origin: string;
  destination: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  priceBrl: number;
  isUnlocked?: boolean;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Tour Extremo';
  asphaltCondition: 'Excelente' | 'Bom com trechos de serra' | 'Misto (asfalto e rípio)';
  bestSeason: string;
  highlights: string[];
  days: DayItinerary[];
  risks: RouteRisk[];
  googleMapsFullUrl: string;
  equipmentChecklist: string[];
}

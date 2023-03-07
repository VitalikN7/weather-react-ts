export type InitTemperature = {
   currentTime: string | undefined,
   indexApi: number,
   statusRequest: 'loading' | 'loaded' | 'error',
   temperature: {
      latitude: number,
      longitude: number,
      elevation: number,
      generationtime_ms: number,
      utc_offset_seconds: number,
      timezone: string,
      timezone_abbreviation: string,
      hourly_units: {
         time: string,
         temperature_2m: string,
         precipitation_probability: string,
         rain: string,
         showers: string,
         snowfall: string,
         surface_pressure: string,
         cloudcover: string,
         windspeed_10m: string,
      }
      hourly: {
         time: Array<string>,
         temperature_2m: Array<number>,
         precipitation_probability: Array<number>,
         rain: Array<number>,
         showers: Array<number>,
         snowfall: Array<number>,
         surface_pressure: Array<number>,
         cloudcover: Array<number>,
         windspeed_10m: Array<number>,
      },
   } | null,
}

export type ApiTemperature = {
   latitude: number,
   longitude: number,
   elevation: number,
   generationtime_ms: number,
   utc_offset_seconds: number,
   timezone: string,
   timezone_abbreviation: string,
   hourly_units: {
      time: string,
      temperature_2m: string,
      precipitation_probability: string,
      rain: string,
      showers: string,
      snowfall: string,
      surface_pressure: string,
      cloudcover: string,
      windspeed_10m: string,
   }
   hourly: {
      time: Array<string>,
      temperature_2m: Array<number>,
      precipitation_probability: Array<number>,
      rain: Array<number>,
      showers: Array<number>,
      snowfall: Array<number>,
      surface_pressure: Array<number>,
      cloudcover: Array<number>,
      windspeed_10m: Array<number>,
   }
} | null
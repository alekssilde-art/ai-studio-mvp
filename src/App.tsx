import { FormEvent, useEffect, useMemo, useState } from 'react';

type WeatherCodeInfo = {
  label: string;
  icon: string;
};

type ForecastDay = {
  date: string;
  max: number;
  min: number;
  weatherCode: number;
};

type HourlyItem = {
  time: string;
  temp: number;
  weatherCode: number;
};

type WeatherData = {
  city: string;
  country: string;
  timezone: string;
  currentTemp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  daily: ForecastDay[];
  hourly: HourlyItem[];
  time: string;
};

const weatherCodeMap: Record<number, WeatherCodeInfo> = {
  0: { label: 'Clear sky', icon: '☀️' },
  1: { label: 'Mostly clear', icon: '🌤️' },
  2: { label: 'Partly cloudy', icon: '⛅' },
  3: { label: 'Overcast', icon: '☁️' },
  45: { label: 'Foggy', icon: '🌫️' },
  48: { label: 'Rime fog', icon: '🌫️' },
  51: { label: 'Light drizzle', icon: '🌦️' },
  53: { label: 'Drizzle', icon: '🌦️' },
  55: { label: 'Heavy drizzle', icon: '🌧️' },
  56: { label: 'Freezing drizzle', icon: '🌧️' },
  57: { label: 'Heavy freezing drizzle', icon: '🌧️' },
  61: { label: 'Light rain', icon: '🌦️' },
  63: { label: 'Rain', icon: '🌧️' },
  65: { label: 'Heavy rain', icon: '🌧️' },
  66: { label: 'Freezing rain', icon: '🌧️' },
  67: { label: 'Heavy freezing rain', icon: '🌧️' },
  71: { label: 'Light snow', icon: '🌨️' },
  73: { label: 'Snow', icon: '❄️' },
  75: { label: 'Heavy snow', icon: '❄️' },
  77: { label: 'Snow grains', icon: '❄️' },
  80: { label: 'Rain showers', icon: '🌦️' },
  81: { label: 'Heavy showers', icon: '🌧️' },
  82: { label: 'Violent showers', icon: '🌧️' },
  85: { label: 'Snow showers', icon: '🌨️' },
  86: { label: 'Heavy snow showers', icon: '🌨️' },
  95: { label: 'Thunderstorm', icon: '⛈️' },
  96: { label: 'Thunderstorm with hail', icon: '⛈️' },
  99: { label: 'Severe thunderstorm', icon: '⛈️' },
};

const defaultCities = ['London', 'New York', 'Tokyo', 'Paris', 'Dubai'];

const fetchWeather = async (query: string): Promise<WeatherData> => {
  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`,
  );

  if (!geoResponse.ok) {
    throw new Error('Unable to find that city.');
  }

  const geoData = await geoResponse.json();
  const location = geoData.results?.[0];

  if (!location) {
    throw new Error('No matching city was found.');
  }

  const forecastResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`,
  );

  if (!forecastResponse.ok) {
    throw new Error('Weather data could not be loaded.');
  }

  const forecastData = await forecastResponse.json();
  const current = forecastData.current;
  const daily = forecastData.daily.time.map((date: string, index: number) => ({
    date,
    max: forecastData.daily.temperature_2m_max[index],
    min: forecastData.daily.temperature_2m_min[index],
    weatherCode: forecastData.daily.weather_code[index],
  }));

  const hourly = forecastData.hourly.time.slice(0, 8).map((time: string, index: number) => ({
    time,
    temp: forecastData.hourly.temperature_2m[index],
    weatherCode: forecastData.hourly.weather_code[index],
  }));

  return {
    city: location.name,
    country: location.country,
    timezone: forecastData.timezone,
    currentTemp: current.temperature_2m,
    feelsLike: current.apparent_temperature,
    humidity: current.relative_humidity_2m,
    windSpeed: current.wind_speed_10m,
    weatherCode: current.weather_code,
    daily,
    hourly,
    time: current.time,
  };
};

function App() {
  const [query, setQuery] = useState('London');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadWeather = async (city: string) => {
    setLoading(true);
    setError('');

    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setQuery(data.city);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather('London');
  }, []);

  const currentWeather = useMemo(() => {
    if (!weather) return null;
    return weatherCodeMap[weather.weatherCode] ?? { label: 'Weather', icon: '🌤️' };
  }, [weather]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      loadWeather(trimmed);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-[28px] border border-slate-800 p-4 sm:p-6 lg:p-7">
          <header className="flex flex-col gap-4 border-b border-slate-800 pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Weather dashboard</p>
              <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Forecast studio</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full max-w-xl items-center gap-3">
              <label className="sr-only" htmlFor="city-search">
                Search city
              </label>
              <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3">
                <span className="text-lg text-cyan-300">⌕</span>
                <input
                  id="city-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                  placeholder="Search a city"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Search
              </button>
            </form>
          </header>

          {error ? (
            <div className="mt-6 rounded-2xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </div>
          ) : null}

          {loading || !weather ? (
            <div className="mt-8 flex min-h-[420px] items-center justify-center rounded-[24px] border border-slate-800 bg-slate-900/60 text-slate-300">
              {loading ? 'Loading weather data...' : 'No weather data available.'}
            </div>
          ) : (
            <main className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
              <section className="space-y-6">
                <div className="rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60 p-5 sm:p-6">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Now</p>
                      <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                        {Math.round(weather.currentTemp)}°C
                      </h2>
                      <div className="mt-3 flex items-center gap-3 text-slate-300">
                        <span className="text-3xl">{currentWeather?.icon}</span>
                        <span className="text-lg font-medium">{currentWeather?.label}</span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-right">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p>
                      <p className="mt-2 text-xl font-semibold text-white">{weather.city}</p>
                      <p className="text-sm text-slate-400">{weather.country}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Feels like</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{Math.round(weather.feelsLike)}°C</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Humidity</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{weather.humidity}%</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Wind</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{Math.round(weather.windSpeed)} km/h</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Next 24 hours</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{weather.timezone}</span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {weather.hourly.map((hour) => {
                      const info = weatherCodeMap[hour.weatherCode] ?? { label: 'Weather', icon: '🌤️' };
                      const timeLabel = new Date(hour.time).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                      });

                      return (
                        <div key={hour.time} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{timeLabel}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-2xl">{info.icon}</span>
                            <span className="text-xl font-semibold text-white">{Math.round(hour.temp)}°</span>
                          </div>
                          <p className="mt-3 text-sm text-slate-300">{info.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              <aside className="space-y-6">
                <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">7-day outlook</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Forecast</span>
                  </div>

                  <div className="space-y-3">
                    {weather.daily.map((day) => {
                      const info = weatherCodeMap[day.weatherCode] ?? { label: 'Weather', icon: '🌤️' };
                      const label = new Date(day.date).toLocaleDateString([], { weekday: 'short' });

                      return (
                        <div
                          key={day.date}
                          className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{info.icon}</span>
                            <div>
                              <p className="font-medium text-white">{label}</p>
                              <p className="text-xs text-slate-400">{info.label}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="font-semibold text-white">{Math.round(day.max)}°</p>
                            <p className="text-xs text-slate-400">{Math.round(day.min)}°</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Quick picks</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                    {defaultCities.map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => loadWeather(city)}
                        className={`rounded-2xl border px-3 py-2.5 text-left text-sm transition ${
                          weather.city === city
                            ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-100'
                            : 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
            </main>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

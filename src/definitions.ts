declare module "@capacitor/core" {
  interface PluginRegistry {
    SpeechRecognition: SpeechRecognitionPlugin;
  }
}

export type Listeners = "partialResults";

export interface SpeechRecognitionPlugin {
  available(): Promise<{ available: boolean }>;
  start(options?: UtteranceOptions): Promise<{ matches: string[] }>;
  stop(): Promise<void>;
  getSupportedLanguages(): Promise<{ languages: any[] }>;
  hasPermission(): Promise<{ permission: boolean }>;
  requestPermission(): Promise<void>;
  addListener(
    eventName: Listeners,
    callback: (data: { matches: string[] }) => void
  ): void;
}

export interface UtteranceOptions {
  language?: string;
  maxResults?: number;
  prompt?: string;
  popup?: boolean;
  partialResults?: boolean;
}

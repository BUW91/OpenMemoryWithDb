import { env } from "./cfg";

/**
 * Internal logger for OpenMemory library.
 * Logging is disabled by default to avoid polluting application logs.
 * Enable by setting OM_LOGGING_ENABLED=true in your environment.
 */
class Logger {
    private get enabled(): boolean {
        return env.logging_enabled;
    }

    log(...args: any[]): void {
        if (this.enabled) {
            console.log(...args);
        }
    }

    error(...args: any[]): void {
        if (this.enabled) {
            console.error(...args);
        }
    }

    warn(...args: any[]): void {
        if (this.enabled) {
            console.warn(...args);
        }
    }

    info(...args: any[]): void {
        if (this.enabled) {
            console.info(...args);
        }
    }

    debug(...args: any[]): void {
        if (this.enabled) {
            console.debug(...args);
        }
    }
}

export const logger = new Logger();

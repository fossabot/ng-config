export abstract class ConfigLoader {
    abstract getType(): string;
    abstract load(): Promise<any>;
    abstract getLoadedSettings(): { [key: string]: any };
}

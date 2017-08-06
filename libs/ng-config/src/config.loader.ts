export abstract class ConfigLoader {
    abstract loadSettings(): Promise<{ [key: string]: any }>;
    abstract loadSettingsSync(): { [key: string]: any };
    abstract type: string;
    abstract resultSelector?: string;
}

export class ConfigStaticLoader implements ConfigLoader {
    constructor(private readonly settings: { [key: string]: any }) {
    }

    get type(): string {
        return 'ConfigStaticLoader';
    }

    loadSettings(): Promise<{ [key: string]: any }> {
        return Promise.resolve(this.settings);
    }
    loadSettingsSync(): { [key: string]: any } {
        return this.settings;
    }
}

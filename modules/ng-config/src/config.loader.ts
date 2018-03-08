export abstract class ConfigLoader {
    abstract source(): string;
    // tslint:disable-next-line:no-any
    abstract load(): Promise<{ [key: string]: any }>;
}

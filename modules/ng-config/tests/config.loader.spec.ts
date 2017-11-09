import { TestBed } from '@angular/core/testing';

import { ConfigLoader, ConfigModule, ConfigService, ConfigStaticLoader } from '../index';

describe('ng-config',
    () => {
        beforeEach(() => {
            const configFactory = () => new ConfigStaticLoader({ key1: 'value1', key2: 'value2' });
            TestBed.configureTestingModule({
                imports: [
                    ConfigModule.forRoot({
                        provide: ConfigLoader,
                        useFactory: (configFactory)
                    })
                ]
            });
        });

        describe('ConfigLoader',
            () => {
                it(`should be able to provide 'ConfigStaticLoader' instance`,
                    () => {
                        const configService = TestBed.get(ConfigService) as ConfigService;

                        expect(ConfigStaticLoader).toBeDefined();
                        expect(configService.loader).toBeDefined();
                        expect(configService.loader instanceof ConfigStaticLoader).toBeTruthy();
                    });
            });
    });

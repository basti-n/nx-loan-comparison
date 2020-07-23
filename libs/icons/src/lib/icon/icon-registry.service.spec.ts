import { IconRegistryService } from './icon-registry.service';

describe('IconRegistryService', () => {
  let service: IconRegistryService;

  beforeEach(() => {
    service = new IconRegistryService();
  });

  it('should be created', () => {
    expect(service instanceof IconRegistryService).toBeTruthy();
  });
});

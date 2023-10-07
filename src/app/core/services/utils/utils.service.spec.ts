import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should capitalize first letter of given string', () => {
    expect(service.capitalizeFirstLetter('arnaf')).toEqual('Arnaf');
    expect(service.capitalizeFirstLetter('ARNAF')).toEqual('Arnaf');
    expect(service.capitalizeFirstLetter('aRNAf')).toEqual('Arnaf');
  });

  it('should convert object to options array with label and value', () => {
    expect(service.generateOptionKeyValue({ value: 'price' })).toEqual([
      { label: 'Price', value: 'price' },
    ]);
  });
});

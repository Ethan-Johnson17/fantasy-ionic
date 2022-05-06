import { Test, TestingModule } from '@nestjs/testing';
import { MyPartyController } from './my-party.controller';

describe('MyPartyController', () => {
  let controller: MyPartyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyPartyController],
    }).compile();

    controller = module.get<MyPartyController>(MyPartyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

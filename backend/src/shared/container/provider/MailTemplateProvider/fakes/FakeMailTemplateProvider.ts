import IMailTemplateProvider from '@shared/container/provider/MailTemplateProvider/models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'mail context';
  }
}

export default FakeMailTemplateProvider;

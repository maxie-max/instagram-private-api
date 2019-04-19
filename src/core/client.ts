import { State } from './state';
import { Request } from './request';
import { FeedFactory } from './feed.factory';
import { AccountRepository } from '../repositories/account.repository';
import { UserRepository } from '../repositories/user.repository';
import { MediaRepository } from '../repositories/media.repository';
import { ChallengeRepository } from '../repositories/challenge.repository';
import { FriendshipRepository } from '../repositories/friendship.repository';
import { UploadRepository } from '../repositories/upload.repository';
import { PublishService } from '../services/publish.service';

export class IgApiClient {
  public state = new State();
  public request = new Request(this);
  public feed = new FeedFactory(this);
  /* Repositories */
  public challenge = new ChallengeRepository(this);
  public account = new AccountRepository(this);
  public user = new UserRepository(this);
  public friendship = new FriendshipRepository(this);
  public media = new MediaRepository(this);
  public upload = new UploadRepository(this);
  /* Services */
  public publish = new PublishService(this);
}

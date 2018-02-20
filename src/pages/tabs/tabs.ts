import { Component } from '@angular/core';

import { ChatsPage } from '../chats/chats';
import { GroupsPage } from '../groups/groups';
import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChatsPage;
  tab2Root = GroupsPage;
  tab3Root = NotificationPage;
  tab4Root = ProfilePage;
  tab5Root = SettingsPage;

  constructor() {

  }
}

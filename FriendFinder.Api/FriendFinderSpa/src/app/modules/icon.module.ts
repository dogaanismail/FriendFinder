import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';

import {
  Camera, Heart, Github, Star,
  Plus, MessageSquare,
  Settings, Bell, BellOff, Box,
  Trash2, Search, AtSign, MoreVertical, FileText,
  Users, Gift, DownloadCloud, LifeBuoy, X,
  Code, Server, Monitor, User, Mail, Share2
} from 'angular-feather/icons';

const icons = {
  Camera, Heart, Github, Star,
  Plus, MessageSquare,
  Settings, Bell, BellOff, Box,
  Trash2, Search, AtSign, MoreVertical, FileText,
  Users, Gift, DownloadCloud, LifeBuoy, X,
  Code, Server, Monitor, User, Mail, Share2
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }


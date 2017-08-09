import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';
/*
  Generated class for the HttpConfigService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NetworkService {
	constructor(private Network: Network, private Platform: Platform) {
		Platform.ready().then(() => {
			Network.onConnect()
			.subscribe(() => {
				console.log('online')
			});

			Network.onDisconnect()
			.subscribe(() => {
				console.log('offline')
			});
		});
	}
	getConnectType() {
		return this.Network.type;
	}
	isOnline() {
		const _type = this.getConnectType();
		return /*!!_type &&*/ (_type !== 'none');
	}
}

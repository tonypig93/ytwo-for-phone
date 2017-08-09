import { Subject } from 'rxjs/Subject';
class CleanOnDestroy {
    public ngUnsubscribe: Subject<void> = new Subject<void>();
    cleanSubscriptions() {
        console.group(this['constructor'].name);
        console.log('clean up subscriptions');
        console.groupEnd();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
/**
 * this class is used to prevent memory leak from rxjs.
 */
export class SecureSubscribe extends CleanOnDestroy {
    // ionViewDidLeave() {
    //     this.cleanSubscriptions();
    // }
    ngOnDestroy() {
        this.cleanSubscriptions();
    }
}
export class SecureSubscribeForComponent extends CleanOnDestroy {
    ngOnDestroy() {
        this.cleanSubscriptions();
    }
}
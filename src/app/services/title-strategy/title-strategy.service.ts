import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TitleStrategyService extends TitleStrategy {
  private readonly title = inject(Title);

  /**
   * Application title to add to all meta titles
   *
   * @private {string}
   * @memberof TitleStrategyService
   */
  private readonly appTitle = 'Test Papernest';

  /**
   * Overrides router state snapshot to add a specific appTitles value to display as meta title
   *
   * @param {RouterStateSnapshot} snapshot
   */
  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    if (title) {
      this.title.setTitle(`${title} | ${this.appTitle}`);
    } else {
      this.title.setTitle(this.appTitle);
    }
  }
}

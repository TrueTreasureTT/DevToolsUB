// app.ts
import { WindowManager } from './devtools/window';

export class App {
  private windowManager: WindowManager;

  constructor() {
    this.windowManager = new WindowManager();
  }

  public init(): void {
    this.windowManager.initTabs();
  }
}

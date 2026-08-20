// devtools/console.ts
export class ConsolePanel {
  public log(message: string): void {
    console.log(`[DevTools Console]: ${message}`);
  }
}

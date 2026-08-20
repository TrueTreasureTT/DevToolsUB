// devtools/window.ts
export class WindowManager {
  public initTabs(): void {
    const tabs = document.querySelectorAll<HTMLButtonElement>('.tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        if (tab.classList.contains('icon-tab')) return;
        document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    const subTabs = document.querySelectorAll<HTMLButtonElement>('.sub-tab');
    subTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        if (tab.classList.contains('icon-tab')) return;
        document.querySelectorAll('.sub-tab').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  }
}

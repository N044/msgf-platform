export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

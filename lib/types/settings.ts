export type SettingType = 'text' | 'number' | 'select' | 'color' | 'boolean' | 'date' | 'textarea' | 'json';

export interface ValidationRule {
  type: 'required' | 'min' | 'max' | 'pattern' | 'custom';
  value?: any;
  message: string;
}

export interface Setting {
  id: string;
  label: string;
  type: SettingType;
  value: any;
  options?: Array<{ label: string; value: string }>;
  validation?: ValidationRule[];
  description?: string;
  placeholder?: string;
}

export interface SettingsGroup {
  id: string;
  title: string;
  settings: Setting[];
}

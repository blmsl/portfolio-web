'use strict';
export interface School {
  year: {
    from: number;
    to: number;
  };
  institution: {
    name: string;
    url?: string;
    location: string;
  };
  qualification: string;
  content: string;
}

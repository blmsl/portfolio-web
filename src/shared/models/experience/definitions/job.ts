'use strict';
export interface Job {
  year: {
    from: string;
    to: string;
  };
  institution: {
    name: string;
    url?: string;
    location: string;
  };
  title: string;
  content: string;
  accomplishments?: string;
  video?: string;
}

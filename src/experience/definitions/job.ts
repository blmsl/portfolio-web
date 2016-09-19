'use strict';
/**
 * Interface for a Job object
 */
export interface Job {
  /**
   * Years of service
   */
  year: {
    /**
     * Start year
     */
    from: string;
    /**
     * End year
     */
    to: string;
  };
  /**
   * Place of work details
   */
  institution: {
    /**
     * Name of employer
     */
    name: string;
    /**
     * Optional Employer web address
     */
    url?: string;
    /**
     * Location of Employer office
     */
    location: string;
  };
  /**
   * Job title
   */
  title: string;
  /**
   * Job description
   */
  content: string;
  /**
   * Optional accomplishments
   */
  accomplishments?: string;
  /**
   * Optional YouTube video id
   */
  video?: string;
}

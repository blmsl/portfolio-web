'use strict';
import {Airport}  from './definitions/airport';
import * as a     from './airports';

export const JOURNEYS:Array<Array<Airport>> = [
  [a.KIM, a.PLZ, a.ELS], [a.KIM, a.JNB], [a.JNB, a.AMS, a.LHR], [a.JNB, a.NBO, a.LHR],
  [a.JNB, a.CPT], [a.JNB, a.MBD], [a.JNB, a.DUR], [a.JNB, a.BFN], [a.JNB, a.PLZ], [a.JNB, a.ELS],
  [a.JNB, a.GRJ], [a.JNB, a.MPM], [a.JNB, a.GBE], [a.JNB, a.WDH], [a.JNB, a.BUQ], [a.JNB, a.HRE],
  [a.JNB, a.LVI], [a.JNB, a.LUN], [a.JNB, a.LAD], [a.JNB, a.DAR], [a.JNB, a.EBB], [a.JNB, a.FIH],
  [a.JNB, a.LOS], [a.JNB, a.ABJ, a.ACC, a.JNB], [a.JNB, a.DKR], [a.JNB, a.SID, a.JFK, a.JNB],
  [a.SID, a.MIA, a.CPT], [a.SID, a.ATL, a.IAD, a.LGA, a.ATL, a.JNB], [a.JNB, a.MRU], [a.JNB, a.HKG],
  [a.JNB, a.PER, a.SYD], [a.JNB, a.EZE], [a.JNB, a.GRU, a.EZE, a.CPT], [a.LHR, a.YVR],
  [a.JNB, a.FRA, a.AMS], [a.JNB, a.ZRH, a.CPH], [a.ZRH, a.CDG], [a.JNB, a.BOM], [a.JNB, a.BKK, a.KIX],
  [a.JNB, a.HKGN], [a.BKK, a.HKGN], [a.BKK, a.USM], [a.JNB, a.BKKN, a.USM], [a.JNB, a.SYD],
  [a.PER, a.DPS, a.DRW, a.ADL, a.SYD], [a.CPT, a.BFN], [a.CPT, a.KIM], [a.CPT, a.LHR], [a.CPT, a.FRA],
  [a.CPT, a.PLZ, a.DUR], [a.HKGN, a.AKL], [a.AKL, a.SYD, a.BKKN], [a.AKL, a.WLG], [a.AKL, a.CHC],
  [a.HLZ, a.WLG], [a.HLZ, a.CHC], [a.AKL, a.ZQN], [a.AKL, a.NSN], [a.WLG, a.TRG], [a.WLG, a.ROT],
  [a.WLG, a.CHC], [a.AKL, a.RAR], [a.AKL, a.NRT, a.LHR], [a.LHR, a.ARN], [a.BGO, a.TRD], [a.BOO, a.SJV],
  [a.TOS, a.ARN], [a.LHR, a.SIN, a.SYD, a.WLG]
];

export const UPCOMING_JOURNEYS:Array<Array<Airport>> = [
];

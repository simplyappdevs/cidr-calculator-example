/**
 * Examples for cidr-calulator v1.x.x
 */

/**
 * SimplyAppDevs Imports
 */
import {CIDRInformation, CIDRModule, OCTECTS} from '@simplyappdevs/cidr-calculator';

/**
 * Prints OCTECTS
 * @param ip Input IP
 * @param octs Octects to print out
 * @param prependTabs Prepends each line with
 */
const printIP = (ip: string, octs: OCTECTS, prependTabs: string) => {
  return `${prependTabs}Input\t: ${ip}\n${prependTabs}String\t: ${octs.toString()}\n${prependTabs}Array\t: ${octs.toArray()}\n${prependTabs}Binary\t: ${octs.toBinary()}\n${prependTabs}Integer\t: ${CIDRModule.octectsToNumber(octs)}`;
};

/**
 * Prints CIDRINFORMATION
 * @param cidrInfo CIDR Information
 * @param prependTabs Prepends each line with
 */
const printCIDRInfo = (cidrInfo: CIDRInformation, prependTabs: string) => {
  return `${prependTabs}Network Prefix\t: ${cidrInfo.networkPrefix}\n${prependTabs}CIDR Block\t: ${cidrInfo.cidrBlock}\n${prependTabs}Subnet Mask\t: ${cidrInfo.subnetMask}\n${prependTabs}Wildcard Mask\t: ${cidrInfo.wilcardMask}\n${prependTabs}Broadcast IP\t: ${cidrInfo.broadcastIP}\n${prependTabs}Minimum IP\t: ${cidrInfo.minIP}\n${prependTabs}Maximum IP\t: ${cidrInfo.maxIP}\n${prependTabs}Total IPs\t: ${cidrInfo.totalIPs} (including min and max IPs)`;
};

// Execute
(function () {
  // input
  const ip = '172.21.1.100';
  const cidrBlock = 19;
  const split = 4;

  // parse IP
  const octs = CIDRModule.parseOctects(ip);

  console.log(`${printIP(ip, octs, '')}\n`);

  // parse CIDR
  const cidr = CIDRModule.parseCIDR(ip, cidrBlock);

  console.log(`Input\t\t: ${cidr.inputIP}\nCIDR Block\t: ${cidr.inputCIDR}`);
  console.log(`IP Octects\t: \n${printIP(ip, cidr.ipOctects, '\t')}`);
  console.log(`CIDR\t\t: \n${printCIDRInfo(cidr.cidrInformation, '\t')}`);
  console.log(`Max. Subnet\t: ${cidr.maxSubnetCount}`);
  console.log('');

  // split CIDR
  const cidrs = cidr.splitCIDR(split);

  console.log(`Split Subnet\t\t: ${split}`);

  cidrs.forEach((cidr: CIDRInformation, index: number) => {
    console.log(`Subnet ${index + 1}`);
    console.log(`${printCIDRInfo(cidr, '\t')}\n`);
  });
})();
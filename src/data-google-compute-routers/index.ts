/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleComputeRoutersConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}
  */
  readonly region?: string;
}
export interface DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges {
}

export function dataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesToTerraform(struct?: DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesToHclTerraform(struct?: DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }
}

export class DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference {
    return new DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRoutersRoutersBgp {
}

export function dataGoogleComputeRoutersRoutersBgpToTerraform(struct?: DataGoogleComputeRoutersRoutersBgp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeRoutersRoutersBgpToHclTerraform(struct?: DataGoogleComputeRoutersRoutersBgp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRoutersRoutersBgpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRoutersRoutersBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRoutersRoutersBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_mode - computed: true, optional: false, required: false
  public get advertiseMode() {
    return this.getStringAttribute('advertise_mode');
  }

  // advertised_groups - computed: true, optional: false, required: false
  public get advertisedGroups() {
    return this.getListAttribute('advertised_groups');
  }

  // advertised_ip_ranges - computed: true, optional: false, required: false
  private _advertisedIpRanges = new DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList(this, "advertised_ip_ranges", false);
  public get advertisedIpRanges() {
    return this._advertisedIpRanges;
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // keepalive_interval - computed: true, optional: false, required: false
  public get keepaliveInterval() {
    return this.getNumberAttribute('keepalive_interval');
  }
}

export class DataGoogleComputeRoutersRoutersBgpList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRoutersRoutersBgpOutputReference {
    return new DataGoogleComputeRoutersRoutersBgpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRoutersRoutersBgpPeers {
}

export function dataGoogleComputeRoutersRoutersBgpPeersToTerraform(struct?: DataGoogleComputeRoutersRoutersBgpPeers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeRoutersRoutersBgpPeersToHclTerraform(struct?: DataGoogleComputeRoutersRoutersBgpPeers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRoutersRoutersBgpPeersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRoutersRoutersBgpPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRoutersRoutersBgpPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_mode - computed: true, optional: false, required: false
  public get advertiseMode() {
    return this.getStringAttribute('advertise_mode');
  }

  // advertised_route_priority - computed: true, optional: false, required: false
  public get advertisedRoutePriority() {
    return this.getNumberAttribute('advertised_route_priority');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getStringAttribute('enable');
  }

  // enable_ipv6 - computed: true, optional: false, required: false
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // management_type - computed: true, optional: false, required: false
  public get managementType() {
    return this.getStringAttribute('management_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }

  // peer_ip_address - computed: true, optional: false, required: false
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
}

export class DataGoogleComputeRoutersRoutersBgpPeersList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRoutersRoutersBgpPeersOutputReference {
    return new DataGoogleComputeRoutersRoutersBgpPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRoutersRoutersInterfaces {
}

export function dataGoogleComputeRoutersRoutersInterfacesToTerraform(struct?: DataGoogleComputeRoutersRoutersInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeRoutersRoutersInterfacesToHclTerraform(struct?: DataGoogleComputeRoutersRoutersInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRoutersRoutersInterfacesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRoutersRoutersInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRoutersRoutersInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_range - computed: true, optional: false, required: false
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }

  // linked_interconnect_attachment - computed: true, optional: false, required: false
  public get linkedInterconnectAttachment() {
    return this.getStringAttribute('linked_interconnect_attachment');
  }

  // linked_vpn_tunnel - computed: true, optional: false, required: false
  public get linkedVpnTunnel() {
    return this.getStringAttribute('linked_vpn_tunnel');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // redundant_interface - computed: true, optional: false, required: false
  public get redundantInterface() {
    return this.getStringAttribute('redundant_interface');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
}

export class DataGoogleComputeRoutersRoutersInterfacesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRoutersRoutersInterfacesOutputReference {
    return new DataGoogleComputeRoutersRoutersInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRoutersRoutersMd5AuthenticationKeys {
}

export function dataGoogleComputeRoutersRoutersMd5AuthenticationKeysToTerraform(struct?: DataGoogleComputeRoutersRoutersMd5AuthenticationKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeRoutersRoutersMd5AuthenticationKeysToHclTerraform(struct?: DataGoogleComputeRoutersRoutersMd5AuthenticationKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRoutersRoutersMd5AuthenticationKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRoutersRoutersMd5AuthenticationKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference {
    return new DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRoutersRoutersNats {
}

export function dataGoogleComputeRoutersRoutersNatsToTerraform(struct?: DataGoogleComputeRoutersRoutersNats): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeRoutersRoutersNatsToHclTerraform(struct?: DataGoogleComputeRoutersRoutersNats): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRoutersRoutersNatsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRoutersRoutersNats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRoutersRoutersNats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_endpoint_independent_mapping - computed: true, optional: false, required: false
  public get enableEndpointIndependentMapping() {
    return this.getBooleanAttribute('enable_endpoint_independent_mapping');
  }

  // icmp_idle_timeout_sec - computed: true, optional: false, required: false
  public get icmpIdleTimeoutSec() {
    return this.getNumberAttribute('icmp_idle_timeout_sec');
  }

  // min_ports_per_vm - computed: true, optional: false, required: false
  public get minPortsPerVm() {
    return this.getNumberAttribute('min_ports_per_vm');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nat_ip_allocate_option - computed: true, optional: false, required: false
  public get natIpAllocateOption() {
    return this.getStringAttribute('nat_ip_allocate_option');
  }

  // nat_ips - computed: true, optional: false, required: false
  public get natIps() {
    return this.getListAttribute('nat_ips');
  }

  // source_subnetwork_ip_ranges_to_nat - computed: true, optional: false, required: false
  public get sourceSubnetworkIpRangesToNat() {
    return this.getStringAttribute('source_subnetwork_ip_ranges_to_nat');
  }

  // tcp_established_idle_timeout_sec - computed: true, optional: false, required: false
  public get tcpEstablishedIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_established_idle_timeout_sec');
  }

  // tcp_transitory_idle_timeout_sec - computed: true, optional: false, required: false
  public get tcpTransitoryIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_transitory_idle_timeout_sec');
  }

  // udp_idle_timeout_sec - computed: true, optional: false, required: false
  public get udpIdleTimeoutSec() {
    return this.getNumberAttribute('udp_idle_timeout_sec');
  }
}

export class DataGoogleComputeRoutersRoutersNatsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRoutersRoutersNatsOutputReference {
    return new DataGoogleComputeRoutersRoutersNatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRoutersRouters {
}

export function dataGoogleComputeRoutersRoutersToTerraform(struct?: DataGoogleComputeRoutersRouters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeRoutersRoutersToHclTerraform(struct?: DataGoogleComputeRoutersRouters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRoutersRoutersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRoutersRouters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRoutersRouters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataGoogleComputeRoutersRoutersBgpList(this, "bgp", false);
  public get bgp() {
    return this._bgp;
  }

  // bgp_peers - computed: true, optional: false, required: false
  private _bgpPeers = new DataGoogleComputeRoutersRoutersBgpPeersList(this, "bgp_peers", false);
  public get bgpPeers() {
    return this._bgpPeers;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encrypted_interconnect_router - computed: true, optional: false, required: false
  public get encryptedInterconnectRouter() {
    return this.getBooleanAttribute('encrypted_interconnect_router');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataGoogleComputeRoutersRoutersInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // md5_authentication_keys - computed: true, optional: false, required: false
  private _md5AuthenticationKeys = new DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList(this, "md5_authentication_keys", false);
  public get md5AuthenticationKeys() {
    return this._md5AuthenticationKeys;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nats - computed: true, optional: false, required: false
  private _nats = new DataGoogleComputeRoutersRoutersNatsList(this, "nats", false);
  public get nats() {
    return this._nats;
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }
}

export class DataGoogleComputeRoutersRoutersList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRoutersRoutersOutputReference {
    return new DataGoogleComputeRoutersRoutersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers google_compute_routers}
*/
export class DataGoogleComputeRouters extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_routers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleComputeRouters resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeRouters to import
  * @param importFromId The id of the existing DataGoogleComputeRouters that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeRouters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_routers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers google_compute_routers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeRoutersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeRoutersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_routers',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routers - computed: true, optional: false, required: false
  private _routers = new DataGoogleComputeRoutersRoutersList(this, "routers", false);
  public get routers() {
    return this._routers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

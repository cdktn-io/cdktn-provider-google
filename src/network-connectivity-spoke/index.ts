/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkConnectivitySpokeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#deletion_policy NetworkConnectivitySpoke#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of the spoke.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#description NetworkConnectivitySpoke#description}
  */
  readonly description?: string;
  /**
  * The name of the group that this spoke is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#group NetworkConnectivitySpoke#group}
  */
  readonly group?: string;
  /**
  * Immutable. The URI of the hub that this spoke is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#hub NetworkConnectivitySpoke#hub}
  */
  readonly hub: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#labels NetworkConnectivitySpoke#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#location NetworkConnectivitySpoke#location}
  */
  readonly location: string;
  /**
  * Immutable. The name of the spoke. Spoke names must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#name NetworkConnectivitySpoke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}
  */
  readonly project?: string;
  /**
  * linked_interconnect_attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#linked_interconnect_attachments NetworkConnectivitySpoke#linked_interconnect_attachments}
  */
  readonly linkedInterconnectAttachments?: NetworkConnectivitySpokeLinkedInterconnectAttachments;
  /**
  * linked_producer_vpc_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#linked_producer_vpc_network NetworkConnectivitySpoke#linked_producer_vpc_network}
  */
  readonly linkedProducerVpcNetwork?: NetworkConnectivitySpokeLinkedProducerVpcNetwork;
  /**
  * linked_router_appliance_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#linked_router_appliance_instances NetworkConnectivitySpoke#linked_router_appliance_instances}
  */
  readonly linkedRouterApplianceInstances?: NetworkConnectivitySpokeLinkedRouterApplianceInstances;
  /**
  * linked_vpc_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#linked_vpc_network NetworkConnectivitySpoke#linked_vpc_network}
  */
  readonly linkedVpcNetwork?: NetworkConnectivitySpokeLinkedVpcNetwork;
  /**
  * linked_vpn_tunnels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#linked_vpn_tunnels NetworkConnectivitySpoke#linked_vpn_tunnels}
  */
  readonly linkedVpnTunnels?: NetworkConnectivitySpokeLinkedVpnTunnels;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#timeouts NetworkConnectivitySpoke#timeouts}
  */
  readonly timeouts?: NetworkConnectivitySpokeTimeouts;
}
export interface NetworkConnectivitySpokeReasons {
}

export function networkConnectivitySpokeReasonsToTerraform(struct?: NetworkConnectivitySpokeReasons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkConnectivitySpokeReasonsToHclTerraform(struct?: NetworkConnectivitySpokeReasons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkConnectivitySpokeReasonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkConnectivitySpokeReasons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeReasons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // user_details - computed: true, optional: false, required: false
  public get userDetails() {
    return this.getStringAttribute('user_details');
  }
}

export class NetworkConnectivitySpokeReasonsList extends cdktn.ComplexList {

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
  public get(index: number): NetworkConnectivitySpokeReasonsOutputReference {
    return new NetworkConnectivitySpokeReasonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConnectivitySpokeLinkedInterconnectAttachments {
  /**
  * Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}
  */
  readonly excludeExportRanges?: string[];
  /**
  * Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#exclude_import_ranges NetworkConnectivitySpoke#exclude_import_ranges}
  */
  readonly excludeImportRanges?: string[];
  /**
  * Dynamic routes fully encompassed by include export ranges are included during export to hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#include_export_ranges NetworkConnectivitySpoke#include_export_ranges}
  */
  readonly includeExportRanges?: string[];
  /**
  * Hub routes fully encompassed by include import ranges are included during import from hub.
  * "ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#include_import_ranges NetworkConnectivitySpoke#include_import_ranges}
  */
  readonly includeImportRanges?: string[];
  /**
  * A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}
  */
  readonly siteToSiteDataTransfer: boolean | cdktn.IResolvable;
  /**
  * The URIs of linked interconnect attachment resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}
  */
  readonly uris: string[];
}

export function networkConnectivitySpokeLinkedInterconnectAttachmentsToTerraform(struct?: NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference | NetworkConnectivitySpokeLinkedInterconnectAttachments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeExportRanges),
    exclude_import_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeImportRanges),
    include_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeExportRanges),
    include_import_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeImportRanges),
    site_to_site_data_transfer: cdktn.booleanToTerraform(struct!.siteToSiteDataTransfer),
    uris: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.uris),
  }
}


export function networkConnectivitySpokeLinkedInterconnectAttachmentsToHclTerraform(struct?: NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference | NetworkConnectivitySpokeLinkedInterconnectAttachments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_import_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeImportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_import_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeImportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_to_site_data_transfer: {
      value: cdktn.booleanToHclTerraform(struct!.siteToSiteDataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uris: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedInterconnectAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeExportRanges = this._excludeExportRanges;
    }
    if (this._excludeImportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeImportRanges = this._excludeImportRanges;
    }
    if (this._includeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExportRanges = this._includeExportRanges;
    }
    if (this._includeImportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeImportRanges = this._includeImportRanges;
    }
    if (this._siteToSiteDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteDataTransfer = this._siteToSiteDataTransfer;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedInterconnectAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeExportRanges = undefined;
      this._excludeImportRanges = undefined;
      this._includeExportRanges = undefined;
      this._includeImportRanges = undefined;
      this._siteToSiteDataTransfer = undefined;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeExportRanges = value.excludeExportRanges;
      this._excludeImportRanges = value.excludeImportRanges;
      this._includeExportRanges = value.includeExportRanges;
      this._includeImportRanges = value.includeImportRanges;
      this._siteToSiteDataTransfer = value.siteToSiteDataTransfer;
      this._uris = value.uris;
    }
  }

  // exclude_export_ranges - computed: false, optional: true, required: false
  private _excludeExportRanges?: string[]; 
  public get excludeExportRanges() {
    return this.getListAttribute('exclude_export_ranges');
  }
  public set excludeExportRanges(value: string[]) {
    this._excludeExportRanges = value;
  }
  public resetExcludeExportRanges() {
    this._excludeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeExportRangesInput() {
    return this._excludeExportRanges;
  }

  // exclude_import_ranges - computed: false, optional: true, required: false
  private _excludeImportRanges?: string[]; 
  public get excludeImportRanges() {
    return this.getListAttribute('exclude_import_ranges');
  }
  public set excludeImportRanges(value: string[]) {
    this._excludeImportRanges = value;
  }
  public resetExcludeImportRanges() {
    this._excludeImportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeImportRangesInput() {
    return this._excludeImportRanges;
  }

  // include_export_ranges - computed: false, optional: true, required: false
  private _includeExportRanges?: string[]; 
  public get includeExportRanges() {
    return this.getListAttribute('include_export_ranges');
  }
  public set includeExportRanges(value: string[]) {
    this._includeExportRanges = value;
  }
  public resetIncludeExportRanges() {
    this._includeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExportRangesInput() {
    return this._includeExportRanges;
  }

  // include_import_ranges - computed: false, optional: true, required: false
  private _includeImportRanges?: string[]; 
  public get includeImportRanges() {
    return this.getListAttribute('include_import_ranges');
  }
  public set includeImportRanges(value: string[]) {
    this._includeImportRanges = value;
  }
  public resetIncludeImportRanges() {
    this._includeImportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeImportRangesInput() {
    return this._includeImportRanges;
  }

  // site_to_site_data_transfer - computed: false, optional: false, required: true
  private _siteToSiteDataTransfer?: boolean | cdktn.IResolvable; 
  public get siteToSiteDataTransfer() {
    return this.getBooleanAttribute('site_to_site_data_transfer');
  }
  public set siteToSiteDataTransfer(value: boolean | cdktn.IResolvable) {
    this._siteToSiteDataTransfer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteDataTransferInput() {
    return this._siteToSiteDataTransfer;
  }

  // uris - computed: false, optional: false, required: true
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface NetworkConnectivitySpokeLinkedProducerVpcNetwork {
  /**
  * IP ranges encompassing the subnets to be excluded from peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}
  */
  readonly excludeExportRanges?: string[];
  /**
  * IP ranges allowed to be included from peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#include_export_ranges NetworkConnectivitySpoke#include_export_ranges}
  */
  readonly includeExportRanges?: string[];
  /**
  * The URI of the Service Consumer VPC that the Producer VPC is peered with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#network NetworkConnectivitySpoke#network}
  */
  readonly network: string;
  /**
  * The name of the VPC peering between the Service Consumer VPC and the Producer VPC (defined in the Tenant project) which is added to the NCC hub. This peering must be in ACTIVE state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#peering NetworkConnectivitySpoke#peering}
  */
  readonly peering: string;
}

export function networkConnectivitySpokeLinkedProducerVpcNetworkToTerraform(struct?: NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference | NetworkConnectivitySpokeLinkedProducerVpcNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeExportRanges),
    include_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeExportRanges),
    network: cdktn.stringToTerraform(struct!.network),
    peering: cdktn.stringToTerraform(struct!.peering),
  }
}


export function networkConnectivitySpokeLinkedProducerVpcNetworkToHclTerraform(struct?: NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference | NetworkConnectivitySpokeLinkedProducerVpcNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peering: {
      value: cdktn.stringToHclTerraform(struct!.peering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedProducerVpcNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeExportRanges = this._excludeExportRanges;
    }
    if (this._includeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExportRanges = this._includeExportRanges;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._peering !== undefined) {
      hasAnyValues = true;
      internalValueResult.peering = this._peering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedProducerVpcNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeExportRanges = undefined;
      this._includeExportRanges = undefined;
      this._network = undefined;
      this._peering = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeExportRanges = value.excludeExportRanges;
      this._includeExportRanges = value.includeExportRanges;
      this._network = value.network;
      this._peering = value.peering;
    }
  }

  // exclude_export_ranges - computed: false, optional: true, required: false
  private _excludeExportRanges?: string[]; 
  public get excludeExportRanges() {
    return this.getListAttribute('exclude_export_ranges');
  }
  public set excludeExportRanges(value: string[]) {
    this._excludeExportRanges = value;
  }
  public resetExcludeExportRanges() {
    this._excludeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeExportRangesInput() {
    return this._excludeExportRanges;
  }

  // include_export_ranges - computed: false, optional: true, required: false
  private _includeExportRanges?: string[]; 
  public get includeExportRanges() {
    return this.getListAttribute('include_export_ranges');
  }
  public set includeExportRanges(value: string[]) {
    this._includeExportRanges = value;
  }
  public resetIncludeExportRanges() {
    this._includeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExportRangesInput() {
    return this._includeExportRanges;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // peering - computed: false, optional: false, required: true
  private _peering?: string; 
  public get peering() {
    return this.getStringAttribute('peering');
  }
  public set peering(value: string) {
    this._peering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringInput() {
    return this._peering;
  }

  // producer_network - computed: true, optional: false, required: false
  public get producerNetwork() {
    return this.getStringAttribute('producer_network');
  }
}
export interface NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances {
  /**
  * The IP address on the VM to use for peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#ip_address NetworkConnectivitySpoke#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The URI of the virtual machine resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#virtual_machine NetworkConnectivitySpoke#virtual_machine}
  */
  readonly virtualMachine: string;
}

export function networkConnectivitySpokeLinkedRouterApplianceInstancesInstancesToTerraform(struct?: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    virtual_machine: cdktn.stringToTerraform(struct!.virtualMachine),
  }
}


export function networkConnectivitySpokeLinkedRouterApplianceInstancesInstancesToHclTerraform(struct?: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_machine: {
      value: cdktn.stringToHclTerraform(struct!.virtualMachine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._virtualMachine !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachine = this._virtualMachine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._virtualMachine = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._virtualMachine = value.virtualMachine;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // virtual_machine - computed: false, optional: false, required: true
  private _virtualMachine?: string; 
  public get virtualMachine() {
    return this.getStringAttribute('virtual_machine');
  }
  public set virtualMachine(value: string) {
    this._virtualMachine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine;
  }
}

export class NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList extends cdktn.ComplexList {
  public internalValue? : NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[] | cdktn.IResolvable

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
  public get(index: number): NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference {
    return new NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConnectivitySpokeLinkedRouterApplianceInstances {
  /**
  * Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}
  */
  readonly excludeExportRanges?: string[];
  /**
  * Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#exclude_import_ranges NetworkConnectivitySpoke#exclude_import_ranges}
  */
  readonly excludeImportRanges?: string[];
  /**
  * Dynamic routes fully encompassed by include export ranges are included during export to hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#include_export_ranges NetworkConnectivitySpoke#include_export_ranges}
  */
  readonly includeExportRanges?: string[];
  /**
  * Hub routes fully encompassed by include import ranges are included during import from hub.
  * "ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#include_import_ranges NetworkConnectivitySpoke#include_import_ranges}
  */
  readonly includeImportRanges?: string[];
  /**
  * A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}
  */
  readonly siteToSiteDataTransfer: boolean | cdktn.IResolvable;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#instances NetworkConnectivitySpoke#instances}
  */
  readonly instances: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[] | cdktn.IResolvable;
}

export function networkConnectivitySpokeLinkedRouterApplianceInstancesToTerraform(struct?: NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference | NetworkConnectivitySpokeLinkedRouterApplianceInstances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeExportRanges),
    exclude_import_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeImportRanges),
    include_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeExportRanges),
    include_import_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeImportRanges),
    site_to_site_data_transfer: cdktn.booleanToTerraform(struct!.siteToSiteDataTransfer),
    instances: cdktn.listMapper(networkConnectivitySpokeLinkedRouterApplianceInstancesInstancesToTerraform, true)(struct!.instances),
  }
}


export function networkConnectivitySpokeLinkedRouterApplianceInstancesToHclTerraform(struct?: NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference | NetworkConnectivitySpokeLinkedRouterApplianceInstances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_import_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeImportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_import_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeImportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_to_site_data_transfer: {
      value: cdktn.booleanToHclTerraform(struct!.siteToSiteDataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instances: {
      value: cdktn.listMapperHcl(networkConnectivitySpokeLinkedRouterApplianceInstancesInstancesToHclTerraform, true)(struct!.instances),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedRouterApplianceInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeExportRanges = this._excludeExportRanges;
    }
    if (this._excludeImportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeImportRanges = this._excludeImportRanges;
    }
    if (this._includeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExportRanges = this._includeExportRanges;
    }
    if (this._includeImportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeImportRanges = this._includeImportRanges;
    }
    if (this._siteToSiteDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteDataTransfer = this._siteToSiteDataTransfer;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedRouterApplianceInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeExportRanges = undefined;
      this._excludeImportRanges = undefined;
      this._includeExportRanges = undefined;
      this._includeImportRanges = undefined;
      this._siteToSiteDataTransfer = undefined;
      this._instances.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeExportRanges = value.excludeExportRanges;
      this._excludeImportRanges = value.excludeImportRanges;
      this._includeExportRanges = value.includeExportRanges;
      this._includeImportRanges = value.includeImportRanges;
      this._siteToSiteDataTransfer = value.siteToSiteDataTransfer;
      this._instances.internalValue = value.instances;
    }
  }

  // exclude_export_ranges - computed: false, optional: true, required: false
  private _excludeExportRanges?: string[]; 
  public get excludeExportRanges() {
    return this.getListAttribute('exclude_export_ranges');
  }
  public set excludeExportRanges(value: string[]) {
    this._excludeExportRanges = value;
  }
  public resetExcludeExportRanges() {
    this._excludeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeExportRangesInput() {
    return this._excludeExportRanges;
  }

  // exclude_import_ranges - computed: false, optional: true, required: false
  private _excludeImportRanges?: string[]; 
  public get excludeImportRanges() {
    return this.getListAttribute('exclude_import_ranges');
  }
  public set excludeImportRanges(value: string[]) {
    this._excludeImportRanges = value;
  }
  public resetExcludeImportRanges() {
    this._excludeImportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeImportRangesInput() {
    return this._excludeImportRanges;
  }

  // include_export_ranges - computed: false, optional: true, required: false
  private _includeExportRanges?: string[]; 
  public get includeExportRanges() {
    return this.getListAttribute('include_export_ranges');
  }
  public set includeExportRanges(value: string[]) {
    this._includeExportRanges = value;
  }
  public resetIncludeExportRanges() {
    this._includeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExportRangesInput() {
    return this._includeExportRanges;
  }

  // include_import_ranges - computed: false, optional: true, required: false
  private _includeImportRanges?: string[]; 
  public get includeImportRanges() {
    return this.getListAttribute('include_import_ranges');
  }
  public set includeImportRanges(value: string[]) {
    this._includeImportRanges = value;
  }
  public resetIncludeImportRanges() {
    this._includeImportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeImportRangesInput() {
    return this._includeImportRanges;
  }

  // site_to_site_data_transfer - computed: false, optional: false, required: true
  private _siteToSiteDataTransfer?: boolean | cdktn.IResolvable; 
  public get siteToSiteDataTransfer() {
    return this.getBooleanAttribute('site_to_site_data_transfer');
  }
  public set siteToSiteDataTransfer(value: boolean | cdktn.IResolvable) {
    this._siteToSiteDataTransfer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteDataTransferInput() {
    return this._siteToSiteDataTransfer;
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[] | cdktn.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }
}
export interface NetworkConnectivitySpokeLinkedVpcNetwork {
  /**
  * IP ranges encompassing the subnets to be excluded from peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}
  */
  readonly excludeExportRanges?: string[];
  /**
  * IP ranges allowed to be included from peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#include_export_ranges NetworkConnectivitySpoke#include_export_ranges}
  */
  readonly includeExportRanges?: string[];
  /**
  * The URI of the VPC network resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#uri NetworkConnectivitySpoke#uri}
  */
  readonly uri: string;
}

export function networkConnectivitySpokeLinkedVpcNetworkToTerraform(struct?: NetworkConnectivitySpokeLinkedVpcNetworkOutputReference | NetworkConnectivitySpokeLinkedVpcNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeExportRanges),
    include_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeExportRanges),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function networkConnectivitySpokeLinkedVpcNetworkToHclTerraform(struct?: NetworkConnectivitySpokeLinkedVpcNetworkOutputReference | NetworkConnectivitySpokeLinkedVpcNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectivitySpokeLinkedVpcNetworkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedVpcNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeExportRanges = this._excludeExportRanges;
    }
    if (this._includeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExportRanges = this._includeExportRanges;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedVpcNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeExportRanges = undefined;
      this._includeExportRanges = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeExportRanges = value.excludeExportRanges;
      this._includeExportRanges = value.includeExportRanges;
      this._uri = value.uri;
    }
  }

  // exclude_export_ranges - computed: false, optional: true, required: false
  private _excludeExportRanges?: string[]; 
  public get excludeExportRanges() {
    return this.getListAttribute('exclude_export_ranges');
  }
  public set excludeExportRanges(value: string[]) {
    this._excludeExportRanges = value;
  }
  public resetExcludeExportRanges() {
    this._excludeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeExportRangesInput() {
    return this._excludeExportRanges;
  }

  // include_export_ranges - computed: false, optional: true, required: false
  private _includeExportRanges?: string[]; 
  public get includeExportRanges() {
    return this.getListAttribute('include_export_ranges');
  }
  public set includeExportRanges(value: string[]) {
    this._includeExportRanges = value;
  }
  public resetIncludeExportRanges() {
    this._includeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExportRangesInput() {
    return this._includeExportRanges;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface NetworkConnectivitySpokeLinkedVpnTunnels {
  /**
  * Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}
  */
  readonly excludeExportRanges?: string[];
  /**
  * Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#exclude_import_ranges NetworkConnectivitySpoke#exclude_import_ranges}
  */
  readonly excludeImportRanges?: string[];
  /**
  * Dynamic routes fully encompassed by include export ranges are included during export to hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#include_export_ranges NetworkConnectivitySpoke#include_export_ranges}
  */
  readonly includeExportRanges?: string[];
  /**
  * Hub routes fully encompassed by include import ranges are included during import from hub.
  * "ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#include_import_ranges NetworkConnectivitySpoke#include_import_ranges}
  */
  readonly includeImportRanges?: string[];
  /**
  * A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}
  */
  readonly siteToSiteDataTransfer: boolean | cdktn.IResolvable;
  /**
  * The URIs of linked VPN tunnel resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}
  */
  readonly uris: string[];
}

export function networkConnectivitySpokeLinkedVpnTunnelsToTerraform(struct?: NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference | NetworkConnectivitySpokeLinkedVpnTunnels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeExportRanges),
    exclude_import_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeImportRanges),
    include_export_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeExportRanges),
    include_import_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeImportRanges),
    site_to_site_data_transfer: cdktn.booleanToTerraform(struct!.siteToSiteDataTransfer),
    uris: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.uris),
  }
}


export function networkConnectivitySpokeLinkedVpnTunnelsToHclTerraform(struct?: NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference | NetworkConnectivitySpokeLinkedVpnTunnels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_import_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeImportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_export_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeExportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_import_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeImportRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_to_site_data_transfer: {
      value: cdktn.booleanToHclTerraform(struct!.siteToSiteDataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uris: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectivitySpokeLinkedVpnTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeExportRanges = this._excludeExportRanges;
    }
    if (this._excludeImportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeImportRanges = this._excludeImportRanges;
    }
    if (this._includeExportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExportRanges = this._includeExportRanges;
    }
    if (this._includeImportRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeImportRanges = this._includeImportRanges;
    }
    if (this._siteToSiteDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteDataTransfer = this._siteToSiteDataTransfer;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeLinkedVpnTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeExportRanges = undefined;
      this._excludeImportRanges = undefined;
      this._includeExportRanges = undefined;
      this._includeImportRanges = undefined;
      this._siteToSiteDataTransfer = undefined;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeExportRanges = value.excludeExportRanges;
      this._excludeImportRanges = value.excludeImportRanges;
      this._includeExportRanges = value.includeExportRanges;
      this._includeImportRanges = value.includeImportRanges;
      this._siteToSiteDataTransfer = value.siteToSiteDataTransfer;
      this._uris = value.uris;
    }
  }

  // exclude_export_ranges - computed: false, optional: true, required: false
  private _excludeExportRanges?: string[]; 
  public get excludeExportRanges() {
    return this.getListAttribute('exclude_export_ranges');
  }
  public set excludeExportRanges(value: string[]) {
    this._excludeExportRanges = value;
  }
  public resetExcludeExportRanges() {
    this._excludeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeExportRangesInput() {
    return this._excludeExportRanges;
  }

  // exclude_import_ranges - computed: false, optional: true, required: false
  private _excludeImportRanges?: string[]; 
  public get excludeImportRanges() {
    return this.getListAttribute('exclude_import_ranges');
  }
  public set excludeImportRanges(value: string[]) {
    this._excludeImportRanges = value;
  }
  public resetExcludeImportRanges() {
    this._excludeImportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeImportRangesInput() {
    return this._excludeImportRanges;
  }

  // include_export_ranges - computed: false, optional: true, required: false
  private _includeExportRanges?: string[]; 
  public get includeExportRanges() {
    return this.getListAttribute('include_export_ranges');
  }
  public set includeExportRanges(value: string[]) {
    this._includeExportRanges = value;
  }
  public resetIncludeExportRanges() {
    this._includeExportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExportRangesInput() {
    return this._includeExportRanges;
  }

  // include_import_ranges - computed: false, optional: true, required: false
  private _includeImportRanges?: string[]; 
  public get includeImportRanges() {
    return this.getListAttribute('include_import_ranges');
  }
  public set includeImportRanges(value: string[]) {
    this._includeImportRanges = value;
  }
  public resetIncludeImportRanges() {
    this._includeImportRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeImportRangesInput() {
    return this._includeImportRanges;
  }

  // site_to_site_data_transfer - computed: false, optional: false, required: true
  private _siteToSiteDataTransfer?: boolean | cdktn.IResolvable; 
  public get siteToSiteDataTransfer() {
    return this.getBooleanAttribute('site_to_site_data_transfer');
  }
  public set siteToSiteDataTransfer(value: boolean | cdktn.IResolvable) {
    this._siteToSiteDataTransfer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteDataTransferInput() {
    return this._siteToSiteDataTransfer;
  }

  // uris - computed: false, optional: false, required: true
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface NetworkConnectivitySpokeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#create NetworkConnectivitySpoke#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#update NetworkConnectivitySpoke#update}
  */
  readonly update?: string;
}

export function networkConnectivitySpokeTimeoutsToTerraform(struct?: NetworkConnectivitySpokeTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function networkConnectivitySpokeTimeoutsToHclTerraform(struct?: NetworkConnectivitySpokeTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectivitySpokeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkConnectivitySpokeTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectivitySpokeTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke google_network_connectivity_spoke}
*/
export class NetworkConnectivitySpoke extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_connectivity_spoke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkConnectivitySpoke resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkConnectivitySpoke to import
  * @param importFromId The id of the existing NetworkConnectivitySpoke that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkConnectivitySpoke to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_connectivity_spoke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_connectivity_spoke google_network_connectivity_spoke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConnectivitySpokeConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConnectivitySpokeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_connectivity_spoke',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._group = config.group;
    this._hub = config.hub;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._linkedInterconnectAttachments.internalValue = config.linkedInterconnectAttachments;
    this._linkedProducerVpcNetwork.internalValue = config.linkedProducerVpcNetwork;
    this._linkedRouterApplianceInstances.internalValue = config.linkedRouterApplianceInstances;
    this._linkedVpcNetwork.internalValue = config.linkedVpcNetwork;
    this._linkedVpnTunnels.internalValue = config.linkedVpnTunnels;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // hub - computed: false, optional: false, required: true
  private _hub?: string; 
  public get hub() {
    return this.getStringAttribute('hub');
  }
  public set hub(value: string) {
    this._hub = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubInput() {
    return this._hub;
  }

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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // reasons - computed: true, optional: false, required: false
  private _reasons = new NetworkConnectivitySpokeReasonsList(this, "reasons", false);
  public get reasons() {
    return this._reasons;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // linked_interconnect_attachments - computed: false, optional: true, required: false
  private _linkedInterconnectAttachments = new NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference(this, "linked_interconnect_attachments");
  public get linkedInterconnectAttachments() {
    return this._linkedInterconnectAttachments;
  }
  public putLinkedInterconnectAttachments(value: NetworkConnectivitySpokeLinkedInterconnectAttachments) {
    this._linkedInterconnectAttachments.internalValue = value;
  }
  public resetLinkedInterconnectAttachments() {
    this._linkedInterconnectAttachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedInterconnectAttachmentsInput() {
    return this._linkedInterconnectAttachments.internalValue;
  }

  // linked_producer_vpc_network - computed: false, optional: true, required: false
  private _linkedProducerVpcNetwork = new NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference(this, "linked_producer_vpc_network");
  public get linkedProducerVpcNetwork() {
    return this._linkedProducerVpcNetwork;
  }
  public putLinkedProducerVpcNetwork(value: NetworkConnectivitySpokeLinkedProducerVpcNetwork) {
    this._linkedProducerVpcNetwork.internalValue = value;
  }
  public resetLinkedProducerVpcNetwork() {
    this._linkedProducerVpcNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedProducerVpcNetworkInput() {
    return this._linkedProducerVpcNetwork.internalValue;
  }

  // linked_router_appliance_instances - computed: false, optional: true, required: false
  private _linkedRouterApplianceInstances = new NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference(this, "linked_router_appliance_instances");
  public get linkedRouterApplianceInstances() {
    return this._linkedRouterApplianceInstances;
  }
  public putLinkedRouterApplianceInstances(value: NetworkConnectivitySpokeLinkedRouterApplianceInstances) {
    this._linkedRouterApplianceInstances.internalValue = value;
  }
  public resetLinkedRouterApplianceInstances() {
    this._linkedRouterApplianceInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRouterApplianceInstancesInput() {
    return this._linkedRouterApplianceInstances.internalValue;
  }

  // linked_vpc_network - computed: false, optional: true, required: false
  private _linkedVpcNetwork = new NetworkConnectivitySpokeLinkedVpcNetworkOutputReference(this, "linked_vpc_network");
  public get linkedVpcNetwork() {
    return this._linkedVpcNetwork;
  }
  public putLinkedVpcNetwork(value: NetworkConnectivitySpokeLinkedVpcNetwork) {
    this._linkedVpcNetwork.internalValue = value;
  }
  public resetLinkedVpcNetwork() {
    this._linkedVpcNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedVpcNetworkInput() {
    return this._linkedVpcNetwork.internalValue;
  }

  // linked_vpn_tunnels - computed: false, optional: true, required: false
  private _linkedVpnTunnels = new NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference(this, "linked_vpn_tunnels");
  public get linkedVpnTunnels() {
    return this._linkedVpnTunnels;
  }
  public putLinkedVpnTunnels(value: NetworkConnectivitySpokeLinkedVpnTunnels) {
    this._linkedVpnTunnels.internalValue = value;
  }
  public resetLinkedVpnTunnels() {
    this._linkedVpnTunnels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedVpnTunnelsInput() {
    return this._linkedVpnTunnels.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkConnectivitySpokeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkConnectivitySpokeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      group: cdktn.stringToTerraform(this._group),
      hub: cdktn.stringToTerraform(this._hub),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      linked_interconnect_attachments: networkConnectivitySpokeLinkedInterconnectAttachmentsToTerraform(this._linkedInterconnectAttachments.internalValue),
      linked_producer_vpc_network: networkConnectivitySpokeLinkedProducerVpcNetworkToTerraform(this._linkedProducerVpcNetwork.internalValue),
      linked_router_appliance_instances: networkConnectivitySpokeLinkedRouterApplianceInstancesToTerraform(this._linkedRouterApplianceInstances.internalValue),
      linked_vpc_network: networkConnectivitySpokeLinkedVpcNetworkToTerraform(this._linkedVpcNetwork.internalValue),
      linked_vpn_tunnels: networkConnectivitySpokeLinkedVpnTunnelsToTerraform(this._linkedVpnTunnels.internalValue),
      timeouts: networkConnectivitySpokeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktn.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub: {
        value: cdktn.stringToHclTerraform(this._hub),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      linked_interconnect_attachments: {
        value: networkConnectivitySpokeLinkedInterconnectAttachmentsToHclTerraform(this._linkedInterconnectAttachments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkConnectivitySpokeLinkedInterconnectAttachmentsList",
      },
      linked_producer_vpc_network: {
        value: networkConnectivitySpokeLinkedProducerVpcNetworkToHclTerraform(this._linkedProducerVpcNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkConnectivitySpokeLinkedProducerVpcNetworkList",
      },
      linked_router_appliance_instances: {
        value: networkConnectivitySpokeLinkedRouterApplianceInstancesToHclTerraform(this._linkedRouterApplianceInstances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkConnectivitySpokeLinkedRouterApplianceInstancesList",
      },
      linked_vpc_network: {
        value: networkConnectivitySpokeLinkedVpcNetworkToHclTerraform(this._linkedVpcNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkConnectivitySpokeLinkedVpcNetworkList",
      },
      linked_vpn_tunnels: {
        value: networkConnectivitySpokeLinkedVpnTunnelsToHclTerraform(this._linkedVpnTunnels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkConnectivitySpokeLinkedVpnTunnelsList",
      },
      timeouts: {
        value: networkConnectivitySpokeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkConnectivitySpokeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

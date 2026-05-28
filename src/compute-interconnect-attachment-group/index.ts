/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeInterconnectAttachmentGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#deletion_policy ComputeInterconnectAttachmentGroup#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#description ComputeInterconnectAttachmentGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#id ComputeInterconnectAttachmentGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The URL of an InterconnectGroup that groups these Attachments'
  * Interconnects. Customers do not need to set this unless directed by
  * Google Support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#interconnect_group ComputeInterconnectAttachmentGroup#interconnect_group}
  */
  readonly interconnectGroup?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be
  * 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
  * character must be a lowercase letter, and all following characters must be a dash,
  * lowercase letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#name ComputeInterconnectAttachmentGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#project ComputeInterconnectAttachmentGroup#project}
  */
  readonly project?: string;
  /**
  * attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#attachments ComputeInterconnectAttachmentGroup#attachments}
  */
  readonly attachments?: ComputeInterconnectAttachmentGroupAttachments[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#intent ComputeInterconnectAttachmentGroup#intent}
  */
  readonly intent: ComputeInterconnectAttachmentGroupIntent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#timeouts ComputeInterconnectAttachmentGroup#timeouts}
  */
  readonly timeouts?: ComputeInterconnectAttachmentGroupTimeouts;
}
export interface ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers {
}

export function computeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersToTerraform(struct?: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersToHclTerraform(struct?: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachments - computed: true, optional: false, required: false
  public get attachments() {
    return this.getListAttribute('attachments');
  }

  // blocker_type - computed: true, optional: false, required: false
  public get blockerType() {
    return this.getStringAttribute('blocker_type');
  }

  // documentation_link - computed: true, optional: false, required: false
  public get documentationLink() {
    return this.getStringAttribute('documentation_link');
  }

  // explanation - computed: true, optional: false, required: false
  public get explanation() {
    return this.getStringAttribute('explanation');
  }

  // metros - computed: true, optional: false, required: false
  public get metros() {
    return this.getListAttribute('metros');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}

export class ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList extends cdktn.ComplexList {

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
  public get(index: number): ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference {
    return new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla {
}

export function computeInterconnectAttachmentGroupConfiguredAvailabilitySlaToTerraform(struct?: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentGroupConfiguredAvailabilitySlaToHclTerraform(struct?: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_sla - computed: true, optional: false, required: false
  public get effectiveSla() {
    return this.getStringAttribute('effective_sla');
  }

  // intended_sla_blockers - computed: true, optional: false, required: false
  private _intendedSlaBlockers = new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList(this, "intended_sla_blockers", false);
  public get intendedSlaBlockers() {
    return this._intendedSlaBlockers;
  }
}

export class ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList extends cdktn.ComplexList {

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
  public get(index: number): ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference {
    return new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupConfigured {
}

export function computeInterconnectAttachmentGroupConfiguredToTerraform(struct?: ComputeInterconnectAttachmentGroupConfigured): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentGroupConfiguredToHclTerraform(struct?: ComputeInterconnectAttachmentGroupConfigured): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentGroupConfiguredOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupConfigured | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupConfigured | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_sla - computed: true, optional: false, required: false
  private _availabilitySla = new ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList(this, "availability_sla", false);
  public get availabilitySla() {
    return this._availabilitySla;
  }
}

export class ComputeInterconnectAttachmentGroupConfiguredList extends cdktn.ComplexList {

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
  public get(index: number): ComputeInterconnectAttachmentGroupConfiguredOutputReference {
    return new ComputeInterconnectAttachmentGroupConfiguredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones {
}

export function computeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesToTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesToHclTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment - computed: true, optional: false, required: false
  public get attachment() {
    return this.getListAttribute('attachment');
  }

  // attachments - computed: true, optional: false, required: false
  public get attachments() {
    return this.getListAttribute('attachments');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList extends cdktn.ComplexList {

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
  public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference {
    return new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities {
}

export function computeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesToTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesToHclTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // facility - computed: true, optional: false, required: false
  public get facility() {
    return this.getStringAttribute('facility');
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
}

export class ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList extends cdktn.ComplexList {

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
  public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference {
    return new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros {
}

export function computeInterconnectAttachmentGroupLogicalStructureRegionsMetrosToTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentGroupLogicalStructureRegionsMetrosToHclTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // facilities - computed: true, optional: false, required: false
  private _facilities = new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList(this, "facilities", false);
  public get facilities() {
    return this._facilities;
  }

  // metro - computed: true, optional: false, required: false
  public get metro() {
    return this.getStringAttribute('metro');
  }
}

export class ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList extends cdktn.ComplexList {

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
  public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference {
    return new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupLogicalStructureRegions {
}

export function computeInterconnectAttachmentGroupLogicalStructureRegionsToTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructureRegions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentGroupLogicalStructureRegionsToHclTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructureRegions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupLogicalStructureRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupLogicalStructureRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metros - computed: true, optional: false, required: false
  private _metros = new ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList(this, "metros", false);
  public get metros() {
    return this._metros;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class ComputeInterconnectAttachmentGroupLogicalStructureRegionsList extends cdktn.ComplexList {

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
  public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference {
    return new ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupLogicalStructure {
}

export function computeInterconnectAttachmentGroupLogicalStructureToTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentGroupLogicalStructureToHclTerraform(struct?: ComputeInterconnectAttachmentGroupLogicalStructure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentGroupLogicalStructureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupLogicalStructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupLogicalStructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new ComputeInterconnectAttachmentGroupLogicalStructureRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class ComputeInterconnectAttachmentGroupLogicalStructureList extends cdktn.ComplexList {

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
  public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureOutputReference {
    return new ComputeInterconnectAttachmentGroupLogicalStructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#attachment ComputeInterconnectAttachmentGroup#attachment}
  */
  readonly attachment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#name ComputeInterconnectAttachmentGroup#name}
  */
  readonly name: string;
}

export function computeInterconnectAttachmentGroupAttachmentsToTerraform(struct?: ComputeInterconnectAttachmentGroupAttachments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachment: cdktn.stringToTerraform(struct!.attachment),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function computeInterconnectAttachmentGroupAttachmentsToHclTerraform(struct?: ComputeInterconnectAttachmentGroupAttachments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachment: {
      value: cdktn.stringToHclTerraform(struct!.attachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInterconnectAttachmentGroupAttachmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeInterconnectAttachmentGroupAttachments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachment = this._attachment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupAttachments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachment = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachment = value.attachment;
      this._name = value.name;
    }
  }

  // attachment - computed: false, optional: true, required: false
  private _attachment?: string; 
  public get attachment() {
    return this.getStringAttribute('attachment');
  }
  public set attachment(value: string) {
    this._attachment = value;
  }
  public resetAttachment() {
    this._attachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment;
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
}

export class ComputeInterconnectAttachmentGroupAttachmentsList extends cdktn.ComplexList {
  public internalValue? : ComputeInterconnectAttachmentGroupAttachments[] | cdktn.IResolvable

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
  public get(index: number): ComputeInterconnectAttachmentGroupAttachmentsOutputReference {
    return new ComputeInterconnectAttachmentGroupAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentGroupIntent {
  /**
  * Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#availability_sla ComputeInterconnectAttachmentGroup#availability_sla}
  */
  readonly availabilitySla?: string;
}

export function computeInterconnectAttachmentGroupIntentToTerraform(struct?: ComputeInterconnectAttachmentGroupIntentOutputReference | ComputeInterconnectAttachmentGroupIntent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_sla: cdktn.stringToTerraform(struct!.availabilitySla),
  }
}


export function computeInterconnectAttachmentGroupIntentToHclTerraform(struct?: ComputeInterconnectAttachmentGroupIntentOutputReference | ComputeInterconnectAttachmentGroupIntent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_sla: {
      value: cdktn.stringToHclTerraform(struct!.availabilitySla),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInterconnectAttachmentGroupIntentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInterconnectAttachmentGroupIntent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilitySla !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilitySla = this._availabilitySla;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentGroupIntent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilitySla = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilitySla = value.availabilitySla;
    }
  }

  // availability_sla - computed: false, optional: true, required: false
  private _availabilitySla?: string; 
  public get availabilitySla() {
    return this.getStringAttribute('availability_sla');
  }
  public set availabilitySla(value: string) {
    this._availabilitySla = value;
  }
  public resetAvailabilitySla() {
    this._availabilitySla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySlaInput() {
    return this._availabilitySla;
  }
}
export interface ComputeInterconnectAttachmentGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#create ComputeInterconnectAttachmentGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#delete ComputeInterconnectAttachmentGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#update ComputeInterconnectAttachmentGroup#update}
  */
  readonly update?: string;
}

export function computeInterconnectAttachmentGroupTimeoutsToTerraform(struct?: ComputeInterconnectAttachmentGroupTimeouts | cdktn.IResolvable): any {
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


export function computeInterconnectAttachmentGroupTimeoutsToHclTerraform(struct?: ComputeInterconnectAttachmentGroupTimeouts | cdktn.IResolvable): any {
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

export class ComputeInterconnectAttachmentGroupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInterconnectAttachmentGroupTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeInterconnectAttachmentGroupTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group google_compute_interconnect_attachment_group}
*/
export class ComputeInterconnectAttachmentGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_interconnect_attachment_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeInterconnectAttachmentGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInterconnectAttachmentGroup to import
  * @param importFromId The id of the existing ComputeInterconnectAttachmentGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInterconnectAttachmentGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_interconnect_attachment_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_interconnect_attachment_group google_compute_interconnect_attachment_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInterconnectAttachmentGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInterconnectAttachmentGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_interconnect_attachment_group',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
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
    this._id = config.id;
    this._interconnectGroup = config.interconnectGroup;
    this._name = config.name;
    this._project = config.project;
    this._attachments.internalValue = config.attachments;
    this._intent.internalValue = config.intent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configured - computed: true, optional: false, required: false
  private _configured = new ComputeInterconnectAttachmentGroupConfiguredList(this, "configured", false);
  public get configured() {
    return this._configured;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // interconnect_group - computed: false, optional: true, required: false
  private _interconnectGroup?: string; 
  public get interconnectGroup() {
    return this.getStringAttribute('interconnect_group');
  }
  public set interconnectGroup(value: string) {
    this._interconnectGroup = value;
  }
  public resetInterconnectGroup() {
    this._interconnectGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectGroupInput() {
    return this._interconnectGroup;
  }

  // logical_structure - computed: true, optional: false, required: false
  private _logicalStructure = new ComputeInterconnectAttachmentGroupLogicalStructureList(this, "logical_structure", false);
  public get logicalStructure() {
    return this._logicalStructure;
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

  // attachments - computed: false, optional: true, required: false
  private _attachments = new ComputeInterconnectAttachmentGroupAttachmentsList(this, "attachments", true);
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: ComputeInterconnectAttachmentGroupAttachments[] | cdktn.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // intent - computed: false, optional: false, required: true
  private _intent = new ComputeInterconnectAttachmentGroupIntentOutputReference(this, "intent");
  public get intent() {
    return this._intent;
  }
  public putIntent(value: ComputeInterconnectAttachmentGroupIntent) {
    this._intent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInterconnectAttachmentGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInterconnectAttachmentGroupTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      interconnect_group: cdktn.stringToTerraform(this._interconnectGroup),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      attachments: cdktn.listMapper(computeInterconnectAttachmentGroupAttachmentsToTerraform, true)(this._attachments.internalValue),
      intent: computeInterconnectAttachmentGroupIntentToTerraform(this._intent.internalValue),
      timeouts: computeInterconnectAttachmentGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interconnect_group: {
        value: cdktn.stringToHclTerraform(this._interconnectGroup),
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
      attachments: {
        value: cdktn.listMapperHcl(computeInterconnectAttachmentGroupAttachmentsToHclTerraform, true)(this._attachments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInterconnectAttachmentGroupAttachmentsList",
      },
      intent: {
        value: computeInterconnectAttachmentGroupIntentToHclTerraform(this._intent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInterconnectAttachmentGroupIntentList",
      },
      timeouts: {
        value: computeInterconnectAttachmentGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInterconnectAttachmentGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

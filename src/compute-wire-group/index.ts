/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeWireGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Indicates whether the wire group is administratively enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#admin_enabled ComputeWireGroup#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktn.IResolvable;
  /**
  * Required cross site network to which wire group belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#cross_site_network ComputeWireGroup#cross_site_network}
  */
  readonly crossSiteNetwork: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#deletion_policy ComputeWireGroup#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#description ComputeWireGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#id ComputeWireGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be
  * 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
  * character must be a lowercase letter, and all following characters must be a dash,
  * lowercase letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#name ComputeWireGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#project ComputeWireGroup#project}
  */
  readonly project?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#endpoints ComputeWireGroup#endpoints}
  */
  readonly endpoints?: ComputeWireGroupEndpoints[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#timeouts ComputeWireGroup#timeouts}
  */
  readonly timeouts?: ComputeWireGroupTimeouts;
  /**
  * wire_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#wire_properties ComputeWireGroup#wire_properties}
  */
  readonly wireProperties?: ComputeWireGroupWireProperties;
}
export interface ComputeWireGroupTopologyEndpoints {
}

export function computeWireGroupTopologyEndpointsToTerraform(struct?: ComputeWireGroupTopologyEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeWireGroupTopologyEndpointsToHclTerraform(struct?: ComputeWireGroupTopologyEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeWireGroupTopologyEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeWireGroupTopologyEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeWireGroupTopologyEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }
}

export class ComputeWireGroupTopologyEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): ComputeWireGroupTopologyEndpointsOutputReference {
    return new ComputeWireGroupTopologyEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeWireGroupTopology {
}

export function computeWireGroupTopologyToTerraform(struct?: ComputeWireGroupTopology): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeWireGroupTopologyToHclTerraform(struct?: ComputeWireGroupTopology): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeWireGroupTopologyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeWireGroupTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeWireGroupTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new ComputeWireGroupTopologyEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
}

export class ComputeWireGroupTopologyList extends cdktn.ComplexList {

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
  public get(index: number): ComputeWireGroupTopologyOutputReference {
    return new ComputeWireGroupTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeWireGroupWiresEndpoints {
}

export function computeWireGroupWiresEndpointsToTerraform(struct?: ComputeWireGroupWiresEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeWireGroupWiresEndpointsToHclTerraform(struct?: ComputeWireGroupWiresEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeWireGroupWiresEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeWireGroupWiresEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeWireGroupWiresEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interconnect - computed: true, optional: false, required: false
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }

  // vlan_tag - computed: true, optional: false, required: false
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
}

export class ComputeWireGroupWiresEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): ComputeWireGroupWiresEndpointsOutputReference {
    return new ComputeWireGroupWiresEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeWireGroupWiresWireProperties {
}

export function computeWireGroupWiresWirePropertiesToTerraform(struct?: ComputeWireGroupWiresWireProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeWireGroupWiresWirePropertiesToHclTerraform(struct?: ComputeWireGroupWiresWireProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeWireGroupWiresWirePropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeWireGroupWiresWireProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeWireGroupWiresWireProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_unmetered - computed: true, optional: false, required: false
  public get bandwidthUnmetered() {
    return this.getNumberAttribute('bandwidth_unmetered');
  }

  // fault_response - computed: true, optional: false, required: false
  public get faultResponse() {
    return this.getStringAttribute('fault_response');
  }
}

export class ComputeWireGroupWiresWirePropertiesList extends cdktn.ComplexList {

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
  public get(index: number): ComputeWireGroupWiresWirePropertiesOutputReference {
    return new ComputeWireGroupWiresWirePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeWireGroupWires {
}

export function computeWireGroupWiresToTerraform(struct?: ComputeWireGroupWires): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeWireGroupWiresToHclTerraform(struct?: ComputeWireGroupWires): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeWireGroupWiresOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeWireGroupWires | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeWireGroupWires | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_enabled - computed: true, optional: false, required: false
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new ComputeWireGroupWiresEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // wire_properties - computed: true, optional: false, required: false
  private _wireProperties = new ComputeWireGroupWiresWirePropertiesList(this, "wire_properties", false);
  public get wireProperties() {
    return this._wireProperties;
  }
}

export class ComputeWireGroupWiresList extends cdktn.ComplexList {

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
  public get(index: number): ComputeWireGroupWiresOutputReference {
    return new ComputeWireGroupWiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeWireGroupEndpointsInterconnects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#interconnect ComputeWireGroup#interconnect}
  */
  readonly interconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#interconnect_name ComputeWireGroup#interconnect_name}
  */
  readonly interconnectName: string;
  /**
  * VLAN tags for the interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#vlan_tags ComputeWireGroup#vlan_tags}
  */
  readonly vlanTags?: number[];
}

export function computeWireGroupEndpointsInterconnectsToTerraform(struct?: ComputeWireGroupEndpointsInterconnects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interconnect: cdktn.stringToTerraform(struct!.interconnect),
    interconnect_name: cdktn.stringToTerraform(struct!.interconnectName),
    vlan_tags: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.vlanTags),
  }
}


export function computeWireGroupEndpointsInterconnectsToHclTerraform(struct?: ComputeWireGroupEndpointsInterconnects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interconnect: {
      value: cdktn.stringToHclTerraform(struct!.interconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interconnect_name: {
      value: cdktn.stringToHclTerraform(struct!.interconnectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_tags: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.vlanTags),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeWireGroupEndpointsInterconnectsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeWireGroupEndpointsInterconnects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnect = this._interconnect;
    }
    if (this._interconnectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnectName = this._interconnectName;
    }
    if (this._vlanTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTags = this._vlanTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeWireGroupEndpointsInterconnects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interconnect = undefined;
      this._interconnectName = undefined;
      this._vlanTags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interconnect = value.interconnect;
      this._interconnectName = value.interconnectName;
      this._vlanTags = value.vlanTags;
    }
  }

  // interconnect - computed: false, optional: true, required: false
  private _interconnect?: string; 
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }
  public set interconnect(value: string) {
    this._interconnect = value;
  }
  public resetInterconnect() {
    this._interconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect;
  }

  // interconnect_name - computed: false, optional: false, required: true
  private _interconnectName?: string; 
  public get interconnectName() {
    return this.getStringAttribute('interconnect_name');
  }
  public set interconnectName(value: string) {
    this._interconnectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectNameInput() {
    return this._interconnectName;
  }

  // vlan_tags - computed: false, optional: true, required: false
  private _vlanTags?: number[]; 
  public get vlanTags() {
    return this.getNumberListAttribute('vlan_tags');
  }
  public set vlanTags(value: number[]) {
    this._vlanTags = value;
  }
  public resetVlanTags() {
    this._vlanTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagsInput() {
    return this._vlanTags;
  }
}

export class ComputeWireGroupEndpointsInterconnectsList extends cdktn.ComplexList {
  public internalValue? : ComputeWireGroupEndpointsInterconnects[] | cdktn.IResolvable

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
  public get(index: number): ComputeWireGroupEndpointsInterconnectsOutputReference {
    return new ComputeWireGroupEndpointsInterconnectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeWireGroupEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#endpoint ComputeWireGroup#endpoint}
  */
  readonly endpoint: string;
  /**
  * interconnects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#interconnects ComputeWireGroup#interconnects}
  */
  readonly interconnects?: ComputeWireGroupEndpointsInterconnects[] | cdktn.IResolvable;
}

export function computeWireGroupEndpointsToTerraform(struct?: ComputeWireGroupEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    interconnects: cdktn.listMapper(computeWireGroupEndpointsInterconnectsToTerraform, true)(struct!.interconnects),
  }
}


export function computeWireGroupEndpointsToHclTerraform(struct?: ComputeWireGroupEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interconnects: {
      value: cdktn.listMapperHcl(computeWireGroupEndpointsInterconnectsToHclTerraform, true)(struct!.interconnects),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeWireGroupEndpointsInterconnectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeWireGroupEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeWireGroupEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._interconnects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnects = this._interconnects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeWireGroupEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._interconnects.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._interconnects.internalValue = value.interconnects;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // interconnects - computed: false, optional: true, required: false
  private _interconnects = new ComputeWireGroupEndpointsInterconnectsList(this, "interconnects", true);
  public get interconnects() {
    return this._interconnects;
  }
  public putInterconnects(value: ComputeWireGroupEndpointsInterconnects[] | cdktn.IResolvable) {
    this._interconnects.internalValue = value;
  }
  public resetInterconnects() {
    this._interconnects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectsInput() {
    return this._interconnects.internalValue;
  }
}

export class ComputeWireGroupEndpointsList extends cdktn.ComplexList {
  public internalValue? : ComputeWireGroupEndpoints[] | cdktn.IResolvable

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
  public get(index: number): ComputeWireGroupEndpointsOutputReference {
    return new ComputeWireGroupEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeWireGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#create ComputeWireGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#delete ComputeWireGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#update ComputeWireGroup#update}
  */
  readonly update?: string;
}

export function computeWireGroupTimeoutsToTerraform(struct?: ComputeWireGroupTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function computeWireGroupTimeoutsToHclTerraform(struct?: ComputeWireGroupTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ComputeWireGroupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeWireGroupTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeWireGroupTimeouts | cdktn.IResolvable | undefined) {
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
export interface ComputeWireGroupWireProperties {
  /**
  * The configuration of a wire's bandwidth allocation.
  * ALLOCATE_PER_WIRE: configures a separate unmetered bandwidth allocation (and associated charges) for each wire in the group.
  * SHARED_WITH_WIRE_GROUP: this is the default behavior, which configures one unmetered bandwidth allocation for the wire group. The unmetered bandwidth is divided equally across each wire in the group, but dynamic
  * throttling reallocates unused unmetered bandwidth from unused or underused wires to other wires in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#bandwidth_allocation ComputeWireGroup#bandwidth_allocation}
  */
  readonly bandwidthAllocation: string;
  /**
  * The unmetered bandwidth setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#bandwidth_unmetered ComputeWireGroup#bandwidth_unmetered}
  */
  readonly bandwidthUnmetered?: number;
  /**
  * Response when a fault is detected in a pseudowire:
  * NONE: default.
  * DISABLE_PORT: set the port line protocol down when inline probes detect a fault. This setting is only permitted on port mode pseudowires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#fault_response ComputeWireGroup#fault_response}
  */
  readonly faultResponse?: string;
}

export function computeWireGroupWirePropertiesToTerraform(struct?: ComputeWireGroupWirePropertiesOutputReference | ComputeWireGroupWireProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bandwidth_allocation: cdktn.stringToTerraform(struct!.bandwidthAllocation),
    bandwidth_unmetered: cdktn.numberToTerraform(struct!.bandwidthUnmetered),
    fault_response: cdktn.stringToTerraform(struct!.faultResponse),
  }
}


export function computeWireGroupWirePropertiesToHclTerraform(struct?: ComputeWireGroupWirePropertiesOutputReference | ComputeWireGroupWireProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bandwidth_allocation: {
      value: cdktn.stringToHclTerraform(struct!.bandwidthAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_unmetered: {
      value: cdktn.numberToHclTerraform(struct!.bandwidthUnmetered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fault_response: {
      value: cdktn.stringToHclTerraform(struct!.faultResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeWireGroupWirePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeWireGroupWireProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
    }
    if (this._bandwidthUnmetered !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthUnmetered = this._bandwidthUnmetered;
    }
    if (this._faultResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultResponse = this._faultResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeWireGroupWireProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthAllocation = undefined;
      this._bandwidthUnmetered = undefined;
      this._faultResponse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthAllocation = value.bandwidthAllocation;
      this._bandwidthUnmetered = value.bandwidthUnmetered;
      this._faultResponse = value.faultResponse;
    }
  }

  // bandwidth_allocation - computed: false, optional: false, required: true
  private _bandwidthAllocation?: string; 
  public get bandwidthAllocation() {
    return this.getStringAttribute('bandwidth_allocation');
  }
  public set bandwidthAllocation(value: string) {
    this._bandwidthAllocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAllocationInput() {
    return this._bandwidthAllocation;
  }

  // bandwidth_unmetered - computed: false, optional: true, required: false
  private _bandwidthUnmetered?: number; 
  public get bandwidthUnmetered() {
    return this.getNumberAttribute('bandwidth_unmetered');
  }
  public set bandwidthUnmetered(value: number) {
    this._bandwidthUnmetered = value;
  }
  public resetBandwidthUnmetered() {
    this._bandwidthUnmetered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUnmeteredInput() {
    return this._bandwidthUnmetered;
  }

  // fault_response - computed: false, optional: true, required: false
  private _faultResponse?: string; 
  public get faultResponse() {
    return this.getStringAttribute('fault_response');
  }
  public set faultResponse(value: string) {
    this._faultResponse = value;
  }
  public resetFaultResponse() {
    this._faultResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultResponseInput() {
    return this._faultResponse;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group google_compute_wire_group}
*/
export class ComputeWireGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_wire_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeWireGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeWireGroup to import
  * @param importFromId The id of the existing ComputeWireGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeWireGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_wire_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_wire_group google_compute_wire_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeWireGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeWireGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_wire_group',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
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
    this._adminEnabled = config.adminEnabled;
    this._crossSiteNetwork = config.crossSiteNetwork;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._endpoints.internalValue = config.endpoints;
    this._timeouts.internalValue = config.timeouts;
    this._wireProperties.internalValue = config.wireProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktn.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktn.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // cross_site_network - computed: false, optional: false, required: true
  private _crossSiteNetwork?: string; 
  public get crossSiteNetwork() {
    return this.getStringAttribute('cross_site_network');
  }
  public set crossSiteNetwork(value: string) {
    this._crossSiteNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSiteNetworkInput() {
    return this._crossSiteNetwork;
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

  // topology - computed: true, optional: false, required: false
  private _topology = new ComputeWireGroupTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }

  // wires - computed: true, optional: false, required: false
  private _wires = new ComputeWireGroupWiresList(this, "wires", false);
  public get wires() {
    return this._wires;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new ComputeWireGroupEndpointsList(this, "endpoints", true);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: ComputeWireGroupEndpoints[] | cdktn.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeWireGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeWireGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wire_properties - computed: false, optional: true, required: false
  private _wireProperties = new ComputeWireGroupWirePropertiesOutputReference(this, "wire_properties");
  public get wireProperties() {
    return this._wireProperties;
  }
  public putWireProperties(value: ComputeWireGroupWireProperties) {
    this._wireProperties.internalValue = value;
  }
  public resetWireProperties() {
    this._wireProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirePropertiesInput() {
    return this._wireProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_enabled: cdktn.booleanToTerraform(this._adminEnabled),
      cross_site_network: cdktn.stringToTerraform(this._crossSiteNetwork),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      endpoints: cdktn.listMapper(computeWireGroupEndpointsToTerraform, true)(this._endpoints.internalValue),
      timeouts: computeWireGroupTimeoutsToTerraform(this._timeouts.internalValue),
      wire_properties: computeWireGroupWirePropertiesToTerraform(this._wireProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_enabled: {
        value: cdktn.booleanToHclTerraform(this._adminEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cross_site_network: {
        value: cdktn.stringToHclTerraform(this._crossSiteNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      endpoints: {
        value: cdktn.listMapperHcl(computeWireGroupEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeWireGroupEndpointsList",
      },
      timeouts: {
        value: computeWireGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeWireGroupTimeouts",
      },
      wire_properties: {
        value: computeWireGroupWirePropertiesToHclTerraform(this._wireProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeWireGroupWirePropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

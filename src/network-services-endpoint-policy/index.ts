/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkServicesEndpointPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#authorization_policy NetworkServicesEndpointPolicy#authorization_policy}
  */
  readonly authorizationPolicy?: string;
  /**
  * A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#client_tls_policy NetworkServicesEndpointPolicy#client_tls_policy}
  */
  readonly clientTlsPolicy?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#deletion_policy NetworkServicesEndpointPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#description NetworkServicesEndpointPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#id NetworkServicesEndpointPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the TcpRoute resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#labels NetworkServicesEndpointPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the EndpointPolicy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#name NetworkServicesEndpointPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#project NetworkServicesEndpointPolicy#project}
  */
  readonly project?: string;
  /**
  * A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#server_tls_policy NetworkServicesEndpointPolicy#server_tls_policy}
  */
  readonly serverTlsPolicy?: string;
  /**
  * The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#type NetworkServicesEndpointPolicy#type}
  */
  readonly type: string;
  /**
  * endpoint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#endpoint_matcher NetworkServicesEndpointPolicy#endpoint_matcher}
  */
  readonly endpointMatcher: NetworkServicesEndpointPolicyEndpointMatcher;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#timeouts NetworkServicesEndpointPolicy#timeouts}
  */
  readonly timeouts?: NetworkServicesEndpointPolicyTimeouts;
  /**
  * traffic_port_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#traffic_port_selector NetworkServicesEndpointPolicy#traffic_port_selector}
  */
  readonly trafficPortSelector?: NetworkServicesEndpointPolicyTrafficPortSelector;
}
export interface NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels {
  /**
  * Required. Label name presented as key in xDS Node Metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#label_name NetworkServicesEndpointPolicy#label_name}
  */
  readonly labelName: string;
  /**
  * Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#label_value NetworkServicesEndpointPolicy#label_value}
  */
  readonly labelValue: string;
}

export function networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsToTerraform(struct?: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_name: cdktn.stringToTerraform(struct!.labelName),
    label_value: cdktn.stringToTerraform(struct!.labelValue),
  }
}


export function networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsToHclTerraform(struct?: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label_name: {
      value: cdktn.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_value: {
      value: cdktn.stringToHclTerraform(struct!.labelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    if (this._labelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValue = this._labelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelName = undefined;
      this._labelValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelName = value.labelName;
      this._labelValue = value.labelValue;
    }
  }

  // label_name - computed: false, optional: false, required: true
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }

  // label_value - computed: false, optional: false, required: true
  private _labelValue?: string; 
  public get labelValue() {
    return this.getStringAttribute('label_value');
  }
  public set labelValue(value: string) {
    this._labelValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValueInput() {
    return this._labelValue;
  }
}

export class NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList extends cdktn.ComplexList {
  public internalValue? : NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels[] | cdktn.IResolvable

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
  public get(index: number): NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference {
    return new NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher {
  /**
  * Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#metadata_label_match_criteria NetworkServicesEndpointPolicy#metadata_label_match_criteria}
  */
  readonly metadataLabelMatchCriteria: string;
  /**
  * metadata_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#metadata_labels NetworkServicesEndpointPolicy#metadata_labels}
  */
  readonly metadataLabels?: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels[] | cdktn.IResolvable;
}

export function networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherToTerraform(struct?: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference | NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_label_match_criteria: cdktn.stringToTerraform(struct!.metadataLabelMatchCriteria),
    metadata_labels: cdktn.listMapper(networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsToTerraform, true)(struct!.metadataLabels),
  }
}


export function networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherToHclTerraform(struct?: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference | NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_label_match_criteria: {
      value: cdktn.stringToHclTerraform(struct!.metadataLabelMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_labels: {
      value: cdktn.listMapperHcl(networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsToHclTerraform, true)(struct!.metadataLabels),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataLabelMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataLabelMatchCriteria = this._metadataLabelMatchCriteria;
    }
    if (this._metadataLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataLabels = this._metadataLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadataLabelMatchCriteria = undefined;
      this._metadataLabels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadataLabelMatchCriteria = value.metadataLabelMatchCriteria;
      this._metadataLabels.internalValue = value.metadataLabels;
    }
  }

  // metadata_label_match_criteria - computed: false, optional: false, required: true
  private _metadataLabelMatchCriteria?: string; 
  public get metadataLabelMatchCriteria() {
    return this.getStringAttribute('metadata_label_match_criteria');
  }
  public set metadataLabelMatchCriteria(value: string) {
    this._metadataLabelMatchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataLabelMatchCriteriaInput() {
    return this._metadataLabelMatchCriteria;
  }

  // metadata_labels - computed: false, optional: true, required: false
  private _metadataLabels = new NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList(this, "metadata_labels", false);
  public get metadataLabels() {
    return this._metadataLabels;
  }
  public putMetadataLabels(value: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels[] | cdktn.IResolvable) {
    this._metadataLabels.internalValue = value;
  }
  public resetMetadataLabels() {
    this._metadataLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataLabelsInput() {
    return this._metadataLabels.internalValue;
  }
}
export interface NetworkServicesEndpointPolicyEndpointMatcher {
  /**
  * metadata_label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#metadata_label_matcher NetworkServicesEndpointPolicy#metadata_label_matcher}
  */
  readonly metadataLabelMatcher: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher;
}

export function networkServicesEndpointPolicyEndpointMatcherToTerraform(struct?: NetworkServicesEndpointPolicyEndpointMatcherOutputReference | NetworkServicesEndpointPolicyEndpointMatcher): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_label_matcher: networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherToTerraform(struct!.metadataLabelMatcher),
  }
}


export function networkServicesEndpointPolicyEndpointMatcherToHclTerraform(struct?: NetworkServicesEndpointPolicyEndpointMatcherOutputReference | NetworkServicesEndpointPolicyEndpointMatcher): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_label_matcher: {
      value: networkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherToHclTerraform(struct!.metadataLabelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesEndpointPolicyEndpointMatcherOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesEndpointPolicyEndpointMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataLabelMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataLabelMatcher = this._metadataLabelMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesEndpointPolicyEndpointMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadataLabelMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadataLabelMatcher.internalValue = value.metadataLabelMatcher;
    }
  }

  // metadata_label_matcher - computed: false, optional: false, required: true
  private _metadataLabelMatcher = new NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference(this, "metadata_label_matcher");
  public get metadataLabelMatcher() {
    return this._metadataLabelMatcher;
  }
  public putMetadataLabelMatcher(value: NetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher) {
    this._metadataLabelMatcher.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataLabelMatcherInput() {
    return this._metadataLabelMatcher.internalValue;
  }
}
export interface NetworkServicesEndpointPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#create NetworkServicesEndpointPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#delete NetworkServicesEndpointPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#update NetworkServicesEndpointPolicy#update}
  */
  readonly update?: string;
}

export function networkServicesEndpointPolicyTimeoutsToTerraform(struct?: NetworkServicesEndpointPolicyTimeouts | cdktn.IResolvable): any {
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


export function networkServicesEndpointPolicyTimeoutsToHclTerraform(struct?: NetworkServicesEndpointPolicyTimeouts | cdktn.IResolvable): any {
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

export class NetworkServicesEndpointPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesEndpointPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesEndpointPolicyTimeouts | cdktn.IResolvable | undefined) {
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
export interface NetworkServicesEndpointPolicyTrafficPortSelector {
  /**
  * List of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#ports NetworkServicesEndpointPolicy#ports}
  */
  readonly ports: string[];
}

export function networkServicesEndpointPolicyTrafficPortSelectorToTerraform(struct?: NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference | NetworkServicesEndpointPolicyTrafficPortSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ports),
  }
}


export function networkServicesEndpointPolicyTrafficPortSelectorToHclTerraform(struct?: NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference | NetworkServicesEndpointPolicyTrafficPortSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesEndpointPolicyTrafficPortSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesEndpointPolicyTrafficPortSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy google_network_services_endpoint_policy}
*/
export class NetworkServicesEndpointPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_endpoint_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkServicesEndpointPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesEndpointPolicy to import
  * @param importFromId The id of the existing NetworkServicesEndpointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesEndpointPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_endpoint_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_endpoint_policy google_network_services_endpoint_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesEndpointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesEndpointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_endpoint_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._authorizationPolicy = config.authorizationPolicy;
    this._clientTlsPolicy = config.clientTlsPolicy;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._serverTlsPolicy = config.serverTlsPolicy;
    this._type = config.type;
    this._endpointMatcher.internalValue = config.endpointMatcher;
    this._timeouts.internalValue = config.timeouts;
    this._trafficPortSelector.internalValue = config.trafficPortSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_policy - computed: false, optional: true, required: false
  private _authorizationPolicy?: string; 
  public get authorizationPolicy() {
    return this.getStringAttribute('authorization_policy');
  }
  public set authorizationPolicy(value: string) {
    this._authorizationPolicy = value;
  }
  public resetAuthorizationPolicy() {
    this._authorizationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationPolicyInput() {
    return this._authorizationPolicy;
  }

  // client_tls_policy - computed: false, optional: true, required: false
  private _clientTlsPolicy?: string; 
  public get clientTlsPolicy() {
    return this.getStringAttribute('client_tls_policy');
  }
  public set clientTlsPolicy(value: string) {
    this._clientTlsPolicy = value;
  }
  public resetClientTlsPolicy() {
    this._clientTlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsPolicyInput() {
    return this._clientTlsPolicy;
  }

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

  // server_tls_policy - computed: false, optional: true, required: false
  private _serverTlsPolicy?: string; 
  public get serverTlsPolicy() {
    return this.getStringAttribute('server_tls_policy');
  }
  public set serverTlsPolicy(value: string) {
    this._serverTlsPolicy = value;
  }
  public resetServerTlsPolicy() {
    this._serverTlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTlsPolicyInput() {
    return this._serverTlsPolicy;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // endpoint_matcher - computed: false, optional: false, required: true
  private _endpointMatcher = new NetworkServicesEndpointPolicyEndpointMatcherOutputReference(this, "endpoint_matcher");
  public get endpointMatcher() {
    return this._endpointMatcher;
  }
  public putEndpointMatcher(value: NetworkServicesEndpointPolicyEndpointMatcher) {
    this._endpointMatcher.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointMatcherInput() {
    return this._endpointMatcher.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesEndpointPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesEndpointPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_port_selector - computed: false, optional: true, required: false
  private _trafficPortSelector = new NetworkServicesEndpointPolicyTrafficPortSelectorOutputReference(this, "traffic_port_selector");
  public get trafficPortSelector() {
    return this._trafficPortSelector;
  }
  public putTrafficPortSelector(value: NetworkServicesEndpointPolicyTrafficPortSelector) {
    this._trafficPortSelector.internalValue = value;
  }
  public resetTrafficPortSelector() {
    this._trafficPortSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPortSelectorInput() {
    return this._trafficPortSelector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_policy: cdktn.stringToTerraform(this._authorizationPolicy),
      client_tls_policy: cdktn.stringToTerraform(this._clientTlsPolicy),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      server_tls_policy: cdktn.stringToTerraform(this._serverTlsPolicy),
      type: cdktn.stringToTerraform(this._type),
      endpoint_matcher: networkServicesEndpointPolicyEndpointMatcherToTerraform(this._endpointMatcher.internalValue),
      timeouts: networkServicesEndpointPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_port_selector: networkServicesEndpointPolicyTrafficPortSelectorToTerraform(this._trafficPortSelector.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_policy: {
        value: cdktn.stringToHclTerraform(this._authorizationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_policy: {
        value: cdktn.stringToHclTerraform(this._clientTlsPolicy),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      server_tls_policy: {
        value: cdktn.stringToHclTerraform(this._serverTlsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_matcher: {
        value: networkServicesEndpointPolicyEndpointMatcherToHclTerraform(this._endpointMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesEndpointPolicyEndpointMatcherList",
      },
      timeouts: {
        value: networkServicesEndpointPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesEndpointPolicyTimeouts",
      },
      traffic_port_selector: {
        value: networkServicesEndpointPolicyTrafficPortSelectorToHclTerraform(this._trafficPortSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesEndpointPolicyTrafficPortSelectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
